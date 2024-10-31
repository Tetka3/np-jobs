import Jobs from './Jobs';
import './style.css';

const Main = ({ jobs }) => {
  return (
    <div className='main'>
      <Jobs jobs={jobs}/>
    </div>
  )
}

export default Main
