import { ModalDeleteComment } from 'components/ModalDeleteComment'
import { ModalPortal } from 'components/ModalPortal'
import { useShowModal } from 'hooks/useShowModal'

export function BtnDeleteComment ({ idComment, commentValue }) {
  const { showModal, closeModal, openModal } = useShowModal()

  const handleClickDeleteComment = (_) => {
    openModal()
  }
  return (
    <>
    <button onClick={handleClickDeleteComment}>
      <i className="far fa-trash-alt" />
    </button>
    {
      showModal &&
      <ModalPortal closeModal={closeModal}>
        <ModalDeleteComment
        idComment={idComment}
        commentValue={commentValue}
        closeModal={closeModal}
        />
      </ModalPortal>
    }
    </>
  )
}
