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
        <p>Not Joined JobSeek? Register Now free of charge</p>
        <form>
          <label>Email</label>
          <input type='text' placeholder='Enter Your Email'/>
          <label>Password</label>
          <input type='password' placeholder='Enter Password here...'/>
          <div className="checkboxInput">
              <input type='checkbox'/><p>Remember me</p> 
          </div>          
          <button onClick={() => navigate('/np-jobs')}>Log In</button>
      </form>
      <p>Having problems loggin in?</p>
      <p>Try</p>
      <button>Continue with Google</button>
      <button>Continue with Apple</button>
      <p>I accept JobSeek's GTC and acknowledge the Privacy Policy.</p>
      </div>
    </div>
  )
}

export default Login
