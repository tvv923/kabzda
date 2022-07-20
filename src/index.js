import store, { subscribe } from './redux/redux-store';
//import {rerenderEntireTree} from './render';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import { addPost, updateNewPostText } from './redux/store';
import  { Provider } from 'react-redux';

//rerenderEntireTree(state);

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {    
  root.render(
  <React.StrictMode>
      <Provider store={store}>
        <App  />
      </Provider>
  </React.StrictMode>
  );
  reportWebVitals();
};

 rerenderEntireTree();



  