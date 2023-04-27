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
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservation</li>
            <li>Order Online</li>
            <li>Login</li>
        </ul>
    </nav>
);
}

export default Nav;