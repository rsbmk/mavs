// api marvel
export const PUBLIC_KEY = 'd7d7b9e740b86d1ad247cf85e2470fd8'
export const hash = 'c20a02eaa0de7e477a390cb3f0dacf26'
export const API_URL = 'https://gateway.marvel.com:443/v1/public/characters'

// api mavs
export const URL_API_GET_CHARACTER = 'http://localhost:3001/api/characters/'
export const URL_API_LOGIN = 'http://localhost:3001/api/login'
export const URL_API_SINGUP = 'http://localhost:3001/api/users/'

export const URL_SINGLE_CHARACTER = ({ id } = {}) => {
  return `${API_URL}/${id}?ts=1&apikey=${PUBLIC_KEY}&hash=${hash}`
}

export function URL_API ({ keyword, limit = 50, page = 0 } = {}) {
  const URL = keyword
    ? `${API_URL}?limit=${limit}&offset=${limit * page}&nameStartsWith=${keyword}&ts=1&apikey=${PUBLIC_KEY}&hash=${hash}`
    : `${API_URL}?limit=${limit}&offset=${limit * page}&ts=1&apikey=${PUBLIC_KEY}&hash=${hash}`

  return URL
}
