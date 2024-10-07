export const { VITE_MARVEL_PUBLIC_KEY, VITE_MARVEL_PRIVATE_KEY, VITE_MARVEL_BASE_URL, VITE_MARVEL_HASH, VITE_MAVS_BASE_URL } = import.meta.env;

export const SESSION_STORAGE_KEYS = {
  JWT: "jwt",
};
export const SESSION_STALE_TIME = 3 * 60 * 1000;

export const INPUTS_NAMES = {
  SEARCH: "nameStartsWith",
  SELECT_COMIC: "comics",
  USERNAME: "username",
  PASSWORD: "password",
  NAME: "name",
};

export const CLEAR_SELECTION = "Clear filter";

export const COMICS_LIST = [
  {
    id: 17548,
    title: "Avengers (1998) #62",
  },
  {
    id: 14328,
    title: "X-Men (1991) #4",
  },
  {
    id: 109961,
    title: "Spider-Man (2022) #11",
  },
  {
    id: CLEAR_SELECTION,
    title: CLEAR_SELECTION,
  },
];

export const PATHS = {
  HOME: "/home",
  LOGIN: "/login",
  SIGNUP: "/signup",
  /**
   * @example "/character/123"
   * @default "/character"
   */
  CHARACTER_DETAIL: "/character",
};

export enum URL_PARAMS {
  CHARACTER_ID = "characterId",
}

export const QUERY_KEYS = {
  CHARACTERS: "characters",
  LIKES_BY_USER: "likes-by-user",
  COMMENTS_BY_CHARACTER: "comments-by-character",
};
