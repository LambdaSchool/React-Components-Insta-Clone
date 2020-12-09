import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, post } = props;

  return (
    <div className='posts-container-wrapper'>

{post.map(post =>{
        return <Post post={post} likePost= {likePost} />
        
})}
  

    </div>
  );
};

export default Posts;
