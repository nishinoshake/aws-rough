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

export const fetchPrice = () => fetchJson(`${process.env.storageUrl}/json/price.json`)

export const fetchFx = () => fetchJson(`${process.env.storageUrl}/json/fx.json`)

export const fetchZ = hash => fetchJson(`${process.env.apiUrl}/z/${hash}`)

export const postZ = (hash, tables) =>
  new Promise((resolve, reject) =>
    client
      .post(`${process.env.apiUrl}/z`, { hash, tables })
      .then(response => resolve(response.data))
      .catch(error => reject(error))
  )

export const postContact = text =>
  new Promise((resolve, reject) =>
    client
      .post(`${process.env.apiUrl}/contact`, { text })
      .then(response => resolve(response.data))
      .catch(error => reject(error))
  )
