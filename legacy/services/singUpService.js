import { URL_API_SINGUP } from "../settings/urlsApi";

export const singUpService = ({ name, username, password }) => {
  const resAPILogin = fetch(URL_API_SINGUP, {
    method: "POST",
    body: JSON.stringify({ name, username, password }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));
  return { resAPILogin };
};
