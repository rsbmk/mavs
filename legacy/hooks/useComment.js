import context from "../context/commentsContext";
import { useContext } from "react";
import { deleteComment, sendComment, updateComment } from "../services/commentServices";

export const useComment = () => {
  const { commnetConetxt, setcommnetConetxt } = useContext(context);
  const commentList = commnetConetxt || [];

  const addComment = ({ comment, idCharacter, jwt }) => {
    const commentsList = sendComment({ comment, idCharacter, jwt });
    commentsList.then(setcommnetConetxt).catch((e) => console.log(e));
  };

  const putComment = ({ idComment, comment }) => {
    const commentListUpdated = updateComment({ idComment, comment });
    commentListUpdated.then(setcommnetConetxt).catch((e) => console.error(e));
  };

  const removeComment = ({ idComment }) => {
    const commentListDeleted = deleteComment({ idComment });
    commentListDeleted.then(setcommnetConetxt).catch((e) => console.log(e));
  };

  return {
    commentList,
    addComment,
    putComment,
    removeComment,
  };
};
