import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../N&F/NavBar";
import Footer from "../N&F/Footer";
import { Grid, GridItem } from "@chakra-ui/react";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";
import PrivateRoute from "../Auth/PrivateRoute";

function Routers() {
  return (
    <div className="router">
      <Grid
        templateAreas={`"header header"
      "nav main"
      "footer footer"`}
        gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={"150px 1fr"}
        h="100vh"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2" area={"header"}>
          <NavBar />
        </GridItem>
        <GridItem pl="2" bg="pink.300" area={"nav"}>
          Nav
        </GridItem>
        <GridItem pl="2" bg="green.300" area={"main"}></GridItem>
        <GridItem pl="2" bg="blue.300" area={"footer"}>
          <Footer />
        </GridItem>
      </Grid>
    </div>
  );
}

export default Routers;
