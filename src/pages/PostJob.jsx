import './home.css'
import { useNavigate } from 'react-router-dom'

const PostJob = () => {

  const navigate = useNavigate();

  return (
    <div className='postJob'>
      <button onClick={() => navigate('/np-jobs')}>Close</button>
      <form>      
        <div className="top">        
          <h1>Add A Job</h1>
          <p>You understand what you are looking for. Let's help you get the best talent</p>
          <p>Post an open position here and hire fast</p>
        </div>
        <div className="bottom">
          <div className="company">
            <div className='labelElement'><label>Company*</label></div>
            <div className='inputElement'><input type='text'/></div>
          </div>
          <div className="logo">
            <div className='labelElement'><label>Logo</label></div>
            <div className='inputElement'><input type='text'/></div>
          </div>
          <div className="jobTitle">
            <div className='labelElement'><label>Job Title</label></div>
            <div className='inputElement'><input type='text'/></div>
          </div>
          <div className="jobDescription">
            <div className='labelElement'><label>Job Description</label></div>
            <div className='textElement'><textarea></textarea></div>
          </div>
          <div className="contractType">
            <div className='labelElement'><label>Type of contract*</label></div>
            <div className='inputElement'><input type='text'/></div>
          </div>
          <div className="location">
            <div className='labelElement'><label>Location</label></div>
            <div className='inputElement'><input type='text'/></div>
          </div>
          <div className="language">
            <div className='labelElement'><label>Working Language</label></div>
            <div className='inputElement'><input type='text'/></div>
          </div>
          <div className="jobCategory">
            <div className='labelElement'><label>Category of job</label></div>
            <div className='inputElement'><input type='text'/></div>
          </div>
          <div className="jobLink">
            <div className='labelElement'><label>Link to the job</label></div>
            <div className='inputElement'><input type='text'/></div>
          </div>
          <div className="email">
            <div className='labelElement'><label>Email*</label></div>
            <div className='inputElement'><input type='text'/></div>
          </div>
          <div className="size">
            <div className='labelElement'><label>Company Size</label></div>
            <div className='inputElement'><input type='text'/></div>
          </div>
          <div className="industry">
            <div className='labelElement'><label>Industry</label></div>
            <div className='inputElement'><input type='text'/></div>
          </div>
        </div> 
        <button onClick={() => navigate('/np-jobs')}>Post Job</button>
      </form>     
    </div>
  )
}

export default PostJob
