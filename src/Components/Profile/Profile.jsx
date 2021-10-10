import React from "react";
import Ava from "./../../Images/Hacker.jpg";
import Form from "./Posts/Form/Form";
import MyPosts from "./Posts/MyPosts";
import classes from "./Profile.module.css";
const Profile = (props) => {
  return (
    <div className={classes.profile}>
      <div className={classes.description}>
        <img src={Ava} alt="Profile Photo" />
        <h2>{props.name}</h2>
        <p>{props.skill}</p>
      </div>
      <Form newTextValue={props.newTextValue} addNewPost={props.addNewPost} updateTextValue={props.updateTextValue}/>
      <MyPosts posts={props.posts} />
    </div>
  );
};

export default Profile;