import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store/configureStore";
import {ToastContainer} from "react-toastify";
import history from "./history"
import App from './App';

import 'react-toastify/dist/ReactToastify.css';

const app = (
    <Provider store={store}>
      <BrowserRouter navigator={history}>
        <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover={false}
        />
        <App/>
      </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));