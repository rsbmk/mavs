export const { VITE_MARVEL_PUBLIC_KEY, VITE_MARVEL_PRIVATE_KEY, VITE_MARVEL_BASE_URL, VITE_MARVEL_HASH } = import.meta.env;

export const INPUTS_NAMES = {
  SEARCH: "nameStartsWith",
  SELECT_COMIC: "comics",
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
