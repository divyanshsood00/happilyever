import {Link} from 'react-router-dom'

function Signout() {
  return (
    <div className='container'>
      <h1>Signed out</h1>
      <Link to='/'>
        <button className="btn">
          Login Again
        </button>
        
      </Link>
    </div>
  )
}

export default Signout
