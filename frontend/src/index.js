import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { SnackbarProvider } from 'notistack';
import { CssBaseline } from '@mui/material';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider
        maxSnack={2}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Router>
          
        <CssBaseline />
          <App />
        </Router>
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);