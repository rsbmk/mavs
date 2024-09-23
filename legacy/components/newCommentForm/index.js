import { LoginForm } from "../login";
import { ModalPortal } from "../ModalPortal";
import { useComment } from "../../hooks/useComment";
import { useShowModal } from "../../hooks/useShowModal";
import { useUser } from "../../hooks/useUser";
import { useCallback, useState } from "react";

export function NewCommentForm({ idCharacter }) {
  const [comment, setComment] = useState("");
  const { showModal, closeModal, openModal } = useShowModal();
  const { addComment } = useComment();
  const { isLogged, userContext } = useUser();

  const { jwt } = userContext;

  const handleSumbitComment = (evt) => {
    evt.preventDefault();
    if (!isLogged) return openModal();
    if (comment) addComment({ comment, idCharacter, jwt });
    setComment("");
  };

  const handleInputComment = useCallback(
    (evt) => {
      setComment(evt.target.value);
    },
    [setComment]
  );

  return (
    <>
      <form className="newComment" onSubmit={handleSumbitComment}>
        <input value={comment} onChange={handleInputComment} className="inputComment" placeholder="typing your comment ..." />
        <button className="btn">
          <i className="fas fa-paper-plane"></i>
        </button>
      </form>
      {showModal && (
        <ModalPortal closeModal={closeModal}>
          <LoginForm closeModal={closeModal} />
        </ModalPortal>
      )}
    </>
  );
}
