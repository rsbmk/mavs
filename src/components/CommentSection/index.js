import { useComment } from 'hooks/useComment'

export function CommentsSection ({ idCharacter }) {
  const { commentList } = useComment()

  return (
    <section className="commentContainer">
      {commentList.map((comment) => {
        if (comment.idCharacter !== idCharacter) return null
        return (
          <div className="wrapCommentContent" key={comment.id + idCharacter}>
            <div className="commentUsername">{comment.user.username}: </div>
            <p className="commentConetent">{comment.comment}</p>
          </div>
        )
      })}
    </section>
  )
}
