import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider 
} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PostJob from './pages/PostJob';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/np-jobs' element={<Home />} />             
      <Route path='/np-jobs/login' element={<Login />} />             
      <Route path='/np-jobs/register' element={<Register />} />             
      <Route path='/np-jobs/post-job' element={<PostJob />} />             
    </>
  )
);

function App() {
  return (
    <>   
      <RouterProvider router={router}/>       
    </>
  );
}

export default App;
