import { useEffect } from 'react'

import { Link, useLocation } from 'wouter'

import { reducerSingUp } from './reducerSingUp'

import './singUp.css'

export function SingUp () {
  const [, setLocation] = useLocation()
  const {
    user,
    name,
    username,
    password,
    handleSingUp,
    hanldeName,
    handleUsername,
    hanldePassword
  } = reducerSingUp()

  useEffect(function () {
    if (user.name) setLocation('/mavs/login')
  }, [user])

  return (
    <div className='wrapSingUp'>
      <form className='formLogin' onSubmit={handleSingUp}>
        <h1 className='titleLogin'>Sing Up</h1>

        <div className='wrapFormLogin'>
          <label className='username'>
            Name
            <div>
              <i className="fas fa-user"/>
              <input
                type='text'
                value={name}
                name='name'
                className='nameInput'
                placeholder='Type your name'
                onChange={hanldeName}/>
            </div>
          </label>

          <label className='username'>
            Username
            <div>
              <i className="fas fa-user"/>
              <input
                type='text'
                value={username}
                name='Username'
                className='usernameInput'
                placeholder='Type your username'
                onChange={handleUsername}/>
            </div>
          </label>

          <label className='password'>
            Password
            <div>
              <i className="fas fa-lock"/>
            <input
              type='password'
              value={password}
              name='Password'
              className='usernamePassword'
              placeholder='Type your password'
              onChange={hanldePassword}/>
            </div>
          </label>

          <button className='btnLogin'>Sing Up</button>
        </div>
        <Link to='/mavs/login' className='login'>Login</Link>
      </form>
    </div>
  )
}
