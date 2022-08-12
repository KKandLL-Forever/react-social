import './Entry.scss'
import Logo from '@/assets/img/logo.png'

// eslint-disable-next-line no-unused-vars
function SignUp () {
  return (
    <div className="login-right">
      <form action="" className="info-form login-form">
        <h3>Sign up</h3>
        <div>
          <input
            type="text"
            className='info-input'
            placeholder='First Name'
            name='firstname'/>
          <input
            type="text"
            className='info-input'
            placeholder='Last Name'
            name='lastname'/>
        </div>
        <div>
          <input
            type="text"
            className="info-input"
            placeholder="Username"
            name="username"
          />
        </div>
        <div>
          <input
            type="password"
            className="info-input"
            placeholder="Password"
            name="password"
          />
          <input
            type="password"
            className="info-input"
            placeholder="Confirm Password"
            name="confirm-password"
          />
        </div>
        <div>
          <span style={{ fontSize: '12px' }}>Already have an account. Login!</span>
        </div>
        <button className="button info-button" type="submit">Signup</button>

      </form>
    </div>
  )
}

function Login () {
  return (
    <div className="login-right">
      <form className="info-form login-form">
        <h3>Log In</h3>
        <div>
          <input
            type="text"
            placeholder="Username"
            className="info-input"
            name="username"
          />
        </div>

        <div>
          <input
            type="password"
            className="info-input"
            placeholder="Password"
            name="password"
          />
        </div>

        <div>
          <span style={{ fontSize: '12px' }}>
            Do not have an account Sign up
          </span>
          <button className="button info-button">Login</button>
        </div>
      </form>
    </div>
  )
}

const Entry = () => {
  return (
    <div className="login">
      <div className="login-left">
        <img src={Logo} alt=""/>
        <div className="siteName">
          <h1>WaK Media</h1>
          <h6>Explore the World</h6>
        </div>
      </div>
      {/* <SignUp/> */}
      <Login/>
    </div>
  )
}

export default Entry
