import { InfoCharacterDetail } from 'components/InfoCharacterDetail'
import { Helmet } from 'react-helmet'

export function CharacterWithContext ({ character }) {
  return (
  <article className='cardDetailCharacter'>
        <Helmet>
          <title>{`${character.name} details`}</title>
          <meta name='description' content={`This page is the details of the search ${character.name}`}/>
      </Helmet>
      <div className='wrpaImgDetail'>
        <img className='imgDetailCharacter'
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}/>
      </div>
      <div className='wrapInfoDetail'>
        <h2 className='nameDetailCharacter'>{character.name}</h2>
        <h3 className='descriptionDetailCharacter'>{character.description || 'No Description ...'}</h3>
        <div className='wrapInfoCharacter'>
          <InfoCharacterDetail title={'Comics'} info={character.comics.items || 'No Content...'}/>
          <InfoCharacterDetail title={'Series'} info={character.series.items || 'No Content...'}/>
          <InfoCharacterDetail title={'Stories'} info={character.stories.items || 'No Content...'}/>
          <InfoCharacterDetail title={'Events'} info={character.events.items || 'No Content...'}/>
        </div>
      </div>
    </article>
  )
}
