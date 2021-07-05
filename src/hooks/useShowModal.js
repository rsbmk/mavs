import { useCallback, useState } from 'react'

export function useShowModal () {
  const [showModal, setShowModal] = useState(false)

  const closeModal = useCallback(() => {
    setShowModal(false)
  }, [setShowModal])

  const openModal = useCallback(() => {
    console.log('voy abrir')
    setShowModal(true)
  }, [setShowModal])

  return {
    showModal,
    closeModal,
    openModal
  }
}
