import { LikeCharacterContextProvider } from "./context/likeCharacterContext";
import { CommentCharacterContextProvider } from "./context/commentsContext";
import { CharacterContextProvider } from "./context/characterContext";
import { UserContextProvider } from "./context/userContext";

import { DetailCharacter } from "./pages/DetailCharacter";
import { SingUp } from "./pages/SingUp";
import { Search } from "./pages/Search";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";

import { Route } from "wouter";

import "./App.css";

function App() {
  return (
    <UserContextProvider>
      <Route path="/mavs/login" component={Login} />
      <Route path="/mavs/singup" component={SingUp} />
      <CharacterContextProvider>
        <LikeCharacterContextProvider>
          <CommentCharacterContextProvider>
            <Route path="/mavs/" component={Home} />
            <Route path="/search/:keyword" component={Search} />
            <Route path="/detail/:id" component={DetailCharacter} />
          </CommentCharacterContextProvider>
        </LikeCharacterContextProvider>
      </CharacterContextProvider>
    </UserContextProvider>
  );
}

export default App;
