import { API_URL, hash, PUBLIC_KEY } from 'settings/urlsApi'

export function getSigleCharacter ({ id }) {
  const URL = `${API_URL}/${id}?ts=1&apikey=${PUBLIC_KEY}&hash=${hash}`

  return fetch(URL)
    .then(res => res.json())
    .then(dataFromApli)
}

function dataFromApli ({ data }) {
  const { results = [] } = data
  // console.log(results);
  return results
}
