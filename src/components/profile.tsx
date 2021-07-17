import {useHistory} from 'react-router-dom'
import {BsPencil} from 'react-icons/bs'
import "./profile.css"

function Profile() {
  const history = useHistory()
  const handleSubmit = (e: { preventDefault: () => void })=>{
    e.preventDefault()
    history.replace('/signout')
  }
  return (
    <div className='container profile-container'>
      <div className="profile-header">
        <div className="img-container"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" alt="name"/></div>
        <div className="name-profile">
        <h2>Divyansh Sood <BsPencil style={{color:'cyan'}}/></h2>
        <button className='btn' style={{width:'180px',height:'45px',fontSize:'1rem'}}>Upload photo</button>
        </div>
      </div>
      <form style={{width:'inherit',overflowX:'hidden'}} onSubmit={handleSubmit} >
        <div className=' profile-fields-container'>
          
            <div className="form-control">
                <input type="text" name="" id="" required />
                <label>Name</label>
            </div>
            <div className="form-control">
                <input type="date" name="" id=""  required/>
                {/* <label>DOB (Date of Birth)</label> */}
            </div>
            <div className="form-control">
                <input type="text" name="" id="" required />
                <label >Religion</label>
            </div>
            <div className="form-control">
                <input type="number" name="" id=""  required/>
                <label >Height</label>
            </div>
            <div className="form-control">
                <input type="password" name="" id="" required />
                <label >Password</label>
            </div>
            
        </div>
            <div className="foot-profile">
              <button type='submit'className="btn">Save and Logout</button>
            </div>

        </form>      
    </div>
  )
}

export default Profile
