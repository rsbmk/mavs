import { useEffect, useState } from 'react'
import { getSigleCharacter } from 'services/getSigleCharacter'
import { useGetCharacter } from './useGetCharacters'

export function useCallSingleCharacter ({ id }) {
  const { characterContext } = useGetCharacter()
  const characterFromContext = characterContext.find(single =>
    single.id === Number(id))

  const [character, setCharacter] = useState(characterFromContext)
  const [loading, setLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(function () {
    if (!character) {
      setLoading(true)
      getSigleCharacter({ id })
        .then(sigle => {
          setCharacter(sigle)
          setLoading(false)
          setIsError(false)
        }).catch(() => {
          setLoading(false)
          setIsError(true)
        })
    }
  }, [id, character])
  return { character, loading, isError }
}
