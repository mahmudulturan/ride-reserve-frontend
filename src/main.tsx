import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MainRoutes from './routes/MainRoutes.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { Toaster } from './components/ui/toaster.tsx'
import AuthProvider from './providers/AuthProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <Toaster />
        <RouterProvider router={MainRoutes} />
      </AuthProvider>
    </Provider>
  </StrictMode>,
)
