import JsSHA from 'jssha'

export const generateHash = (str, length = 20) => {
  const shaObj = new JsSHA('SHA-1', 'TEXT')

  shaObj.update(str)

  const hash = shaObj.getHash('HEX')

  return hash.slice(0, length)
}
