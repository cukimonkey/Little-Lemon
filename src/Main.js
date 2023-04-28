import { Grid } from "@chakra-ui/react";
import React from "react";
import "./App.css";

function Main(){
return (
    <main>
      <div className="intro">
        <div className="highlights">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterreanian Restaurant, focused on traditional recipes served with a modern twist.</p>
          <button>Reserve a Table</button>
        </div>
        <div className="mainPicture">
        <img src={process.env.PUBLIC_URL + "/restaurantfood.jpg"} height='300px' alt="restaurantfood"/>
      </div>
      </div>
    </main>
);
}

export default Main;