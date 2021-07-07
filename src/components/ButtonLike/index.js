import { useCallback } from 'react'

import { LoginForm } from 'components/login'
import { ModalPortal } from 'components/ModalLogin'

import { useShowModal } from 'hooks/useShowModal'
import { useUser } from 'hooks/useUser'

import './likeButton.css'

export function CharacterButtons ({ idCharacter }) {
  const {
    userContext,
    likeList,
    isLogged,
    addLike,
    deleteLike
  } = useUser()

  const { showModal, openModal, closeModal } = useShowModal()

  const { jwt } = userContext

  const isLike = useCallback(likeList.some(like => like === idCharacter), [likeList])

  const handleClickLike = useCallback(() => {
    if (!isLogged) return openModal()
    isLike ? deleteLike({ idCharacter, jwt }) : addLike({ idCharacter, jwt })
  }, [isLike, isLogged])

  return (
    <div className='wrapLikeButtons'>
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
      closeModal={closeModal}
     >
      <LoginForm closeModal={closeModal}/>
    </ModalPortal>}
  </div>
  )
}
