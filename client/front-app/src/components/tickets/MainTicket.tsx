import React, { useState, useEffect, ChangeEvent } from "react";
import TicketDataService from "./service/TicketService";
import ITicketData from "./types/Tickets";
import { Link } from "react-router-dom";

import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Image,
  Grid,
  GridItem,
  Input,
  List,
  ListIcon,
  ListItem,
  WrapItem,
} from "@chakra-ui/react";

interface Ticket {
  id: string;
  event: string;
  qty: number;
  img: string;
}

const data: Ticket[] = [
  {
    id: "1",
    event: "Abdulmajed",
    qty: 20,
    img: "https://vid.alarabiya.net/images/2022/01/26/1a3a1764-3e51-4d64-a606-37ac2fbad7e2/1a3a1764-3e51-4d64-a606-37ac2fbad7e2.png?crop=4:3&width=1200",
  },
  {
    id: "2",
    event: "Mohammed Abdu",
    qty: 500,
    img: "https://ar.esquireme.com/cloud/2022/04/20/Mohmmad-Abdo.jpg",
  },
  {
    id: "3",
    event: "Khaled Abdulrahman",
    qty: 500,
    img: "https://i1.sndcdn.com/artworks-4RByd0L5jPyFuZz2-RxJ6zA-t500x500.jpg",
  },
];

function MainTicket() {
  const [tickets, setTickets] = useState<Array<ITicketData>>([]);
  const [currentTicket, setCurrentTicket] = useState<ITicketData | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [searchTitle, setSearchTitle] = useState<string>("");

  useEffect(() => {
    retrieveTickets();
  }, []);

  const onChangeSearchTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const retrieveTickets = () => {
    TicketDataService.getAll()
      .then((response: any) => {
        setTickets(response.data);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveTickets();
    setCurrentTicket(null);
    setCurrentIndex(-1);
  };

  const setActiveTicket = (ticket: ITicketData, index: number) => {
    setCurrentTicket(ticket);
    setCurrentIndex(index);
  };

  const removeAllTicket = () => {
    TicketDataService.removeAll()
      .then((response: any) => {
        console.log(response.data);
        refreshList();
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const findByTitle = () => {
    TicketDataService.findByTitle(searchTitle)
      .then((response: any) => {
        setTickets(response.data);
        setCurrentTicket(null);
        setCurrentIndex(-1);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };
  return (
    <Grid templateColumns="repeat(3, 20%)" justifyContent={"center"} height={"100vh"} alignItems={"center"}>
      <GridItem w="60%" h="10" bg="blue.500">
        <Box>
          <Box>
            <Input
              type={"text"}
              placeholder="Search by event"
              value={searchTitle}
              onChange={onChangeSearchTitle}
            />
          </Box>
          <Box>
            <Button
              colorScheme="teal"
              variant="solid"
              onClick={findByTitle}
              type={"button"}
            >
              Search
            </Button>
          </Box>
        </Box>
      </GridItem>
      <GridItem w="60%" h="10" bg="blue.500">
        <Box>
          <Heading textAlign={"center"} as="h4" p={2}  size="md">
            Events List
          </Heading>

          <List spacing={3}>
            {tickets &&
              tickets.map((ticket, index) => (
                <ListItem>
                  <ListIcon
                    as={"circle"}
                    color="green.500"
                    className={
                      "list-group-item " +
                      (index === currentIndex ? "active" : "")
                    }
                    onClick={() => setActiveTicket(ticket, index)}
                    key={index}
                  />
                  {ticket.event}
                </ListItem>
              ))}
          </List>

          <WrapItem>
            <Button colorScheme="red" onClick={removeAllTicket}>
              Remove All
            </Button>
          </WrapItem>
        </Box>
      </GridItem>
      <GridItem w="60%" h="10" bg="blue.500">
        <Box>
          {currentTicket ? (
            <>
              <Box>
                <Heading as="h4" size="md">
                  Ticket
                </Heading>
                <Text>Event:</Text>
                {currentTicket.event}
              </Box>
              <Box>
                <Text>QTY</Text>
                {currentTicket.qty}
              </Box>
              <Box>
                <Link to={"/tutorials/" + currentTicket.id}>Edit</Link>
              </Box>
            </>
          ) : (
            <Box>
              <Heading as="h5" size="sm">
                Please click on a Ticket...
              </Heading>
            </Box>
          )}
        </Box>
      </GridItem>
    </Grid>
    // <div className="ticket">
    //   {data.map((item) => (
    //     <SimpleGrid minChildWidth="120px" spacing="40px">
    //       <Card
    //         direction={{ base: "column", sm: "row" }}
    //         overflow="hidden"
    //         variant="outline"
    //       >
    //         <Image
    //           objectFit="cover"
    //           maxW={{ base: "100%", sm: "200px" }}
    //           src={item.img}
    //           alt="Caffe Latte"
    //         />

    //         <Stack>
    //           <CardBody>
    //             <Heading size="md">{item.event}</Heading>

    //             <Text py="2">{item.qty}</Text>
    //           </CardBody>

    //           <CardFooter>
    //             <Button variant="solid" colorScheme="blue">
    //               Buy Latte
    //             </Button>
    //           </CardFooter>
    //         </Stack>
    //       </Card>
    //     </SimpleGrid>
    //   ))}
    // </div>
  );
}

export default MainTicket;
