import React from 'react'

import './header.css'

import DarkMode from 'components/DarkMode'
import { InputForm } from 'components/InputForm'
import { Link } from 'wouter'

function Header () {
  return (
    <div className='header'>
      <Link to='/' className='title'>Mavs</Link>
      <InputForm/>
      <DarkMode/>
    </div>
  )
}
export default React.memo(Header)
