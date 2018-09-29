import getPriceAfterInput from './util/getPriceAfterInput'
import * as config from './config'

const buildUrl = path => `http://localhost:8888${path}`
const aboutConfig = config.about
const serviceConfig = Object.keys(config)
  .filter(name => name !== 'about')
  .map(name => config[name])

const fxUseCase = aboutConfig.useCases[0]
let usdjpy

// 為替の確認
test(fxUseCase.name, async () => {
  const aboutPage = await browser.newPage()
  const aboutUrl = buildUrl(aboutConfig.path)

  usdjpy = await getPriceAfterInput(aboutPage, aboutUrl, fxUseCase)

  expect(usdjpy).toBeGreaterThanOrEqual(fxUseCase.range.min)
  expect(usdjpy).toBeLessThanOrEqual(fxUseCase.range.max)

  aboutPage.close()
})

// 各サービスの計算結果を確認
for (const service of serviceConfig) {
  const serviceUrl = buildUrl(service.path)

  for (const useCase of service.useCases) {
    test(useCase.name, async () => {
      const servicePage = await browser.newPage()
      const price = await getPriceAfterInput(servicePage, serviceUrl, useCase)
      const priceInUsd = price / usdjpy

      expect(priceInUsd).toBeGreaterThanOrEqual(useCase.range.min)
      expect(priceInUsd).toBeLessThanOrEqual(useCase.range.max)

      servicePage.close()
    })
  }
}
