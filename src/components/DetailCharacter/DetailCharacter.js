import { Helmet } from 'react-helmet'
import '../Hero/hero.css'
import { InfoCharacterDetail } from '../InfoCharacterDetail'
import './detailCharacter.css'

export function DetailOfCharacter ({ character }) {
  return <>
  {
    character[0]
      ? character.map(({ name, id, thumbnail, description, comics, series, stories, events }) => {
        return <article key={id} className='cardDetailCharacter'>
          <Helmet>
          <title>{`${name} details`}</title>
          <meta name='description' content={`This page is the details of the search ${character.name}`}/>
      </Helmet>
      <div className='wrpaImgDetail'>
        <img className='imgDetailCharacter'
        src={`${thumbnail.path}.${thumbnail.extension}`}/>
      </div>
      <div className='wrapInfoDetail'>
        <h2 className='nameDetailCharacter'>{name}</h2>
        <h3 className='descriptionDetailCharacter'>{description || 'No Description ...'}</h3>
        <div className='wrapInfoCharacter'>
          <InfoCharacterDetail title={'Comics'} info={comics.items}/>
          <InfoCharacterDetail title={'Series'} info={series.items}/>
          <InfoCharacterDetail title={'Stories'} info={stories.items}/>
          <InfoCharacterDetail title={'Events'} info={events.items}/>
        </div>
      </div>
    </article>
      })
      : (<article className='cardDetailCharacter'>
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
          <InfoCharacterDetail title={'Comics'} info={character.comics.items}/>
          <InfoCharacterDetail title={'Series'} info={character.series.items}/>
          <InfoCharacterDetail title={'Stories'} info={character.stories.items}/>
          <InfoCharacterDetail title={'Events'} info={character.events.items}/>
        </div>
      </div>
    </article>)
      }
  </>
  /* <article className='cardDetailCharacter'>
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
    </article> */
}
