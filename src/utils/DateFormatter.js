export function dateFormatter(date) {
  const newDate = new Date(date);
  const y = newDate.toLocaleDateString();
  console.log(y);
}
