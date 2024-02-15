import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { QuioscoProvider } from './context/QuioscoProvider'
import router from './router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QuioscoProvider>
      <RouterProvider router={router} />
    </QuioscoProvider>
  </React.StrictMode>,
)
