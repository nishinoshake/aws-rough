import getPriceAfterInput from './util/getPriceAfterInput'
import * as config from './config'

const buildUrl = path => `http://localhost:8888${path}`
const topConfig = config.top
const serviceConfig = Object.keys(config)
  .filter(name => name !== 'top')
  .map(name => config[name])

const fxUseCase = topConfig.useCases[0]
let usdjpy

// 為替の確認
test(fxUseCase.name, async () => {
  const topPage = await browser.newPage()
  const topUrl = buildUrl(topConfig.path)

  usdjpy = await getPriceAfterInput(topPage, topUrl, fxUseCase)

  expect(usdjpy).toBeGreaterThanOrEqual(fxUseCase.range.min)
  expect(usdjpy).toBeLessThanOrEqual(fxUseCase.range.max)

  await topPage.close()
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

      await servicePage.close()
    })
  }
}
