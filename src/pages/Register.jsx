import { useNavigate } from 'react-router-dom'
import './home.css'
import hire from '../assets/hired.jpg';

const Register = () => {

  const navigate = useNavigate();

  return (
    <div className='register'>
      <div className='jobsImage'>
        <img src={hire}/>
      </div>
      <div className="registerForm">
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
    </div>
  )
}

export default Register
