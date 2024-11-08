import './home.css';
import { useNavigate } from 'react-router-dom';
import hire from '../assets/hired.jpg';

const Login = () => {

  const navigate = useNavigate();
  
  return (
    <div className='login'>
      <div className='jobsImage'>
        <img src={hire}/>
      </div>
      <div className='loginForm'>
        <h3>Welcome Back!</h3>
        <p>Not Joined JobbSeek? Register Now free of charge</p>
        <form>
          <label>Email</label>
          <input type='text' placeholder='Enter Your Email'/>
          <label>Password</label>
          <input type='password' placeholder='Enter Password here...'/>
          <button onClick={() => navigate('/np-jobs')}>Log In</button>
      </form>
      </div>
    </div>
  )
}

export default Login
