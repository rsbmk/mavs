import { URL_API_GET_CHARACTER } from "../settings/urlsApi";

export const getAllLike = ({ jwt }) => {
  return fetch(URL_API_GET_CHARACTER, {
    headers: {
      // eslint-disable-next-line quote-props
      Authorization: `Bearer ${jwt}`,
    },
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));
};

export const sendLike = ({ idCharacter, jwt }) => {
  return fetch(URL_API_GET_CHARACTER, {
    method: "POST",
    body: JSON.stringify({ idCharacter }),
    headers: {
      "Content-Type": "application/json",
      // eslint-disable-next-line quote-props
      Authorization: `Bearer ${jwt}`,
    },
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));
};

export const removeLike = ({ idCharacter, jwt }) => {
  return fetch(URL_API_GET_CHARACTER, {
    method: "DELETE",
    body: JSON.stringify({ idCharacter }),
    headers: {
      "Content-Type": "application/json",
      // eslint-disable-next-line quote-props
      Authorization: `Bearer ${jwt}`,
    },
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));
};
