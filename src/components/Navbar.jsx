import { Link } from 'react-router-dom'
import "./style.css";
import job from '../assets/job.jpg'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="leftBar">
            <Link to='/np-jobs'><img src={job}/></Link>
            <Link to='/np-jobs' style={{textDecoration: 'none'}}><span><bold style={{color: 'red'}}>Job</bold><bold style={{color: 'orange'}}>Seek</bold></span></Link>
        </div>
        <div className="rightBar">
            <ul>
            <Link to='/np-jobs/post-job' style={{color: 'white', fontSize: '22px'}}><li>Post Jobs</li></Link>
            <Link to='/np-jobs/login' style={{color: 'white', fontSize: '22px'}}><li>Sign In</li></Link>
            <Link to='/np-jobs/register' style={{color: 'white', fontSize: '22px'}}><li>Create Account</li></Link>
            </ul>
        </div>      
    </div>
  )
}

export default Navbar
