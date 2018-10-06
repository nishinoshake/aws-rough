import axios from 'axios'

const apiOrigin = process.env.API_ORIGIN || 'https://aws-api.noplan.cc'
const storageOrigin =
  process.env.STORAGE_ORIGIN || 'http://aws-catalog.noplan.cc.s3-website-ap-northeast-1.amazonaws.com'

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

export const fetchPrice = () => fetchJson(`${storageOrigin}/json/price.json`)

export const fetchFx = () => fetchJson(`${storageOrigin}/json/fx.json`)

export const fetchZ = hash => fetchJson(`${apiOrigin}/z/${hash}`)

export const postZ = (hash, tables) =>
  new Promise((resolve, reject) =>
    client
      .post(`${apiOrigin}/z`, { hash, tables })
      .then(response => resolve(response.data))
      .catch(error => reject(error))
  )
