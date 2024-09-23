import React, { useState } from 'react'

const Context = React.createContext({})

export function CharacterContextProvider ({ children }) {
  const [characterContext, setCharacterContext] = useState([])

  return (
    <Context.Provider value={{ characterContext, setCharacterContext }}>
      {children}
    </Context.Provider>
  )
}

export default Context
