import { flexbox } from "@chakra-ui/react";
import React from "react";

function Nav(){
return (
    <nav className="navbar">
        <ul className="navelement"
            style={{
                listStyleType: "none",
                padding: 0,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%"
            }}
          >
            <img src={process.env.PUBLIC_URL + "/Main logo.png"} alt="logo"/>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservation">Reservation</a></li>
            <li><a href="/order-online">Order Online</a></li>
            <li><a href="/login">Login</a></li>
        </ul>
    </nav>
);
}

export default Nav;