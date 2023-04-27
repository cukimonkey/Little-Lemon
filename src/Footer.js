import React from "react";

function Footer(){
return (
    <footer className='footer'
    style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
    }}>
      <div className="footerelement">
            <img className="footerlogo" height='100px' src={process.env.PUBLIC_URL + "/Footer logo.png"} alt="logo"/>
      </div>
      <div className="footerelement">
        <ul className="footerlist">
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservation</li>
            <li>Order Online</li>
            <li>Login</li>
        </ul>
        </div>
      <div className="footerelement">
        <ul className="footerlist">
            <li>Address</li>
            <li>Phone number</li>
            <li>Email</li>
        </ul>
      </div>
      <div className="footerelement">
      <ul className="footerlist">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
        </ul>
        </div>
    </footer>
);
}

export default Footer;