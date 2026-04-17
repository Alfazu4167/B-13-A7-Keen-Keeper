import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Routes/Routes.jsx'
import TimelineProvider from './Context/TimelineProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimelineProvider>
      <RouterProvider router={router}></RouterProvider>
    </TimelineProvider>

  </StrictMode>,
)
