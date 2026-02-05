export function formatDate(isoDate: string): string {
  const date = new Date(isoDate);

  const day = date.getUTCDate(); // число месяца
  const monthNames = [
    "января", "февраля", "марта", "апреля", "мая", "июня",
    "июля", "августа", "сентября", "октября", "ноября", "декабря"
  ];
  const month = monthNames[date.getUTCMonth()]; // месяц текстом
  const year = date.getUTCFullYear();

  return `${day} ${month} ${year}`;
}