// eslint-disable-next-line
import React from "react";
import "./Posts.css";
import Post from "./Post.js";

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;
  console.log(props);

  return (
    <div className="posts-container-wrapper">
      {posts.map((post) => {
        return <Post key={post.id} likePost={likePost} post={post} />;
      })}

      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;
