

const Job = ({ job }) => {
  return (
    <div>
      <h3>{job.company}</h3>
      <p>{job.jobDescription}</p> 
    </div>
  )
}

export default Job
