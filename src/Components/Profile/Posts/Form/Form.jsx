import React from "react";
import classes from "./Form.module.css";
const Form = (props) => {
  let newPostElement = React.createRef();
  let newPost = () => {
    props.addNewPost();
    props.updateTextValue('');
  };
  let onChangeInput = (value) => {
    value = newPostElement.current.value;
    props.updateTextValue(value);
  }
  return (
    <div className={classes.form}>
      <input type="text" placeholder="Что у вас нового?" ref={newPostElement} value={props.newTextValue} onChange={ onChangeInput } />
      <div className={classes.publishButton}>
          <button onClick={ newPost }>Опубликовать</button>
      </div>
    </div>
  );
};

export default Form;