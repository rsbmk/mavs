import Context from 'context/characterContext'
import { useContext, useEffect, useState } from 'react'
import { getCharacters } from 'services/getCharacters'

const INITIAL_PAGE = 0

export function useGetCharacter (keyword) {
  const { characterContext, setCharacterContext } = useContext(Context)
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)

  useEffect(function () {
    setLoading(true)
    getCharacters({ keyword })
      .then(character => {
        setCharacterContext(character)
        setLoading(false)
      })
  }, [keyword])

  useEffect(function () {
    if (page === INITIAL_PAGE) return
    getCharacters({ keyword, page })
      .then(nextCharacter => {
        setCharacterContext(preState => preState.concat(nextCharacter))
      })
  }, [page])

  return { characterContext, loading, setPage }
}
