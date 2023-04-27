import { flexbox } from "@chakra-ui/react";
import React from "react";

function Nav(){
return (
    <nav>
        <ul
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center">
            <img src={process.env.PUBLIC_URL + "/Main logo.png"}/>
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