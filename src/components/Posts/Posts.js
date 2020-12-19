import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 [x]Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;

  return (
    <div className='posts-container-wrapper'>
      {posts.map(postData => {
        return (<Post post={postData} likePost={likePost} />);
      })}
      {/* Map through the posts array returning a Post component at each iteration */}
    </div>
  );
};

export default Posts;
