import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Text,
  CardFooter,
  Button,
  Box,
  Stack,
  Input,
} from "@chakra-ui/react";
import React, { ChangeEvent, useState } from "react";
import TicketDataService from "./service/TicketService";
import ITicketData from "./types/Tickets";

function AddTicket() {
  const initialTicketState = {
    id: "",
    event: "",
    qty: 0,
    img: "",
    //   published: false
  };
  const [ticket, setTicket] = useState<ITicketData>(initialTicketState);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTicket({ ...ticket, [name]: value });
  };

  const saveTicket = () => {
    var data = {
      id: ticket.id,
      event: ticket.event,
      qty: ticket.qty,
      img: ticket.img,
    };

    TicketDataService.create(data)
      .then((response: any) => {
        setTicket({
          id: response.data.id,
          event: response.data.event,
          qty: response.data.qty,
          img: response.data.img,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
      
    };
    console.log(saveTicket);

  const newTicket = () => {
    setTicket(initialTicketState);
    setSubmitted(false);
  };
  return (
    <Card align="center" >
      {submitted ? (
        <Box>
          <Heading as="h4" size="md">
            You submitted successfully!
          </Heading>
          <Stack direction="row" spacing={4} align="center">
            <Button colorScheme="teal" variant="solid" onClick={newTicket}>
              Add
            </Button>
          </Stack>
        </Box>
      ) : (
        <>
          <CardHeader>
            <Heading size="md"> Customer dashboard</Heading>
          </CardHeader>
          <CardBody>
            <Text>Event</Text>
            <Input
              htmlSize={4}
              width="250px"
              type={"text"}
              required
              onChange={handleInputChange}
            />
          </CardBody>
          <CardBody>
            <Text>QTY</Text>
            <Input
              htmlSize={4}
              width="250px"
              type={"number"}
              required
            //   value={ticket.qty}
              onChange={handleInputChange}
            />
          </CardBody>
          <CardBody>
            <Text>Image</Text>
            <Input
              htmlSize={4}
              width="250px"
              type={"text"}
              required
            //   value={ticket.img}
              onChange={handleInputChange}
            />
          </CardBody>
          <CardFooter>
            <Stack direction="row" spacing={4} align="center">
              <Button onClick={saveTicket} colorScheme="teal" variant="solid">
                Submit
              </Button>
            </Stack>
          </CardFooter>
        </>
      )}
    </Card>
  );
}

export default AddTicket;
