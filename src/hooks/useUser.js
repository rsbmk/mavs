import { useCallback, useContext, useState } from 'react'

import { loginAtApi } from 'services/loginService'

import ContextUser from 'context/userContext'
import likeListContext from 'context/likeCharacterContext'
import { removeLike, sendLike } from 'services/likeService'

export function useUser () {
  const { likeContext, setLikeContext } = useContext(likeListContext)
  const { userContext, setUserContext } = useContext(ContextUser)
  const [loadingLogin, setLoadingLogin] = useState(false)
  const [error, setError] = useState({ is: false, message: '' })

  const likeList = likeContext || []

  const login = useCallback(({ username, password }) => {
    // setLoadingLogin(true)
    const { userResponseAPI } = loginAtApi({ username, password })
    userResponseAPI.then(user => {
      sessionStorage.setItem('user', JSON.stringify(user))
      setUserContext(user)
      setLoadingLogin(false)
      setError({ is: false })
    }).catch(() => {
      setError({ is: true, message: 'the username or the passwords are wrong' })
    })
  }, [])

  const logout = useCallback(() => {
    setUserContext({})
    window.sessionStorage.removeItem('user')
  }, [])

  const addLike = useCallback(({ idCharacter, jwt }) => {
    sendLike({ idCharacter, jwt })
      .then(setLikeContext)
      .catch(e => console.error(e))
  }, [])

  const deleteLike = useCallback(({ idCharacter, jwt }) => {
    removeLike({ idCharacter, jwt })
      .then(setLikeContext)
      .catch(e => console.error(e))
  }, [])

  return {
    isLogged: Boolean(userContext.jwt),
    loadingLogin,
    userContext,
    likeList,
    error,
    login,
    logout,
    deleteLike,
    addLike,
    setLoadingLogin
  }
}
