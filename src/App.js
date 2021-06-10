import { CharacterContextProvider } from 'context/characterContext'
import { DetailCharacter } from 'pages/DetailCharacter'
import { Home } from 'pages/Home'
import { Search } from 'pages/Search'
import { Route } from 'wouter'

import './App.css'

function App () {
  return (
    <CharacterContextProvider>
      <Route path='/mavs/' component={Home}/>
      <Route path='/search/:keyword' component={Search}/>
      <Route path='/detail/:id' component={DetailCharacter}/>
    </CharacterContextProvider>
  )
}

export default App
