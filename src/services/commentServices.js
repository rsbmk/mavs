import { URL_API_COMMENT } from 'settings/urlsApi.js'

export const sendComment = ({ comment, idCharacter, jwt }) => {
  return fetch(URL_API_COMMENT, {
    method: 'POST',
    headers: {
      // eslint-disable-next-line quote-props
      'Authorization': `Bearer ${jwt}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ comment, idCharacter })
  }).then(res => res.json())
    .then(data => { return data })
    .catch(e => console.log(e))
}

export const getAllComments = () => {
  return fetch(URL_API_COMMENT)
    .then(res => res.json())
    .catch(e => console.log(e))
}
