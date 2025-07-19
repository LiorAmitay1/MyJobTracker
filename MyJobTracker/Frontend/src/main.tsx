import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';


const theme = createTheme({
  typography: {
    fontFamily: '"Titillium Web", Arial, sans-serif',
  },
  palette: {
    primary: {
      main: '#ffffffff',
      dark: '#cf20cfff',
    },
    background: {
      default: '#f5f5f5ff',
      paper: '#ffffffff',
    },
    text: {
      primary: '#333333',
    },
  },

});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);

