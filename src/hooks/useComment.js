import context from 'context/commentsContext'
import { useContext } from 'react'
import { sendComment } from 'services/commentServices'

export const useComment = () => {
  const { commnetConetxt, setcommnetConetxt } = useContext(context)
  const commentList = commnetConetxt || []

  const addComment = ({ comment, idCharacter, jwt }) => {
    const commentsList = sendComment({ comment, idCharacter, jwt })
    commentsList.then(setcommnetConetxt)
      .catch(e => console.log(e))
  }

  return {
    addComment,
    commentList
  }
}
