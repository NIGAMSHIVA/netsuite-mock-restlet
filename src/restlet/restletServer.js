import express from "express";
import { beforeSubmit } from "../suitescript/userEvent.js";

const app = express();
app.use(express.json());

app.post("/netsuite/record", (req, res) => {
  try {
    console.log("Incoming body:", req.body); // 👈 Add this line
    const validated = beforeSubmit(req.body);
    res.status(200).json({ success: true, validated });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});


app.listen(4000, () => console.log("Mock NetSuite RESTlet running on port 4000"));
