import '../Hero/hero.css'
import './detailCharacter.css'

import { CharacterWithContext } from './characterWcontext'
import { CharacterWithFetch } from './CharacterWfetch'
import { Comment } from 'components/Comment'

export function DetailOfCharacter ({ character }) {
  // console.log(character)
  return <>
  {
    character[0]
      ? <CharacterWithContext character={character}/>
      : <CharacterWithFetch character={character}/>
  }
  <Comment idCharacter={character.id}/>
  </>
}
