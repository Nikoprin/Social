import React from "react";
import classes from "./Messages.module.css";
import Avatar from "./../../Images/Hacker.jpg";
import { NavLink } from "react-router-dom";
import {
  sendNewMessage,
  updateMessageValueActionCreator,
} from "../../Redux/Reducers/MessagesReducer";
const Messages = (props) => {
  let newMessageElement = React.createRef();

  let newMessage = () => {
    props.dispatch(sendNewMessage());
    //let action = dispatch({type: 'SEND_NEW_MESSAGE'});
  };
  let onChangeValue = (value) => {
    value = newMessageElement.current.value;
    props.dispatch(updateMessageValueActionCreator(value));
        /* let action = dispatch({
      type: 'UPDATE_MESSAGE_VALUE',
      text: value
    })*/
  };
  return (
    <div className={classes.messages}>
      <div className={classes.friends}>
        <ul>
          <li>
            {props.users.map((user) => {
              return (
                <div className={classes.user}>
                  <img src={Avatar} alt={props.alt} />
                  <NavLink to={`/Messages/${user.id}`}>{user.user}</NavLink>
                </div>
              );
            })}
          </li>
        </ul>
      </div>
      <div className={classes.friendMessages}>
        {props.messages.map((e) => {
          return (
            <div className={classes.message} key={e.id}>
              <span>{e.message}</span>
            </div>
          );
        })}
        <div className={classes.newMessage}>
          <input
            type="text"
            placeholder="Введите сообщение"
            ref={newMessageElement}
            value={props.newMessage}
            onChange={onChangeValue}
          />
          <button onClick={newMessage}>Отправить</button>
        </div>
      </div>
    </div>
  );
};

export default Messages;