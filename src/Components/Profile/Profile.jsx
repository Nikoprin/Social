import React from "react";
import Ava from "./../../Images/Hacker.jpg";
import MyPostsContainer from './Posts/MyPostsContainer'
import classes from "./Profile.module.css";
const Profile = (props) => {
  return (
    <div className={classes.profile}>
      <div className={classes.description}>
        <img src={Ava} alt="Profile Photo" />
        <h2>Nikolai Prinko</h2>
        <p>Front-End Development</p>
      </div>
      <MyPostsContainer store={props.store}/>
    </div>
  );
};

export default Profile;
