export const isValidNumber = val => {
  const floatNumber = parseFloat(val)

  if (isFinite(val) && !isNaN(floatNumber) && floatNumber >= 0) {
    return true
  }

  return false
}

export const toNumber = val => (isValidNumber(val) ? parseFloat(val) : 0)
