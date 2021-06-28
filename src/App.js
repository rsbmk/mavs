import { LikeCharacterContextProvider } from 'context/likeCharacterContext'
import { CharacterContextProvider } from 'context/characterContext'
import { UserContextProvider } from 'context/userContext'

import { DetailCharacter } from 'pages/DetailCharacter'
import { Search } from 'pages/Search'
import { Login } from 'pages/Login'
import { Home } from 'pages/Home'

import { Route } from 'wouter'

import './App.css'

function App () {
  return (
    <UserContextProvider>
      <Route path='/mavs/login' component={Login}/>
      <CharacterContextProvider>
        <LikeCharacterContextProvider>
        <Route path='/mavs/' component={Home}/>
        <Route path='/search/:keyword' component={Search}/>
        <Route path='/detail/:id' component={DetailCharacter}/>
        </LikeCharacterContextProvider>
      </CharacterContextProvider>
    </UserContextProvider>
  )
}

export default App
