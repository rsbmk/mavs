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

export const updateComment = ({ idComment, comment }) => {
  return fetch(URL_API_COMMENT, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ idComment, comment })
  }).then(res => res.json())
    .catch(e => console.log(e))
}

export const deleteComment = ({ idComment }) => {
  return fetch(URL_API_COMMENT, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ idComment })
  }).then(res => res.json())
    .catch(e => console.log(e))
}
