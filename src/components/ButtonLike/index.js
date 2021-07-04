import { LoginForm } from 'components/login'
import { ModalPortal } from 'components/ModalLogin'
import { useUser } from 'hooks/useUser'
import { useCallback, useState } from 'react'

import './likeButton.css'

export function CharacterButtons ({ idCharacter }) {
  const [showModal, setShowModal] = useState(false)

  const {
    userContext,
    likeList,
    isLogged,
    addLike,
    deleteLike
  } = useUser()

  const { jwt } = userContext

  const isLike = useCallback(likeList.some(like => like === idCharacter), [likeList])

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
