// Simulate a Scheduled Script
export function runSchedule(records) {
  records.forEach((r) => {
    console.log(`Sending invoice reminder to ${r.email}`);
  });
}
