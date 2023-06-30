import React from 'react';
import './Register.css';
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="loginContainer">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h1>PrabhupadaMedia</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia doloremque sint ea, amet eligendi illo ducimus perferendis vero deleniti eum.</p>
            </div>
            <div className="loginRight">
                <form action="" className='d-flex'>
                    <input type="text" placeholder='Username'/>
                    <input type="text"  placeholder='Email'/>
                    <input type="password" placeholder='Password'/>
                    <input type="password"  placeholder='Confirm Password'/>
                    <Link to="/login">Submit</Link>
                    <Link to="/login" style={{backgroundColor:'green',width:'90%',alignSelf:'center'}}>Login to account</Link>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register
