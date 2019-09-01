import React from 'react';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlusCircle,
  faChevronRight,
  faSpinner,
  faTrashAlt,
  faPen,
  faCalendarAlt,
  faMapMarkerAlt,
  faCamera,
} from '@fortawesome/free-solid-svg-icons';

import Routes from './routes';
import history from './services/history';

import { store, persistor } from './store';

import GlobalStyle from './styles/global';

library.add(
  faPlusCircle,
  faChevronRight,
  faSpinner,
  faTrashAlt,
  faPen,
  faCalendarAlt,
  faMapMarkerAlt,
  faCamera
);

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={3000} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
