import { Spinner } from 'components/Spinner'
import { useEffect } from 'react'
import { Link, useLocation } from 'wouter'
import { reducerLogin } from './reduecerLogin'

import './login.css'

export function LoginForm ({ closeModal } = {}) {
  const [location, setlocation] = useLocation()
  const {
    username,
    password,
    isLogged,
    error,
    loadingLogin,
    handleUsername,
    hanldePassword,
    handleLogin
  } = reducerLogin()

  useEffect(
    function () {
      if (isLogged && location === '/mavs/login') return setlocation('/mavs/')
      if (isLogged) closeModal()
    },
    [isLogged]
  )

  if (loadingLogin) return <Spinner />

  return (
    <>
      <form className="formLogin" onSubmit={handleLogin}>
        <h1 className="titleLogin">Login</h1>

        {error.is && <div>{error.message}</div>}

        <div className="wrapFormLogin">
          <label className="username">
            Username
            <div>
              <i className="fas fa-user" />
              <input
                type="text"
                value={username}
                name="Username"
                autoComplete="username"
                className="usernameInput"
                placeholder="Type your username"
                onChange={handleUsername}
              />
            </div>
          </label>

          <label className="password">
            Password
            <div>
              <i className="fas fa-lock" />
              <input
                type="password"
                value={password}
                name="Password"
                autoComplete="password"
                className="usernamePassword"
                placeholder="Type your password"
                onChange={hanldePassword}
              />
            </div>
          </label>
          <button className="btnLogin">Login</button>
        </div>
        <Link to="/mavs/singup" className="singUp">
          SING UP
        </Link>
      </form>
    </>
  )
}
