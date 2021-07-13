/**
 * Thomas Bielawski
 * Lambda School WEB45
 * 2.2.2 Instagram Clone- likeSection.js
 * 7/13/2021
 **/

/* Look at the number of likes on line 26. Right now it's hard coded to '100'.
Use a piece of data coming in through props to display the correct number of likes.
You will also add an onClick handler that utilizes `likePost` to increase the count of likes.
(As a stretch goal, you might want to prevent your user from "liking" the same post more than once.) */

//Import statements
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';

//LikeSection function definition, pass in props
const LikeSection = props => 
{
  // 🔥 Make sure the parent of LikeSection is passing the right props!
  const { likePost, numberOfLikes} = props;

  //Return function
  return (
    <div>
      <div className='like-section' key='likes-icons-container' >

        {/**icon click event handler to increase likes */}
        <div className='like-section-wrapper' onClick = { likePost }>
          <FontAwesomeIcon icon = {faHeart} />
        </div>
          
        <div className='like-section-wrapper'>
          <FontAwesomeIcon icon= {faComment} />
        </div>
      </div>

      {/**Replacing int literal with value from object {} */}
      <p className = 'like-number'> {numberOfLikes} likes</p>
    </div>
  );
};

//Export staeements
export default LikeSection;
