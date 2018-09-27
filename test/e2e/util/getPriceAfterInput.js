export default async function(pageInstance, url, config) {
  await pageInstance.goto(url)
  await pageInstance.waitForSelector(config.waitFor)

  if (config.actions && config.actions.length) {
    for (const action of config.actions) {
      await pageInstance[action.type](action.target, action.value)
    }
  }

  const price = await pageInstance.$eval(config.price.target, el => el.textContent)

  return parseFloat(price.replace(/,/g, ''))
}
