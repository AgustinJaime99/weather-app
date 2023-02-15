export function formatTime(timestamp: number): string {
  const date = new Date(timestamp * 1000);
  const month = date.toLocaleString('default', { month: 'short' });
  const day = date.getDate();
  return `${month}, ${day}`;
}
