import React from 'react'
import { Link } from 'wouter'
import './hero.css'

function Hero ({ path, extension, name, description, id }) {
  return (
    <Link to={`/detail/${id}`} className='cardCharacter'>
      <img loading='lazy' className='imgCharacter' src={`${path}.${extension}`}/>
      <h3 className='nameCharacter'>{name}</h3>
      <p className='descriptionCharacter'>{description || 'No description'}</p>
    </Link>
  )
}
export default React.memo(Hero)
