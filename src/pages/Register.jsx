import { useNavigate } from 'react-router-dom'
import './home.css'

const Register = () => {

  const navigate = useNavigate();

  return (
    <div className='register'>
      <form>
        <label>Username</label>
        <input type='text' placeholder='Enter Username...'/>
        <label>Email</label>
        <input type='text' placeholder='Enter Your Email...'/>
        <label>Password</label>
        <input type='password' />
        <label>Repeat Password</label>
        <input type='password' />
        <button onClick={() => navigate('/np-jobs')}>Register</button>
      </form>
    </div>
  )
}

export default Register
