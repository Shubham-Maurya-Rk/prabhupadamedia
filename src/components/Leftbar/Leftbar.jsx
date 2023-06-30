import React from 'react';
import './Leftbar.css';
import CloseFriend from '../CloseFriend/CloseFriend';
import {Users} from '../../dummyData';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';

function Leftbar({height}) {
  return (
    <div className="Leftbar" style={{height:height}}>
        <div className="leftbarIcons">
            <ul className="leftbarIconsList">
                <li className="leftbarIcon"><RssFeedIcon/> Feed</li>
                <li className="leftbarIcon"><ChatIcon/> Chats</li>
                <li className="leftbarIcon"><PlayCircleIcon/> Videos</li>
                <li className="leftbarIcon"><GroupsIcon/> Groups</li>
                <li className="leftbarIcon"><BookmarksIcon/> Bookmarks</li>
                <li className="leftbarIcon"><HelpOutlineIcon/> Questions</li>
                <li className="leftbarIcon"><WorkIcon/> Jobs</li>
                <li className="leftbarIcon"><EventIcon/> Events</li>
                <li className="leftbarIcon"><SchoolIcon/> Courses</li>
                <input type="button" value="Show More" />
            </ul>
        </div>
        <hr className='hr'/>
        <div className="leftbarFrnds">
          <ul className="leftbarFrndsList">
            {Users && Users.map((u,index)=>(
              <CloseFriend key={index} user={u}/>
            ))}
          </ul>
        </div>
    </div>
  )
}

export default Leftbar