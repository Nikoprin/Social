import React from "react";
import { addPostActionCreator, updatePostValueActionCreator } from "../../../../Redux/Reducers/ProfileReducer";

import classes from "./Form.module.css";
const Form = (props) => {
  let newPostElement = React.createRef();
  let newPost = () => {
    // let action = dispatch({ type: 'ADD_NEW_POST' });
    props.dispatch(addPostActionCreator());
  };
  let onChangeInput = (value) => {
    value = newPostElement.current.value;
    /* let action = dispatch({
      type: 'UPDATE_TEXT_VALUE',
      text: value
    })*/
    props.dispatch(updatePostValueActionCreator(value));
  };
  return (
    <div className={classes.form}>
      <input
        type="text"
        placeholder="Что у вас нового?"
        ref={newPostElement}
        value={props.newTextValue}
        onChange={onChangeInput}
      />
      <div className={classes.publishButton}>
        <button onClick={newPost}>Опубликовать</button>
      </div>
    </div>
  );
};

export default Form;
