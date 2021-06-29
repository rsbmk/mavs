import { useState } from 'react'
import { useLocation } from 'wouter'
import './inputForm.css'

export function InputForm () {
  const [, setLocation] = useLocation()
  const [input, setInput] = useState('')

  const handleChange = (evt) => {
    setInput(evt.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    if (input) setLocation(`/search/${input}`)
  }

  return (
    <form onSubmit={handleSubmit} className='form'>
        <input
        onChange={handleChange}
        type='text'
        value={input}
        placeholder='Search your favorite Hero...'
        className='inputSearch'/>
        <button className='btn'><i className="fas fa-search"></i></button>
      </form>
  )
}
