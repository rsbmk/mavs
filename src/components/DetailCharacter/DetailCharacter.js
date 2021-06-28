import '../Hero/hero.css'
import './detailCharacter.css'

import { CharacterWithContext } from './characterWcontext'
import { CharacterWithFetch } from './CharacterWfetch'

export function DetailOfCharacter ({ character }) {
  return <>
  {
    character[0]
      ? <CharacterWithContext character={character}/>
      : <CharacterWithFetch character={character}/>
  }
  </>
}
