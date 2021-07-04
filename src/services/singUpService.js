
const baseURL = 'http://localhost:3001/api/users/'

export const singUpService = ({ name, username, password }) => {
  const resAPILogin = fetch(baseURL, {
    method: 'POST',
    body: JSON.stringify({ name, username, password }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .catch(error => console.log(error))
  return { resAPILogin }
}
