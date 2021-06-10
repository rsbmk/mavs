import './detailCharacter.css'

import { InfoCharacterDetail } from '../InfoCharacterDetail'

export function DetailOfCharacter ({ character }) {
  if (!character) return null

  return (
    <article className='cardDetailCharacter'>
      <div className='wrpaImgDetail'>
        <img className='imgDetailCharacter'
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}/>
      </div>
      <div className='wrapInfoDetail'>
        <h2 className='nameDetailCharacter'>{character.name}</h2>
        <h3 className='descriptionDetailCharacter'>{character.description || 'No Description ...'}</h3>
        <div className='wrapInfoCharacter'>
          <InfoCharacterDetail title={'Comics'} info={character.comics.items}/>
          <InfoCharacterDetail title={'Series'} info={character.series.items}/>
          <InfoCharacterDetail title={'Stories'} info={character.stories.items}/>
          <InfoCharacterDetail title={'Events'} info={character.events.items}/>
        </div>
      </div>
    </article>
  )
}
