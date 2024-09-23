import { URL_SINGLE_CHARACTER } from "../settings/urlsApi";

export function getSigleCharacter({ id }) {
  const URL = URL_SINGLE_CHARACTER({ id });

  return fetch(URL)
    .then((res) => res.json())
    .then(dataFromApli);
}

function dataFromApli({ data }) {
  const { results = [] } = data;
  // console.log(results);
  return results;
}
