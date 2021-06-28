import { Spinner } from 'components/Spinner'
import { useEffect } from 'react'
import { useLocation } from 'wouter'
import './login.css'
import { reducerLogin } from './reduecerLogin'

export function LoginForm () {
  const [, setLocation] = useLocation()
  const {
    username,
    password,
    isLogged,
    isError,
    loadingLogin,
    handleUsername,
    hanldePassword,
    handleLogin
  } = reducerLogin()

  useEffect(function () {
    if (isLogged) setLocation('/mavs/')
  }, [isLogged])

  if (loadingLogin) return <Spinner/>

  return (
    <form className='formLogin' onSubmit={handleLogin}>
       {isError && <div>Username or Password wrong</div>}

      <label className='username'>
        Username
      <input
      type='text'
      value={username}
      name='Username'
      placeholder='Username ...'
      onChange={handleUsername}/>
      </label>

      <label className='password'>
        Password
      <input
      type='password'
      value={password}
      name='Password'
      placeholder='Password ...'
      onChange={hanldePassword}/>
      </label>
      <button className='btnLogin'>Login</button>
    </form>
  )
}
