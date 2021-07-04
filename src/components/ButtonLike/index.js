import { LoginForm } from 'components/login'
import { ModalPortal } from 'components/ModalLogin'
import { useUser } from 'hooks/useUser'
import { useCallback, useState } from 'react'

import './likeButton.css'

export function CharacterButtons ({ idCharacter }) {
  const [showModal, setShowModal] = useState(false)

  const {
    userContext,
    isLogged,
    likeContext,
    addLike,
    deleteLike
  } = useUser()
  const { jwt } = userContext

  const isLike = likeContext.some(like => like === idCharacter)

  const handleClickLike = useCallback(() => {
    if (!isLogged) return setShowModal(true)
    isLike ? deleteLike({ idCharacter, jwt }) : addLike({ idCharacter, jwt })
  }, [isLike, isLogged])

  const handleCloseModal = useCallback(() => {
    setShowModal(false)
  }, [setShowModal])

  return (
    <>
      <button aria-label='like' className='likeButton' onClick={handleClickLike}>
        {isLike
          ? <i className="fas fa-heart"/>
          : <i className="far fa-heart"/>}
      </button>

      <button className='commentButton'>
        <i className="far fa-comment"/>
      </button>
     {showModal &&
     <ModalPortal
      onClose={handleCloseModal}
     >
      <LoginForm onClose={handleCloseModal}/>
    </ModalPortal>}
  </>
  )
}
