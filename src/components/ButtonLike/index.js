import { useUser } from 'hooks/useUser'
import { useLocation } from 'wouter'

import './likeButton.css'

export function CharacterButtons ({ idCharacter }) {
  const [, setLocation] = useLocation()
  const {
    userContext,
    isLogged,
    likeContext,
    addLike,
    deleteLike
  } = useUser()

  const isLike = likeContext.some(like => like === idCharacter)

  const handleClickLike = () => {
    const { jwt } = userContext
    if (!isLogged) return setLocation('/mavs/login')
    // eslint-disable-next-line padded-blocks
    isLike ? deleteLike({ idCharacter, jwt }) : addLike({ idCharacter, jwt })
  }

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
  </>
  )
}
