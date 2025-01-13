import { useNavigate } from 'react-router-dom';
import './style.css'

const Sidebar = () => {

  const navigate = useNavigate();

  return (
    <div className='sidebar'>
      <ul>
        <li onClick={() => navigate('/np-jobs')}>My Jobs</li>  
        <li onClick={() => navigate('/np-jobs/login')}>Saved Jobs</li>
        <li>Favorite Jobs</li>
        <li>More Jobs</li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
}

export default Sidebar
