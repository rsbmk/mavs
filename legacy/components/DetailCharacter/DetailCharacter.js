import "../Hero/hero.css";
import "./detailCharacter.css";

import { CharacterWithContext } from "./CharacterWC";
import { CharacterWithFetch } from "./characterWF";
import { Comment } from "../Comment";

export function DetailOfCharacter({ character }) {
  const idCharacter = character[0] ? character[0].id : character.id;

  return (
    <>
      {
        /* This is because when the character is entered from home,
      for better performance the character is taken from the context.
      But if the detail page is reloaded or it is searched directly,
      the API call is made since the context is empty */
        character[0] ? <CharacterWithFetch character={character} /> : <CharacterWithContext character={character} />
      }
      <Comment idCharacter={idCharacter} />
    </>
  );
}
