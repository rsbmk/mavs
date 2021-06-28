import { useUser } from 'hooks/useUser'
import { createContext, useEffect, useState } from 'react'
import { getAllLike } from 'services/likeService'

const context = createContext({})

export function LikeCharacterContextProvider ({ children }) {
  const [likeContext, setLikeContext] = useState([])
  const { isLogged, userContext } = useUser()

  useEffect(() => {
    if (!isLogged) return setLikeContext([])
    const { jwt } = userContext
    getAllLike({ jwt })
      .then(setLikeContext)
      // .catch(e => console.error(e)) */
  }, [isLogged])

  return <context.Provider value={{ likeContext, setLikeContext }}>
    {children}
  </context.Provider>
}

export default context
