import './comment.css'

import { CharacterButtons } from 'components/ButtonLike'
import { CommentsSection } from 'components/CommentSection'
import { NewCommentForm } from 'components/newCommentForm'

export function Comment ({ idCharacter }) {
  return (
    <section className="wrapComment">
      <CharacterButtons idCharacter={idCharacter} />
      <CommentsSection idCharacter={idCharacter} />
      <NewCommentForm idCharacter={idCharacter} />
    </section>
  )
}
