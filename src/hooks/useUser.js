import ContextUser from 'context/userContext'

import { useCallback, useContext, useState } from 'react'

import { loginAtApi } from 'services/loginService'

export function useUser () {
  const { userContext, setUserContext } = useContext(ContextUser)
  const [loadingLogin, setLoadingLogin] = useState(false)

  const login = useCallback(({ username, password }) => {
    setLoadingLogin(true)
    const { userResponseAPI } = loginAtApi({ username, password })
    userResponseAPI.then(user => {
      sessionStorage.setItem('user', JSON.stringify(user))
      setUserContext(user)
      setLoadingLogin(false)
    })
  }, [])

  const logout = useCallback(() => {
    setUserContext({})
    window.sessionStorage.setItem('user', {})
  }, [])

  return {
    isLogged: Boolean(userContext.name),
    login,
    logout,
    isError: userContext.error,
    loadingLogin
  }
}
