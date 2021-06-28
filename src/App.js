import { CharacterContextProvider } from 'context/characterContext'
import { UserContextProvider } from 'context/userContext'

import { Route } from 'wouter'

import { DetailCharacter } from 'pages/DetailCharacter'
import { Home } from 'pages/Home'
import { Login } from 'pages/Login'
import { Search } from 'pages/Search'

import './App.css'

function App () {
  return (
    <UserContextProvider>
      <Route path='/mavs/login' component={Login}/>
      <CharacterContextProvider>
        <Route path='/mavs/' component={Home}/>
        <Route path='/search/:keyword' component={Search}/>
        <Route path='/detail/:id' component={DetailCharacter}/>
      </CharacterContextProvider>
    </UserContextProvider>
  )
}

export default App
