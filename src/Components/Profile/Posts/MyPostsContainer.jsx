import React from "react";
import MyPosts from "./MyPosts";
import {
  addPostActionCreator,
  updatePostValueActionCreator,
} from "../../../Redux/Reducers/ProfileReducer";
const MyPostsContainer = (props) => {
  let state = props.store.getState();
  let newPost = () => {
    props.store.dispatch(addPostActionCreator());
  };
  let onChangeInput = (value) => {
    props.store.dispatch(updatePostValueActionCreator(value));
  };
  return (
    <MyPosts
      updatePostValue={onChangeInput}
      addPost={newPost}
      state={props.state}
      posts={state.profilePage.posts}
      newTextValue={state.profilePage.newTextValue}
    />
  );
};

export default MyPostsContainer;
