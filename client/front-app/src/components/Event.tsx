import React from "react";
import {
  Box,
  Center,
  Container,
  Image,
  Heading,
  Divider,
  Text,
  SimpleGrid,
  Flex,
  Spacer,
  HStack,
  Stack,
  VStack,
  Button,
  Circle,
  Badge,
  Tooltip,
  Icon,
  chakra,
} from "@chakra-ui/react";
import dataEvent from "./DataCards.json";
import EventIcon from "@mui/icons-material/Event";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Link } from "react-router-dom";


const prI = 50;
const mapImage ="https://pngimg.com/d/google_maps_pin_PNG3.png"
// <-- import styles to be used
const data = {
  imageURL:
    "https://s3.ticketmx.com/uploads/images/182b2df9c13e6f94da1ade102199c192e71ee791.jpeg?w=1920&h=700&mode=crop&bgcolor=black&format=jpg",
};

interface RatingProps {
  rating: number;
  numReviews: number;
}
function Event() {
  return (
    <>

      <Container maxW="6xl" >
        <Box
          bg="#f6f6f6"
          w="100%"
          p={4}
          color="black"
          borderWidth="1px"
          rounded="sm"
          shadow="sm"
        >
          <Box>
          <Center>
            <Image src={data.imageURL} alt=""
            borderWidth="5px"
            rounded={"sm"}
            shadow="lg"
            borderRadius={"lg"} />
          </Center>
          <Spacer h={"5"}/>
          </Box>
          <Heading textAlign={"right"} mb="1">
            ورشة صناعة النسيج للبالغين
          </Heading>
          <Divider orientation="horizontal" />
          <Flex
          bgColor={"gray.400"}
            borderWidth="1px"
            rounded={"lg"}
            shadow="lg"
            mt={"4"}
            w={"100%"}
          
            direction={{ sm: "row-reverse", base: "column" }}
            justify={"center"}
            align={"center"}
          >
            <SimpleGrid bg={""} textAlign={"right"} w={"100%"} spacingY={"7"} m={"2"}   >
              <Stack
                direction={"row"}
                justify={"end"}
              
                spacing={1.5}
              >
                <Text>--d-d-d--d---d-d-d--d---d-d-d--d-</Text>
                <Text> :التاريخ</Text> <EventIcon color="primary" />
              </Stack>
              <Stack
                direction={"row"}
                justify={"end"}
              
                spacing={1.5}
              >
                <Text>--d-d-d--d---d-d-d--d---d-d-d--d-</Text>
                <Text> :الوقت</Text> <AccessTimeOutlinedIcon color="primary" />
              </Stack>
              <Stack
                direction={"row"}
                justify={"end"}
                spacing={1.5}
              >
                <Text>--d-d-d--d---d-d-d--d---d-d-d--d-</Text>
                <Text> :المدينة</Text>
                <LocationCityOutlinedIcon color="primary" />
              </Stack>
              <Stack
                direction={"row"}
                justify={"end"}
              
                spacing={1.5}
              >
                <Text>--d-d-d--d---d-d-d--d---d-d-d--d-</Text>
                <Text> :المكان</Text> <PlaceOutlinedIcon color="primary" />
              </Stack>
              <Stack
                direction={"row"}
                justify={"end"}
                
                spacing={1.5}
              >
                <Text>--d-d-d--d---d-d-d--d---d-d-d--d-</Text>
                <Text> :الوصف</Text> <InfoOutlinedIcon color="primary" />
              </Stack>
            </SimpleGrid>
            <SimpleGrid columns={1} spacingY="6" w={"100%"} m={"2"}>
              
              <HStack  justify="center">
                <Text>--d-d-d--d---d-d-d--d---d-d-d--d-</Text>
                <Text> :السعر</Text> <PaidOutlinedIcon color="primary" />
              </HStack>
              <HStack  justify="center">
                <Button colorScheme="blue" w={"50%"}>
                  احجز الآن
                </Button>
              </HStack>
              
              <HStack justify={"center"} ><Link to={""}><Image   w={"120px "} src={mapImage}></Image></Link></HStack>
            </SimpleGrid>
          </Flex>
        </Box>
      </Container>
    </>
  );
}

export default Event;
