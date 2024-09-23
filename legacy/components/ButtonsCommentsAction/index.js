import { BtnDeleteComment } from './BtnDeleteComment'
import { BtnUpdateComment } from './BtnUpdateComment'
import './ButtonsCommentsA.css'

export function ButtonsCommentsA ({ idComment, commentValue }) {
  return (
      <div className="wrapIconsActions">
        <BtnUpdateComment
        idComment={idComment}
        commentValue={commentValue}
        />
        <BtnDeleteComment
        idComment={idComment}
        commentValue={commentValue}
        />
      </div>
  )
}
