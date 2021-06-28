
const baseURL = 'http://localhost:3001/api/characters/'

export const getAllLike = ({ jwt }) => {
  return fetch(baseURL, {
    headers: {
      // eslint-disable-next-line quote-props
      'Authorization': `Bearer ${jwt}`
    }
  })
    .then(res => res.json())
    .catch(error => console.log(error))
}

export const sendLike = ({ idCharacter, jwt }) => {
  return fetch(baseURL, {
    method: 'POST',
    body: JSON.stringify({ idCharacter }),
    headers: {
      'Content-Type': 'application/json',
      // eslint-disable-next-line quote-props
      'Authorization': `Bearer ${jwt}`
    }
  }).then(res => res.json())
}

export const removeLike = ({ idCharacter, jwt }) => {
  return fetch(baseURL, {
    method: 'DELETE',
    body: JSON.stringify({ idCharacter }),
    headers: {
      'Content-Type': 'application/json',
      // eslint-disable-next-line quote-props
      'Authorization': `Bearer ${jwt}`
    }
  }).then(res => res.json())
}
