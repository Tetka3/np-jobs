import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider 
} from 'react-router-dom'
import Home from './pages/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/np-social' element={<Home />} />             
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
