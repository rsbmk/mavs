import { URL_API } from 'settings/urlsApi'

export function getSigleCharacter ({ id }) {
  const API_URL = URL_API({ id })

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
