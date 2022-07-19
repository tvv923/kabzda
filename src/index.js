import store, { subscribe } from './redux/state';
//import {rerenderEntireTree} from './render';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addPost, updateNewPostText } from './redux/state';

//rerenderEntireTree(state);

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {    
  root.render(
  <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
  </React.StrictMode>
  );
  reportWebVitals();
};

 rerenderEntireTree(store.getState());

 store.subscribe(rerenderEntireTree);

  