import React, { useEffect, useRef, useState } from 'react'
import './darkMode.css'

function DarkMode () {
  const [checked, setCheked] = useState(false)
  const inputCheckbox = useRef(null)

  useEffect(function () {
    const { matches } = window.matchMedia('(prefers-color-scheme: dark)')
    setCheked(matches)
    if (matches) {
      document.body.classList.add('isDarkMode')
    }
  }, [])

  const handleChange = () => {
    setCheked(inputCheckbox.current.checked)
    if (inputCheckbox.current.checked) {
      document.body.classList.add('isDarkMode')
    } else {
      document.body.classList.remove('isDarkMode')
    }
  }

  return (
    <>
      <input onChange={handleChange} checked={checked} className='checkbox' ref={inputCheckbox} id='checkbox' type='checkbox'/>
      <label htmlFor='checkbox' className='switch'/>
    </>
  )
}
export default React.memo(DarkMode)
