import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import { ROUTES } from './routes/Routes'

const router = createBrowserRouter(ROUTES)

function App() {


  return (
    <>
     <RouterProvider router={router}/>
      
    </>
  )
}

export default App
