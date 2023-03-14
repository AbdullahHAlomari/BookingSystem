import React from 'react'
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from './N&F/NavBar';
import Routers from './routers/Routers';
import Footer from './N&F/Footer';


function Mains() {
  return (
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
      <GridItem area={"header"}>
        <NavBar />
      </GridItem>
      <GridItem bg="pink.300" area={"nav"} mt={5}>
        Nav
      </GridItem>
      <GridItem area={"main"} mt={5}>
        <Routers />
      </GridItem>
      <GridItem bg="blue.300" area={"footer"}>
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default Mains
