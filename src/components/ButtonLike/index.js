import { useUser } from 'hooks/useUser'
import { useLocation } from 'wouter'

import './likeButton.css'

export function CharacterButtons ({ id }) {
  const [, setLocation] = useLocation()
  const { isLogged } = useUser()

  const handleClickLike = () => {
    if (!isLogged) return setLocation('/mavs/login')

    alert(id)
  }

  return (
    <>
      <button className='likeButton' onClick={handleClickLike}>
        <i className="far fa-heart"/>
      </button>

      <button className='commentButton'>
        <i className="far fa-comment"/>
      </button>
  </>
  )
}
