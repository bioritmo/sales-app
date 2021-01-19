//external
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { Router } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { PersistGate } from 'redux-persist/integration/react';
import WebfontLoader from '@dr-kobros/react-webfont-loader';
import { ToastContainer, toast } from "react-toastify";

// Internal
import Root from './routes/Root';
import { store, persistor } from './state/configureStore';
import history from './routes/history';
import * as serviceWorker from './service-worker';
import { ConnectedRouter } from 'connected-react-router';

// style
import 'react-toastify/dist/ReactToastify.css';

const config = {
  google: {
    families: ['Roboto', 'Muli', 'Neuropol'],
  }
};

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#1445b3',
  },
  appBar: {
    height: 50,
  },
});

const render = () => {
  ReactDOM.render((
    <AppContainer>
      <>
        <ToastContainer style={{zIndex: 9999}}/>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <WebfontLoader config={config}>
              <MuiThemeProvider muiTheme={muiTheme}>
              <ConnectedRouter history={history}>
                  <Root />
                  </ConnectedRouter>
              </MuiThemeProvider>
            </WebfontLoader>
          </PersistGate>
        </Provider>
      </>
    </AppContainer>
  ), document.getElementById('root'));
};

// initial render
render();
serviceWorker.register({ toast });
