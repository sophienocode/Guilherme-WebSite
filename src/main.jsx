import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx';
import NotFoundPage from './assets/NotFoundPage.jsx';
import Dashboard from './assets/Dashboard.jsx';
import NewPost from './assets/NewPost.jsx';





const router = createBrowserRouter([        
  {path: '/', element: <App /> }, 
  {path: '/dashboard', element: <Dashboard />},
  {path: '*', element: <NotFoundPage /> },
  {path: '/newpost', element: <NewPost /> },


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
