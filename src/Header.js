import React from "react";

function Header(){
return (
    <header>
        <meta charSet="UTF-8"/>
        <meta name="og:title" content="Little Lemon Restaurant"/>
        <meta name="og:description" content="We are a family owned Mediterreanian Restaurant, focused on traditional recipes served with a modern twist."></meta>
        <meta name="og:image" content={process.env.PUBLIC_URL + "/restaurantfood.jpg"}/>
    </header>
);
}

export default Header;