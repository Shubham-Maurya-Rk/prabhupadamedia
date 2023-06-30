import React from 'react';
import './Home.css';
import Leftbar from '../Leftbar/Leftbar';
import Rightbar from '../Rightbar/Rightbar';
import Topbar from '../Topbar/Topbar';
import Feed from '../Feed/Feed';

function Home() {
  return (<>
    <Topbar/>
    <div className='Home'>
      <Leftbar/>
      <Feed/>
      <Rightbar profile="Home"/>
    </div>
    </>);
}

export default Home