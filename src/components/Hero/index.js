import { CharacterButtons } from 'components/ButtonLike'
import React from 'react'
import { Link } from 'wouter'
import './hero.css'

function Hero ({ path, extension, name, description, id }) {
  return (
    <div className='cardCharacter'>
      <Link to={`/detail/${id}`} className='wrap-hero'>
        <img loading='lazy' className='imgCharacter' src={`${path}.${extension}`}/>
        <h3 className='nameCharacter'>{name}</h3>
        <p className='descriptionCharacter'>{description || 'No description'}</p>
      </Link>
        <CharacterButtons idCharacter={id}/>
    </div>
  )
}
export default React.memo(Hero)
