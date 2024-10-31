import Job from './Job'

const Jobs = ({ jobs }) => {
  return (
    <div>
      {
        jobs.map((job) => <Job job={job}/>)
      }
    </div>
  )
}

export default Jobs
