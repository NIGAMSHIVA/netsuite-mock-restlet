export function beforeSubmit(record) {
  if (!record.email) {
    throw new Error("Email is required");
  }
  if (!record.email.includes("@")) {
    throw new Error("Invalid email format!");
  }
  record.createdAt = new Date().toISOString();
  console.log("Record validated successfully.");
  return record;
}
