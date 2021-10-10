import React from "react";
import state from "./Redux/State";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {sendNewMessage} from './Redux/State.jsx';
import {updateMessageValue} from './Redux/State';
import {addNewPost} from './Redux/State';
import {updateTextValue} from './Redux/State';
export let renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        sendNewMessage={sendNewMessage}
        updateMessageValue={updateMessageValue}
        addNewPost={addNewPost}
        updateTextValue={updateTextValue}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderEntireTree(state);