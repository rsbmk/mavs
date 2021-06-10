const PUBLIC_KEY = 'd7d7b9e740b86d1ad247cf85e2470fd8'
const hash = 'c20a02eaa0de7e477a390cb3f0dacf26'
const API_URL = 'https://gateway.marvel.com:443/v1/public/characters'

export function URL_API ({ id, keyword, limit = 25, page = 0 }) {
  const URL = keyword
    ? `${API_URL}?limit=${limit}&offset=${limit * page}&nameStartsWith=${keyword}&ts=1&apikey=${PUBLIC_KEY}&hash=${hash}`
    : id
      ? `${API_URL}/${id}?ts=1&apikey=${PUBLIC_KEY}&hash=${hash}`
      : `${API_URL}?limit=${limit}&offset=${limit * page}&ts=1&apikey=${PUBLIC_KEY}&hash=${hash}`

  return URL
}
