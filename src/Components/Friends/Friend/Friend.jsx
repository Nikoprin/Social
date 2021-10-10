import React from "react";
import classes from "./Friend.module.css";
const Friend = (props) => {
  return (
    <div className={classes.friend}>
      <img src={props.avatar} alt="Фото профиля" />
      <div className={classes.description}>
        <h4>{props.name}</h4>
        <p>{props.education}</p>
      </div>
    </div>
  );
};

export default Friend;
