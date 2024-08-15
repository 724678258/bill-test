// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import { RouterProvider } from 'react-router-dom' 
import router from '@/router'
import "./theme.css"


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  // </StrictMode>,
  
  <RouterProvider  router={router}>
  </RouterProvider>

)
