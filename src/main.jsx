import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx';
import NotFoundPage from './NotFoundPage.jsx';
import Dashboard from './Dashboard.jsx';






const router = createBrowserRouter([        
  {path: '/', element: <App /> }, 
  {path: '/dashboard', element: <Dashboard />},
  {path: '*', element: <NotFoundPage /> },
  


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
