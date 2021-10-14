import React from "react";
import Messages from "./Messages";
import {
  sendNewMessage,
  updateMessageValueActionCreator,
} from "../../Redux/Reducers/MessagesReducer";
const MessagesContainer = (props) => {
  debugger;
  let state = props.store.getState();
  let newMessage = () => {
    props.store.dispatch(sendNewMessage());
  };
  let onChangeValue = (value) => {
    props.store.dispatch(updateMessageValueActionCreator(value));
  };
  return (
    <Messages
      sendNewMessage={newMessage}
      updateMessageValue={onChangeValue}
      sendNewMessage={newMessage}
      users={state.messagesPage.users}
      messages={state.messagesPage.messages}
      messagesValue={state.messagesPage.message}
    />
  );
};

export default MessagesContainer;
