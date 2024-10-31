import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import ProjectRoutes from './Router'
import GlobalStyle from './GlobalStyle/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import themes from './Themes/Themes'

// Toast container
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={themes}>
      <GlobalStyle />
      <RouterProvider router={ProjectRoutes} />

      {/* O ToastContainer exibe as notificações */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="dark"
        limit={1}
      />
    </ThemeProvider>
  </StrictMode>,
)
