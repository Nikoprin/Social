import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from './Redux/Store';
let renderEntireTree = (store) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={store.getState()}
        dispatch={store.dispatch.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderEntireTree(store.getState());
store.subscribe(renderEntireTree)