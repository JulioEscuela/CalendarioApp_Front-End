import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NavBar } from './components/navbar'
import { ThemeProvider } from '@mui/material'
import theme from './components/theme/index' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <NavBar/>
    </ThemeProvider>
  </StrictMode>,
)