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
  const fxUseCase = aboutConfig.useCases[0]

  usdjpy = await getPriceAfterInput(aboutPage, aboutUrl, fxUseCase)

  expect(usdjpy).toBeGreaterThanOrEqual(fxUseCase.range.min)
  expect(usdjpy).toBeLessThanOrEqual(fxUseCase.range.max)

  aboutPage.close()
})

for (const service of serviceConfig) {
  test(`${service.name}の計算結果が想定内`, async () => {
    const serviceUrl = buildUrl(service.path)

    for (const useCase of service.useCases) {
      const servicePage = await browser.newPage()
      const price = await getPriceAfterInput(servicePage, serviceUrl, useCase)
      const priceInUsd = price / usdjpy

      expect(priceInUsd).toBeGreaterThanOrEqual(useCase.range.min)
      expect(priceInUsd).toBeLessThanOrEqual(useCase.range.max)

      servicePage.close()
    }
  })
}
