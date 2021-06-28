import Context from 'context/characterContext'
import { useContext, useEffect, useState } from 'react'
import { getCharacters } from 'services/getCharacters'

export function useGetCharacter (keyword) {
  const { characterContext, setCharacterContext } = useContext(Context)
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0)

  useEffect(function () {
    // if (!characterContext || keyword) {
    setLoading(true)
    getCharacters({ keyword })
      .then(character => {
        setCharacterContext(character)
        setLoading(false)
      })
    // }
  }, [keyword])

  useEffect(function () {
    if (page === 0) return
    getCharacters({ keyword, page })
      .then(nextCharacter => {
        setCharacterContext(preState => preState.concat(nextCharacter))
      })
  }, [page])

  return { characterContext, loading, setPage }
}
