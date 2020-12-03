import validateLuhn from '../../validateLuhn'

test('should be validated', () => {
  const result = validateLuhn('4111111111111111')
  expect(result).toBeTruthy()
})

test('should be validated', () => {
  const result = validateLuhn('6011989121423832')
  expect(result).toBeTruthy()
})

test('should not be validated', () => {
  const result = validateLuhn('4111111111111113')
  expect(result).toBeFalsy()
})

test('should not be validated', () => {
  const result = validateLuhn('6011989122423832')
  expect(result).toBeFalsy()
})
