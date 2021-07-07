import { useCallback, useState } from 'react'

export function useShowModal () {
  const [showModal, setShowModal] = useState(false)

  const closeModal = useCallback(() => {
    setShowModal(false)
  }, [setShowModal])

  const openModal = useCallback(() => {
    setShowModal(true)
  }, [setShowModal])

  return {
    showModal,
    closeModal,
    openModal
  }
}
