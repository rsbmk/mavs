import React from 'react'

import { InputForm } from 'components/InputForm'
import { MenuBars } from 'components/MenuBar'

import { Link } from 'wouter'

import './header.css'

function Header () {
  return (
    <>
      <div className="header">
        <Link to="/mavs/" className="title">
          Mavs
        </Link>
        <InputForm />
        <MenuBars />
      </div>
      <div className="atribution">
      <Link to="http://marvel.com">
        Data provided by Marvel. © 2014 Marvel
      </Link>
      </div>
    </>
  )
}
export default React.memo(Header)
