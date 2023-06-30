import React, { useState } from 'react'
import './Topbar.css';
import { Search, Person, Message, Notifications } from '@mui/icons-material';
import { Link } from "react-router-dom";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MobileMenu from '../MobileMenu/MobileMenu';
import StreamIcon from '@mui/icons-material/Stream';

function Topbar() {
  const [leftbar, setleftbar] = useState(false);
  const [rightbar, setrightbar] = useState(false);
  const [menu, setmenu] = useState(false);

  function showLeftbar() {
    setleftbar(!leftbar);
    let ltbar = document.querySelector('.Leftbar');
    ltbar.style.display = leftbar ? "block" : "none";
  }
  function showRightbar() {
    setrightbar(!rightbar);
    let rtbar = document.querySelector('.Rightbar');
    rtbar.style.display = rightbar ? "block" : "none";
  }
  function showMenu() {
    setmenu(!menu);
    let mmenu = document.querySelector('.MobileMenu');
    mmenu.style.display = menu ? "block" : "none";
  }

  return (<div className='navbar'>
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <StreamIcon />
        <h2><Link to="/">PrabhupadaMedia</Link></h2>
      </div>
      <div className="topbarCenter">
        <Search className='searchIcon' />
        <input type="text" className='searchInput' placeholder='Search people, posts ,inputs,.....' />
      </div>
      <div className="topbarRight">
        <div className="pageLinks">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
        </div>
        <div className="pageIcons">
          <span>
            <Person />
            <span className='count'>1</span>
          </span>
          <span>
            <Message />
            <span className='count'>2</span>
          </span>
          <span>
            <Notifications />
            <span className='count'>3</span>
          </span>
        </div>
        <div className="pagePeople d-flex aic">
          <Link to="/profile"><img src="/images/person/6.jpeg" alt="Login" /></Link>
          <MoreVertIcon id='threedots' onClick={showMenu}/>
        </div>
      </div>
    </div>

    <MobileMenu/>

    <div className="navigate">
      <div className="leftBtn"><ChevronLeftIcon htmlColor={leftbar ? "black" : "rgb(0, 110, 255)"} onClick={showLeftbar} className='leftbarshowbtn' /></div>
      <div className="navigateSearch">
        <Search className='searchIcon' />
        <input type="text" className='searchInput' placeholder='Search people, posts ,inputs,.....' />
      </div>
      <div className="RightBtn"><ChevronRightIcon htmlColor={rightbar ? "black" : "rgb(0, 110, 255)"} onClick={showRightbar} className='rightbarshowbtn' /></div>
    </div>
  </div>)
}

export default Topbar