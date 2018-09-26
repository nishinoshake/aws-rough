import axios from 'axios'

// const apiOrigin = process.env.API_ORIGIN || 'http://aws-catalog.noplan.cc.s3-website-ap-northeast-1.amazonaws.com'
const apiOrigin = 'http://aws-catalog.noplan.cc.s3-website-ap-northeast-1.amazonaws.coma'

const client = axios.create({
  responseType: 'json',
  timeout: 20000 // 20s
})

const fetchJson = path =>
  new Promise((resolve, reject) =>
    client
      .get(path)
      .then(response => resolve(response.data))
      .catch(error => reject(error))
  )

export const fetchPrice = () => fetchJson(`${apiOrigin}/json/price.json`)

export const fetchFx = () => fetchJson(`${apiOrigin}/json/fx.json`)
