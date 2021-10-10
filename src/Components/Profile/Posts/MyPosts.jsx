import React from "react";
import Post from "./Post/Post";

const MyPosts = (props) => {
    const postList = props.posts.map((post) => {
        return <Post userName={post.name} postDescription={post.description} user={post.user} key={post.id} />;
      });
    return (
        <div>{postList}</div>
    )
}

export default MyPosts;
