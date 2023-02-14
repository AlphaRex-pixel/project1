import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@material-ui/core';

const overAllTheme = createTheme({
  palette: {
    primary: {
      main: '#007681',
      light: '#ffc400'
    },
    secondary: {
      main: '#EEBE86',
    },
    type:'light',
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={overAllTheme}>
  {/* <React.StrictMode> */}
  <CssBaseline/>
    <App />
  {/* </React.StrictMode> */}
    </ThemeProvider>
);
