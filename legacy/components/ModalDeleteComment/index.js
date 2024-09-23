import { useComment } from "../../hooks/useComment";
import "./ModalDeleteComment.css";

export function ModalDeleteComment({ idComment, commentValue, closeModal }) {
  const { removeComment } = useComment();

  const handleClickYes = () => {
    removeComment({ idComment });
  };

  const handleClickCancel = (_) => {
    closeModal();
  };

  return (
    <>
      <h3 className="titleModalDeleteComment">Are you sure you want to delete this comment?</h3>
      <p className="contentDeleteComment">{commentValue}</p>
      <div className="wrapButtonsDeleteComment">
        <button onClick={handleClickYes}>Yes</button>
        <button onClick={handleClickCancel}>Cancel</button>
      </div>
    </>
  );
}
