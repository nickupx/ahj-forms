/* eslint-disable no-plusplus */
/* eslint-disable no-cond-assign */
export default function validateLuhn(value) {
  // украдем функцию с гитхаба, чуть перепишем
  let nCheck = 0
  let bEven = false
  const val = value.replace(/\D/g, '')

  for (let n = val.length - 1; n >= 0; n--) {
    const cDigit = val.charAt(n)
    let nDigit = parseInt(cDigit, 10)

    if (bEven && (nDigit *= 2) > 9) nDigit -= 9

    nCheck += nDigit
    bEven = !bEven
  }

  return (nCheck % 10) === 0
}
