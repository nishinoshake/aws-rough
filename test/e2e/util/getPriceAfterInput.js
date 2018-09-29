export default async function(pageInstance, url, useCase) {
  await pageInstance.goto(url)
  await pageInstance.waitForSelector(useCase.waitFor)

  if (useCase.actions && useCase.actions.length) {
    for (const action of useCase.actions) {
      await pageInstance[action.type](action.target, action.value)
    }
  }

  const price = await pageInstance.$eval(useCase.price.target, el => el.textContent)

  return parseFloat(price.replace(/,/g, ''))
}
