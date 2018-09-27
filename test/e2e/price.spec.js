import getPriceAfterInput from './util/getPriceAfterInput'
import * as config from './config'

const buildUrl = path => `http://localhost:8888${path}`
const aboutConfig = config.about
const serviceConfig = Object.keys(config)
  .filter(name => name !== 'about')
  .map(name => config[name])

let usdjpy

test('日本円の為替レートが想定内', async () => {
  const aboutPage = await browser.newPage()
  const aboutUrl = buildUrl(aboutConfig.path)

  usdjpy = await getPriceAfterInput(aboutPage, aboutUrl, aboutConfig)

  expect(usdjpy).toBeGreaterThanOrEqual(aboutConfig.range.min)
  expect(usdjpy).toBeLessThanOrEqual(aboutConfig.range.max)
})

for (const service of serviceConfig) {
  test(`${service.name}の計算結果が想定内`, async () => {
    const serviceUrl = buildUrl(service.path)
    const servicePage = await browser.newPage()
    const price = await getPriceAfterInput(servicePage, serviceUrl, service)
    const priceInUsd = price / usdjpy

    expect(priceInUsd).toBeGreaterThanOrEqual(service.range.min)
    expect(priceInUsd).toBeLessThanOrEqual(service.range.max)
  })
}
