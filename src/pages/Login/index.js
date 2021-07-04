import { LoginForm } from 'components/login'
import 'components/login/login.css'
import { Helmet } from 'react-helmet'

export function Login () {
  return (
    <>
      <Helmet>
        <title>Mavs Login</title>
      </Helmet>
      <div className='wrap-login'>
      <LoginForm/>
      </div>
    </>
  )
}
