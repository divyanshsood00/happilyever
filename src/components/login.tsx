import { Link, useHistory } from 'react-router-dom'


function Login()  {
  const history = useHistory()
  const handleSubmit = () => {
    history.replace('/profile')
  }
  return (
    <div className="container">
        <h1>Login</h1>
        {/* I know all inputs can be done in a loop by making object with properties, but It stuct to me at last moment, I was short of time.... Sorry */}
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <input type="text" name="" id="" required />
                <label>Username</label>
            </div>
            <div className="form-control">
                <input type="password" name="" id="" required />
                <label >Password</label>
            </div>
            <button type='submit'className="btn">Login</button>
            <p className="text">
              Don't want an account?
              <Link to="/profile">Profile</Link>
            </p>
        </form>
    </div>
  )
}

export default Login

