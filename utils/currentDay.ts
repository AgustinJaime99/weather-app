export function getCurrentDayAndMonth(): string {
  const date = new Date();
  const month = date.toLocaleString('default', { month: 'short' });
  const day = date.getDate();
  return `${month}, ${day}`;
}
