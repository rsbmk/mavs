import React from 'react'

import Hero from 'components/Hero'
import { Spinner } from 'components/Spinner'

import './heroList.css'

function HeroList ({ characterContext, loading }) {
  /* if (!characters[0]) return <h2>Your search did not return results</h2> */
  return (
    <div className='heroList'>
      {
        loading
          ? <Spinner/>
          : (
              characterContext.map(({ id, name, thumbnail, description }) => {
                return (
                <Hero
                key={id}
                id={id}
                description={description}
                name={name}
                path={thumbnail.path}
                extension={thumbnail.extension}
                />
                )
              })
            )
      }
    </div>
  )
}
export default React.memo(HeroList)
