import React from 'react'
import Leftbar from '../Leftbar/Leftbar'
import Rightbar from '../Rightbar/Rightbar'
import Feed from '../Feed/Feed';
import './Profile.css'
import Topbar from '../Topbar/Topbar';

function Profile() {
    return (<>
        <Topbar />
        <div className='Home'>
            <Leftbar height="162vh" />
            <div className="Profile">
                <div className="profileTop">
                    <div className="profileTopImg">
                        <img src={process.env.PUBLIC_URL + "/images/post/3.jpeg"} alt="bg" />
                    </div>
                    <div className="profileUserDetails">
                        <div className="profileUserImg">
                            <img src={process.env.PUBLIC_URL + "/images/person/6.jpeg"} alt="" />
                        </div>
                        <div className="profileUserDetail">
                            <h2>Garuda Dasa</h2>
                            <p>Hare Krishna! All divine souls..</p>
                        </div>
                    </div>
                </div>
                <div className="profileBottom">
                    <Feed />
                    <Rightbar profile="Profile" />
                </div>
            </div>
        </div>
    </>)
}

export default Profile