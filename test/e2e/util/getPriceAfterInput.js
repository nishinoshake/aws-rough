export default async function(page, url, useCase) {
  await page.goto(url)
  await page.waitForSelector(useCase.waitFor)

  if (Array.isArray(useCase.actions) && useCase.actions.length) {
    for (const action of useCase.actions) {
      await page[action.type](action.target, action.value)
    }
  }

  const price = await page.$eval(useCase.price.target, el => el.textContent)

  return parseFloat(price.replace(/,/g, ''))
}
