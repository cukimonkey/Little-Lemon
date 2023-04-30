import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Flex, Box, Spacer, Button, ButtonGroup} from "@chakra-ui/react";

function Main(){
return (
    <main className="main">
      <section className="section1">
        <Flex>
                  <Box className="colIntro">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterreanian Restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button>Reserve a Table</button>
                    </Box>
                 <Box className="colPic">
                 <img src={process.env.PUBLIC_URL + "/restaurantfood.jpg"} height='300px' alt="restaurantfood"/>
                  </Box>
          </Flex>
      </section>

      <section className="section2">
      <Flex minWidth='max-content' gap='2'>
                <Box flex='1'>
                  <h1>This week specials!</h1>
                </Box>
                <Spacer />
                <ButtonGroup>
                  <Button>Sign Up</Button>
                </ButtonGroup>
       </Flex>

        <Flex className="cards">
                  <Box className="box">
                    <img src={process.env.PUBLIC_URL + "/Placeholder.png"} width="100%" alt="food"/>
                    <h3>Greek Salad</h3><h4>$12.00</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <ButtonGroup className="button2" width="100%" justifyContent="flex-start">
                      <Button>Order Food</Button>
                    </ButtonGroup>
                    </Box>

                    <Box className="box">
                    <img src={process.env.PUBLIC_URL + "/Placeholder.png"} width="100%" alt="food"/>
                    <h3>Bruchetta</h3><h4>$12.00</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <ButtonGroup className="button2" width="100%" justifyContent="flex-start">
                      <Button>Order Food</Button>
                    </ButtonGroup>
                    </Box>
                    <Box className="box">
                    <img src={process.env.PUBLIC_URL + "/Placeholder.png"} width="100%" alt="food"/>
                    <h3>Lemon cake</h3><h4>$12.00</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <ButtonGroup className="button2" width="100%" justifyContent="flex-start">
                      <Button variant="ghost">Order Food</Button>
                    </ButtonGroup>
                    </Box>
         </Flex>
      </section>

      <section className="section3">
      <Flex minWidth='max-content' alignItems='center'>
                <Box className="boxhead" flex='1'>
                  <h1>Testimonials</h1>
                </Box>
                </Flex>
      <Flex className="ratings" alignItems='center' gap='10px' flexWrap='wrap'>
                  <Box className="box2">
                    <h2>Rating</h2>
                    <img src={process.env.PUBLIC_URL + "/Placeholder.png"} height='80px' alt="food"/>
                    <h3>Name</h3>
                    <button>Review text</button>
                  </Box>
                  <Spacer />
                  <Box className="box2">
                    <h2>Rating</h2>
                    <img src={process.env.PUBLIC_URL + "/Placeholder.png"} height='80px' alt="food"/>
                    <h3>Name</h3>
                    <button>Review text</button>
                  </Box>
                  <Spacer />
                  <Box className="box2">
                    <h2>Rating</h2>
                    <img src={process.env.PUBLIC_URL + "/Placeholder.png"} height='80px' alt="food"/>
                    <h3>Name</h3>
                    <button>Review text</button>
                  </Box>
                  <Spacer />
                  <Box className="box2">
                    <h2>Rating</h2>
                    <img src={process.env.PUBLIC_URL + "/Placeholder.png"} height='80px' alt="food"/>
                    <h3>Name</h3>
                    <button>Review text</button>
                  </Box>
         </Flex>
      </section>

      <section className="section4" gap='2'>
        <Flex className="card-horizontal">
                  <Box className="content">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                    </Box>

                 <Box className="image-stack">
                  <div className="image-stack-item image-stack-item--top">
                 <img src={process.env.PUBLIC_URL + "/restaurantfood.jpg"} height='300px' alt="restaurantfood"/>
                 </div>
                 <div className="image-stack-item image-stack-item--bottom">
                 <img src={process.env.PUBLIC_URL + "/restaurantfood.jpg"} height='300px' alt="restaurantfood"/>
                  </div>
                  </Box>
          </Flex>
      </section>
    </main>
);
}

export default Main;