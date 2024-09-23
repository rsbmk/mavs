import { useUser } from "../hooks/useUser";
import { createContext, useEffect, useState } from "react";
import { getAllLike } from "../services/likeService";

const context = createContext({});

export function LikeCharacterContextProvider({ children }) {
  const [likeContext, setLikeContext] = useState([]);
  const { isLogged, userContext } = useUser();
  const { jwt } = userContext;

  useEffect(() => {
    if (!isLogged) return setLikeContext([]);
    getAllLike({ jwt }).then(setLikeContext);
    // .catch(e => console.error(e)) */
  }, [isLogged, jwt]);

  return <context.Provider value={{ likeContext, setLikeContext }}>{children}</context.Provider>;
}

export default context;
