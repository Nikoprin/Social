import React from 'react';
import classes from './Post.module.css';
const Post = (props) => {
  return (
    <div className={classes.post}>
      <div className={classes.user}>
        <img src={props.user} alt="User" />
        <h4>{props.userName}</h4>
      </div>
      <div className={classes.description}>
        <p>{props.postDescription}</p>
      </div>
    </div>
  )
}

export default Post;