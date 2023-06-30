import React from 'react';
import { Link } from "react-router-dom";
import { Person, Message, Notifications } from '@mui/icons-material';
import './MobileMenu.css';

function MobileMenu() {
    return (
        <div className="MobileMenu">
            <div className="MobileRight">
                <div className="MobilepageIcons">
                    <span>
                        <Person />
                        <span className='Mobilecount'>1</span>
                    </span>
                    <span>
                        <Message />
                        <span className='Mobilecount'>2</span>
                    </span>
                    <span>
                        <Notifications />
                        <span className='Mobilecount'>3</span>
                    </span>
                </div>
                <div className="MobilepageLinks d-flex">
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </div>
    )
}

export default MobileMenu