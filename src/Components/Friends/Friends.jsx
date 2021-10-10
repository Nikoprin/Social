import React from "react";
import Friend from "./Friend/Friend";
import classes from "./Friends.module.css";
import Avatar from './../../Images/Hacker.jpg';
const Friends = (props) => {
  return (
    <div className={classes.friends}>
    <h3>My Friends</h3>
      {props.friends.map(friend => {
        return <Friend avatar={Avatar} name={friend.name} education={friend.education} />
      })}
    </div>
  );
};

export default Friends;