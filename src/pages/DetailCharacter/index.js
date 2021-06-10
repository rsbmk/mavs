import { DetailOfCharacter } from 'components/DetailCharacter/DetailCharacter'
import Header from 'components/Header'/*
import { Spinner } from 'components/Spinner' */

import { useCallSingleCharacter } from 'hooks/useCallSingleCharacter'

import { Helmet } from 'react-helmet'

export function DetailCharacter ({ params }) {
  const { character } = useCallSingleCharacter(params)

  if (!character) return null
  return (
    <>
      <Helmet>
          <title>{`${character.name} details`}</title>
          <meta name='description' content={`This page is the details of the search ${character.name}`}/>
      </Helmet>
      <Header/>
      <DetailOfCharacter character={character}/>
    </>

  )
}
