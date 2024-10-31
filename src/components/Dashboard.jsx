import './style.css'
import Sidebar from './Sidebar'
import Main from './Main'

const Dashboard = ({ jobs }) => {
  return (
    <div className='dashboard'>
      <Sidebar />
      <Main jobs={jobs}/>
    </div>
  )
}

export default Dashboard
