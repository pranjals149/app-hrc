import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import theme from '../src/utils/theme';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from "@material-ui/styles";
import { customTheme } from "./providers/ThemeProvider";

ReactDOM.render(
    <MuiThemeProvider theme={customTheme}>
      <App />
    </MuiThemeProvider>,
    //<React.StrictMode>
   // <ThemeProvider theme={/*customTheme*/theme}>
     // <App />
   // </ThemeProvider>
  //</React.StrictMode>,
  document.getElementById("root")
);
/*
CRACKED BY ILLUMINATI
TRUST US AND UNCOMMENT THIS CODE ONCE YOU SETUP YOUR REDUX STORE ;-)
 ReactDOM.render(
   <Provider store={store}>
     <MuiThemeProvider theme={theme}>
       <App />
     </MuiThemeProvider>
   </Provider>,
   document.getElementById('root')
 );
*/
serviceWorker.unregister();


