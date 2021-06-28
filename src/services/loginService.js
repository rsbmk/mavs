
const baseURL = 'http://localhost:3001/api/login'

export const loginAtApi = ({ username, password }) => {
  const userResponseAPI = fetch(baseURL, {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .catch(error => console.log(error))
  return { userResponseAPI }
}
