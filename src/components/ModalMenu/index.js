import DarkMode from 'components/DarkMode'
import { useUser } from 'hooks/useUser'
import { useCallback } from 'react'
import { Link } from 'wouter'
import './ModalMenu.css'

export function ModalBarMenu () {
  const { isLogged, userContext, logout } = useUser()

  const handleLogout = useCallback(() => {
    logout()
  }, [])

  return (
    <div className="modalBarMenu">
      <div className="nameUser">
        <span>{isLogged ? `Hola, ${userContext.name}` : 'Hi, login you!'}</span>
      </div>
      <div className="BarMenuDarkMode">
        Dark Mode
        <DarkMode />
      </div>
      <div>
        {isLogged
          ? (
          <button className="logoutMenu" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt" />
            Logout
          </button>
            )
          : (
          <Link className="loginMenu" to="/mavs/login">
            <i className="fas fa-sign-in-alt" />
            Login
          </Link>
            )}
      </div>
    </div>
  )
}
