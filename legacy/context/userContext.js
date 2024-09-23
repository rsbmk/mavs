import { createContext, useState } from 'react'

const context = createContext({})

export function UserContextProvider ({ children }) {
  const [userContext, setUserContext] = useState(
    () => JSON.parse(window.sessionStorage.getItem('user')) || {}
  )

  return <context.Provider value={{ userContext, setUserContext }}>
    {children}
  </context.Provider>
}

export default context
