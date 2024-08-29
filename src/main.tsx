import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MainRoutes from './routes/MainRoutes.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { Toaster } from './components/ui/toaster.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Toaster />
      <RouterProvider router={MainRoutes} />
    </Provider>
  </StrictMode>,
)
