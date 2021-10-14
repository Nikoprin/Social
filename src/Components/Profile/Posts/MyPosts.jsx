import React from "react";
import Post from "./Post/Post";
import classes from "./MyPosts.module.css";
const MyPosts = (props) => {
  let newPostElement = React.createRef();
  let newPost = () => {
    props.addPost();
  };
  let onChangeInput = (value) => {
    value = newPostElement.current.value;
    props.updatePostValue(value);
  };
  const postList = props.posts.map((post) => {
    return (
      <Post
        userName={post.name}
        postDescription={post.description}
        user={post.user}
        key={post.id}
      />
    );
  });
  return (
    <div>
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
      <div>{postList}</div>
    </div>
  );
};

export default MyPosts;
