import { URL_API_LOGIN } from "../settings/urlsApi";

export const loginAtApi = ({ username, password }) => {
  const userResponseAPI = fetch(URL_API_LOGIN, {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));
  return { userResponseAPI };
};
