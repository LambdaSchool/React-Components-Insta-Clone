import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;
  console.log(posts);
  return (
		<div className="posts-container-wrapper">
			{posts.map((post) => {
				return <Post key={post.id} post={posts} likePost={likePost} />;
			})}
		</div>
	);
};
;

export default Posts;