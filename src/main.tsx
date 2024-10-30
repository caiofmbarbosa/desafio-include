import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import ProjectRoutes from './Router'
import GlobalStyle from './GlobalStyle/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import themes from './Themes/Themes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={themes}>
      <GlobalStyle />
      <RouterProvider router={ProjectRoutes} />
    </ThemeProvider>
  </StrictMode>,
)
