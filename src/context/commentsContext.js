// import { useUser } from 'hooks/useUser'
import { createContext, useEffect, useState } from 'react'
import { getAllComments } from 'services/commentServices'

const context = createContext({})

export function CommentCharacterContextProvider ({ children }) {
  const [commnetConetxt, setcommnetConetxt] = useState([])

  useEffect(() => {
    getAllComments()
      .then(comment => {
        setcommnetConetxt(comment)
      })
      .catch(e => console.error(e))
  }, [])

  return <context.Provider value={{ commnetConetxt, setcommnetConetxt }}>
    {children}
  </context.Provider>
}

export default context
