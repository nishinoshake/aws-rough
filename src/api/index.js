import axios from 'axios'

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

export const fetchPrice = () => fetchJson('/json/price.json')

export const fetchFx = () => fetchJson('/json/fx.json')
