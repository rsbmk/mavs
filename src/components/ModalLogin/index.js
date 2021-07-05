import reactDom from 'react-dom'
import './modalLogin.css'

function ModalLogin ({ children, closeModal }) {
  return (
    <div className='modalLogin'>
      <div className='modal-content'>
        <button className='btn' onClick={closeModal}><i className="fas fa-times"></i></button>
        {children}
      </div>
    </div>
  )
}
export function ModalPortal ({ children, closeModal }) {
  return reactDom.createPortal(<ModalLogin closeModal={closeModal}>
    {children}
  </ModalLogin>,
  document.getElementById('modal-root')
  )
}
