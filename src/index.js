import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from './Redux/ReduxStore';
let renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        dispatch={store.dispatch.bind(store)}
        store={store}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderEntireTree(store.getState());
store.subscribe(() => {
  renderEntireTree(store.getState());
});