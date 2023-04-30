import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Flex, Box, Spacer, Button, ButtonGroup} from "@chakra-ui/react";

function Main(){
return (
    <main>
      <section>
        <div className="container px-2 text-center">
        <div className="row">
                  <div className="col">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterreanian Restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button>Reserve a Table</button>
                    </div>
                 <div className="col">
                 <img src={process.env.PUBLIC_URL + "/restaurantfood.jpg"} height='300px' alt="restaurantfood"/>
                  </div>
          </div>
          </div>
      </section>

      <section>
      <Flex minWidth='max-content' alignItems='center' gap='2'>
                <Box flex='1'>
                  <h1>This week specials!</h1>
                </Box>
                <Spacer />
                <ButtonGroup>
                  <Button>Sign Up</Button>
                </ButtonGroup>
       </Flex>
        <Flex>
                  <Box>
                    <img src={process.env.PUBLIC_URL + "/Placeholder.png"} height='200px' alt="food"/>
                    <h3>Greek Salad</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <button>Order a delivery</button>
                    </Box>

                  <Box>
                    <img src={process.env.PUBLIC_URL + "/Placeholder.png"} height='200px' alt="food"/>
                    <h3>Bruchetta</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <button>Order a delivery</button>
                    </Box>
                    <Box>
                    <img src={process.env.PUBLIC_URL + "/Placeholder.png"} height='200px' alt="food"/>
                    <h3>Lemon cake</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <button>Order a delivery</button>
                    </Box>
         </Flex>
      </section>

      <section>
      <Flex minWidth='max-content' alignItems='center'>
                <Box flex='1'>
                  <h1>Testimonials</h1>
                </Box>
                </Flex>
      <Flex minWidth='max-content' alignItems='center' gap={20}>
                  <Box>
                    <h2>Rating</h2>
                    <img src={process.env.PUBLIC_URL + "/Placeholder.png"} height='80px' alt="food"/>
                    <h3>Name</h3>
                    <button>Review text</button>
                  </Box>
                  <Spacer />
                  <Box>
                    <h2>Rating</h2>
                    <img src={process.env.PUBLIC_URL + "/Placeholder.png"} height='80px' alt="food"/>
                    <h3>Name</h3>
                    <button>Review text</button>
                  </Box>
                  <Spacer />
                  <Box>
                    <h2>Rating</h2>
                    <img src={process.env.PUBLIC_URL + "/Placeholder.png"} height='80px' alt="food"/>
                    <h3>Name</h3>
                    <button>Review text</button>
                  </Box>
                  <Spacer />
                  <Box>
                    <h2>Rating</h2>
                    <img src={process.env.PUBLIC_URL + "/Placeholder.png"} height='80px' alt="food"/>
                    <h3>Name</h3>
                    <button>Review text</button>
                  </Box>
         </Flex>
      </section>

    </main>
);
}

export default Main;