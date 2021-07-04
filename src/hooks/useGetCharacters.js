import { useEffect } from 'react'
import { getCharacters } from 'services/getCharacters'
import { reducerCharacter } from './reducerCharacter'

export function useGetCharacter (keyword) {
  const {
    loading,
    page,
    characterContext,
    setCharacterContext,
    setLoading,
    setPage
  } = reducerCharacter()

  useEffect(function () {
    // if (Boolean(characterContext) && keyword) return
    setLoading(true)
    getCharacters({ keyword })
      .then(character => {
        setCharacterContext(character)
        setLoading(false)
      })
  }, [keyword])

  useEffect(function () {
    if (page === 0) return
    getCharacters({ keyword, page })
      .then(nextCharacter => {
        console.log('fui por la otra pagina')
        setCharacterContext(preState => preState.concat(nextCharacter))
      })
  }, [page, keyword])

  return { characterContext, loading, page, setPage }
}
