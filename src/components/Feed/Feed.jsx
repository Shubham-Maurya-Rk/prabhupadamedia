import React from 'react';
import './Feed.css';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import LabelIcon from '@mui/icons-material/Label';
import PlaceIcon from '@mui/icons-material/Place';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Post from '../Post/Post';
import { Posts } from "../../dummyData";

function Feed() {
  return (
    <div className="Feed">
      <div className="shareContainer">
        <div className="shareBox1">
          <img src={process.env.PUBLIC_URL + "/images/topbarImage.jpeg"} alt="Logo" />
          <input type="text" placeholder="What's in your mind Shubham?" />
        </div>
        <hr className='shareHr' />
        <div className="shareBox2">
          <div>
            <div className="shareOption">
              <PhotoLibraryIcon htmlColor='red' />
              <p>Photo or Video</p>
            </div>
            <div className="shareOption">
              <LabelIcon htmlColor='purple' />
              <p>Tag</p>
            </div>
            <div className="shareOption">
              <PlaceIcon htmlColor='green' />
              <p>Location</p>
            </div>
            <div className="shareOption">
              <EmojiEmotionsIcon htmlColor='gold' />
              <p>Feelings</p>
            </div>
          </div>
          <div>
            <input type="button" value="Share" className='shareBtn' />
          </div>
        </div>
      </div>
      {Posts && Posts.map((p, index) => (
        <Post key={index} post={p} />
      ))}
    </div>
  )
}

export default Feed