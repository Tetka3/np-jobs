import './style.css';

const Job = ({ job }) => {
  return (
    <div className="job">
      <h3>{job.company}</h3>
      <p>{job.jobDescription}</p> 
    </div>
  )
}

export default Job
