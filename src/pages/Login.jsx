import './home.css';
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();
  
  return (
    <div className='login'>
      <form>
        <label>Email</label>
        <input type='text' placeholder='Enter Your Email'/>
        <label>Password</label>
        <input type='password' placeholder='Enter Password here...'/>
        <button onClick={() => navigate('/np-jobs')}>Log In</button>
      </form>
    </div>
  )
}

export default Login
