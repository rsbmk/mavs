import { useComment } from 'hooks/useComment'
import { useState } from 'react'
import './ModalUpdateComment.css'

export function ModalUpdateComment ({ idComment, commentValue, closeModal }) {
  const [comment, setComment] = useState(commentValue)
  const { putComment } = useComment()

  const handleChangeTextArea = evt => {
    setComment(evt.target.value)
  }

  const handleSubmitUpdateComment = evt => {
    evt.preventDefault()
    if (!comment) return alert('The comment is required')
    putComment({ idComment, comment })
    closeModal()
  }

  return (
    <aside>
      <h2 className='titleUpdateComment'>Edit comment</h2>
      <form onSubmit={handleSubmitUpdateComment} className='fromUpdateComment'>
        <textarea
        value={comment}
        rows='4'
        required
        onChange={handleChangeTextArea}
        />
        <button>Update</button>
      </form>
    </aside>
  )
}
