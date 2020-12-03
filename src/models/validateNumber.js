export default function validateNumber(value) {
  // проверим, что вообще номер, пробелы и дефисы разрешим
  return !/[^0-9-\s]+/.test(value)
}
