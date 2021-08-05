import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import {userReducer} from "./store/reducers/userReducer";
import {Provider} from "react-redux";

// createStore makes our reducer function able to be used in the wild. It wraps
// up the reducer along with some other functions (like dispatchers and
// selectors) and makes them available to the components inside of the Provider
const store = createStore(userReducer);

ReactDOM.render(
    <React.StrictMode>
        {/* Provider allows us to access redux from anywhere in the app */}
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
