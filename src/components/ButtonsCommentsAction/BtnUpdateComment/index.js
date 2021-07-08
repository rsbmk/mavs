import { ModalPortal } from 'components/ModalPortal'
import { ModalUpdateComment } from 'components/ModalUpdateComment'
import { useShowModal } from 'hooks/useShowModal'

export function BtnUpdateComment ({ idComment, commentValue }) {
  const { showModal, closeModal, openModal } = useShowModal()

  const handleClickUpdateComment = (_) => {
    openModal()
  }
  return (
    <>
    <button onClick={handleClickUpdateComment}>
      <i className="far fa-edit" />
    </button>
    {
        showModal &&
      <ModalPortal closeModal={closeModal}>
        <ModalUpdateComment
        closeModal={closeModal}
        idComment={idComment}
        commentValue={commentValue}/>
      </ModalPortal>
      }
    </>
  )
}
