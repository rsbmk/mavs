import { URL_API } from 'settings/urlsApi'

export function getCharacters ({ keyword }) {
  const API_URL = URL_API({ keyword })

  const characters = fetch(API_URL)
    .then(res => res.json())
    .then(dataFromApli)

  return characters
}

function dataFromApli ({ data }) {
  const { results = [] } = data
  // console.log(results);
  return results
}
