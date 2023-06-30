import React from 'react';


function UserFriend({user}) {
    return (
        <div className='userFriend'>
            <img src={process.env.PUBLIC_URL+user.profilePicture} alt="friends" />
            <p>{user.username}</p>
        </div>
    )
}

export default UserFriend