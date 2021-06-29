import reactDom from 'react-dom'
import './modalLogin.css'

function ModalLogin ({ children, onClose }) {
  return (
    <div className='modalLogin'>
      <div className='modal-content'>
        <button className='btn' onClick={onClose}><i className="fas fa-times"></i></button>
        {children}
      </div>
    </div>
  )
}
export function ModalPortal ({ children, onClose }) {
  return reactDom.createPortal(<ModalLogin onClose={onClose}>
    {children}
  </ModalLogin>,
  document.getElementById('modal-root')
  )
}
