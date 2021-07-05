import { useCallback, useState } from 'react'

import { CharacterButtons } from 'components/ButtonLike'
import { ModalPortal } from 'components/ModalLogin'
import { LoginForm } from 'components/login'

import { useShowModal } from 'hooks/useShowModal'
import { useUser } from 'hooks/useUser'

import './comment.css'

export function Comment ({ idCharacter }) {
  const [comment, setComment] = useState('')
  const { isLogged } = useUser()
  const { showModal, closeModal, openModal } = useShowModal()

  const handleInputComment = useCallback((evt) => {
    setComment(evt.target.value)
  }, [setComment])

  const handleSumbitComment = (evt) => {
    evt.preventDefault()
    if (!isLogged) return openModal()
    if (comment) console.log(comment)
    setComment('')
  }

  return (
  <section className='wrapComment'>
    <CharacterButtons idCharacter={idCharacter}/>

    <form className='newComment' onSubmit={handleSumbitComment}>
      <input
      value={comment}
      onChange={handleInputComment}
      className='inputComment'
      placeholder='typing your comment ...'/>
      <button
      className='btn'
      ><i className="fas fa-paper-plane"></i></button>
    </form>
    {showModal &&
     <ModalPortal
      closeModal={closeModal}
     >
      <LoginForm closeModal={closeModal}/>
    </ModalPortal>}
  </section>
  )
}
