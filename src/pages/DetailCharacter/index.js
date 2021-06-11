import { DetailOfCharacter } from 'components/DetailCharacter/DetailCharacter'
import Header from 'components/Header'
import { Spinner } from 'components/Spinner'
import { useCallSingleCharacter } from 'hooks/useCallSingleCharacter'
import '../../components/DetailCharacter/detailCharacter.css'

export function DetailCharacter ({ params }) {
  const { character, loading, isError } = useCallSingleCharacter({ id: params.id })

  if (!character) return null
  if (isError) return <h2>There was an error in obtaining the data</h2>

  return (
    <>
      <Header/>
      {
        loading
          ? <Spinner/>
          : <DetailOfCharacter character={character}/>
      }
    </>
  )
}
