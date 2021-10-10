import React from "react";
import classes from "./Messages.module.css";
import Avatar from "./../../Images/Hacker.jpg";
import { NavLink } from "react-router-dom";

const Messages = (props) => {
  let newMessageElement = React.createRef();

  let sendNewMessage = () => {
    props.sendNewMessage();
    props.updateMessageValue('');
  };

  let onChangeValue = (value) => {
    value = newMessageElement.current.value;
    props.updateMessageValue(value);
  }
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
          <input type="text" placeholder="Введите сообщение" ref={newMessageElement} value={props.newMessage} onChange={onChangeValue} />
          <button onClick={ sendNewMessage }>Отправить</button>
        </div>
      </div>
    </div>
  );
};

export default Messages;