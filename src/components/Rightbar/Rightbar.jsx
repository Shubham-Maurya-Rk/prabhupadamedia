import React from 'react';
import './Rightbar.css';
import { Users } from '../../dummyData';
import Online from '../Online/Online';
import UserFriend from '../UserFriend/UserFriend';


function Rightbar({profile}) {
  const HomeRightbar = () => {
    return (
      <>
      <div className="gifts">
        <div className="gifts-caption ">
          <img src={process.env.PUBLIC_URL + "/images/gift-box.png"} alt="gift-box" />
          <span><b> Pola Foster</b> and <b>3 other friends</b> have a birthday today.</span>
        </div>
        <div className="gifts-image">
          <img src="https://www.paperdirect.com/blog/media/PaperDirect-Office-Birthdays.png" alt="Bday" />
        </div>
      </div>
      <div className="online-frnds">
        <h3>Online Friends</h3>
        {Users && Users.map((u, index) => (
          <Online key={index} user={u} />
        ))}

      </div>
      </>
    )
  }
  const ProfileRightbar=()=>{
    return (<>
      <div className="userDetails">
        <h2>User Information</h2>
        <p>City : New York</p>
        <p>From : Dahisar</p>
        <p>Relationship : Married</p>
      </div>
      <h2>User Friends</h2>
      <div className="userFriends">
        {Users && Users.map((u, index) => (
          <UserFriend key={index} user={u} />
        ))}
      </div>
    </>)
  }
  return (
    <div className="Rightbar">
      <div className="rightBarInner">
        {
            profile==="Home"?<HomeRightbar/>:<ProfileRightbar/>
        }
      </div>
    </div>
  )
}

export default Rightbar