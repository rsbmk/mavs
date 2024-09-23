import React, { useEffect, useRef, useState } from 'react'
import './darkMode.css'

function DarkMode () {
  const [checked, setCheked] = useState(false)
  const inputCheckbox = useRef(null)

  useEffect(function () {
    // const { matches } = window.matchMedia('(prefers-color-scheme: dark)')
    setCheked(localStorage.getItem('isDark') === 'true')
    if (localStorage.getItem('isDark') === 'true') {
      document.body.classList.add('isDarkMode')
    }
  }, [])

  const handleChange = () => {
    setCheked(inputCheckbox.current.checked)
    document.body.classList.toggle('isDarkMode')
    localStorage.setItem('isDark', inputCheckbox.current.checked)
  }

  return (
    <>
      <input onChange={handleChange} checked={checked} className='checkbox' ref={inputCheckbox} id='checkbox' type='checkbox'/>
      <label htmlFor='checkbox' className='switch'/>
    </>
  )
}
export default React.memo(DarkMode)
