import React from "react";
import "./App.css";


function Nav(){
return (
    <nav className="navbar">
        <div className="navLogo">
            <img src={process.env.PUBLIC_URL + "/Main logo.png"} height='50px' alt="logo"/>
        </div>
        <ul className="navElements">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservation">Reservation</a></li>
        <li><a  href="/order-online">Order Online</a></li>
        <li><a href="/login">Login</a></li>
        </ul>
     </nav>
);
}

export default Nav;