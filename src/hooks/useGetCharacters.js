import Context from 'context/characterContext'
import { useContext, useEffect, useState } from 'react'
import { getCharacters } from 'services/getCharacters'

export function useGetCharacter (keyword) {
  const { characterContext, setCharacterContext } = useContext(Context)
  const [loading, setLoading] = useState(false)

  useEffect(function () {
    setLoading(true)
    getCharacters({ keyword })
      .then(character => {
        setCharacterContext(character)
        setLoading(false)
      })
  }, [keyword])

  return { characterContext, loading }
}
