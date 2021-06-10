import React from 'react'

import './hero.css'

import { Link } from 'wouter'

function Hero ({ path, extension, name, description, id }) {
  return (
    <Link to={`/detail/${id}`} className='cardCharacter'>
      <img className='imgCharacter' src={`${path}.${extension}`}/>
      <h3 className='nameCharacter'>{name}</h3>
      <p className='descriptionCharacter'>{description || 'No description'}</p>
    </Link>
  )
}
export default React.memo(Hero)
