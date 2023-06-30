import React from 'react';
import './Online.css';

function Online({user}) {
    return (
        <div className="online-frnds-list d-flex aic">
            <div className="online-frnds-profile-image d-flex aic">
                <img src={process.env.PUBLIC_URL+user.profilePicture} alt="online-friends" />
                <div className="online-sign"></div>
            </div>
            <span>{user.username}</span>
        </div>
    )
}

export default Online