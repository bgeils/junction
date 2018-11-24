import React from 'react';
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";

import 'semantic-ui-css/semantic.min.css';
import './index.css';

import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

window.store = store

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
