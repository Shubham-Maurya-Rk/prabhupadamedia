import React from 'react'

function CloseFriend({user}) {
    return (
        <li>
            <img src={process.env.PUBLIC_URL+user.profilePicture} alt="friends" />
            <span>{user.username}</span>
        </li>
    )
}

export default CloseFriend