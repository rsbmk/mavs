import { ButtonsCommentsA } from "../ButtonsCommentsAction";
import { useComment } from "../../hooks/useComment";
import { useUser } from "../../hooks/useUser";

export function CommentsSection({ idCharacter }) {
  const { commentList } = useComment();
  const { userContext } = useUser();

  return (
    <section className="commentContainer">
      {commentList.map((comment) => {
        if (comment.idCharacter !== idCharacter) return null;
        return (
          <div className="wrapCommentContent" key={comment.id + idCharacter}>
            <div className="commentUsername">{comment.user.username}: </div>
            <p className="commentConetent">{comment.comment}</p>
            {userContext.username === comment.user.username ? <ButtonsCommentsA commentValue={comment.comment} idComment={comment.id} /> : null}
          </div>
        );
      })}
    </section>
  );
}
