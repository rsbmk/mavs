import './comment.css'

import { CharacterButtons } from 'components/ButtonLike'
import { ModalPortal } from 'components/ModalLogin'
import { LoginForm } from 'components/login'

import { useShowModal } from 'hooks/useShowModal'
import { NewCommentForm } from 'components/newCommentForm'
import { CommentsSection } from 'components/CommentSection'

export function Comment ({ idCharacter }) {
  const { showModal, closeModal } = useShowModal()

  return (
    <section className="wrapComment">
      <CharacterButtons idCharacter={idCharacter} />
      <CommentsSection idCharacter={idCharacter} />
      <NewCommentForm idCharacter={idCharacter} />
      {showModal && (
        <ModalPortal closeModal={closeModal}>
          <LoginForm closeModal={closeModal} />
        </ModalPortal>
      )}
    </section>
  )
}
