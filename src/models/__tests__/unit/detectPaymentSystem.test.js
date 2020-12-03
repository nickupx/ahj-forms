import detectPaymentSystem from '../../detectPaymentSystem'

test('should be visa', () => {
  const result = detectPaymentSystem('4111111111111111')
  expect(result).toBe('visa')
})

test('should be mc', () => {
  const result = detectPaymentSystem('5464335067294031')
  expect(result).toBe('mc')
})

test('should be jcb', () => {
  const result = detectPaymentSystem('3529560790456262')
  expect(result).toBe('jcb')
})
