import React from 'react';
import './Login.css';
import { Link } from "react-router-dom";


function Login() {
  return (
    <div className="loginContainer">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h1>PrabhupadaMedia</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia doloremque sint ea, amet eligendi illo ducimus perferendis vero deleniti eum.</p>
            </div>
            <div className="loginRight">
                <form action="" className='d-flex'>
                    <input type="text" placeholder='Enter Username..'/>
                    <input type="text"  placeholder='Enter Password..'/>
                    <Link to="/">Login</Link>
                    <p>Forgot Password?</p>
                    <Link to="/register" style={{backgroundColor:'green',width:'90%',alignSelf:'center'}}>Create a account</Link>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login
