import data from './paymentSystems.json'

export default function detectPaymentSystem(value) {
  for (const system of data) {
    const regexp = new RegExp(`${system.pattern}`)
    if (regexp.test(value)) {
      return system.id
    }
  }
  return false
}
