import React from "react";
import Comment from "./Comment";
import "./Comments.css";

const Comments = (props) => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comment } = props;

  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      {comment.map((comObj) => {
        return <Comment key={comObj.id} comments={comObj} />;
      })}
    </div>
  );
};

export default Comments;
