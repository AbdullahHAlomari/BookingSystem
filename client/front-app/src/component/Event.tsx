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
const prI = 50;
// <-- import styles to be used
const data = {
  isNew: true,
  imageURL:
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  name: "Wayfarer Classic",
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
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
            <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov"
            borderWidth="5px"
            rounded={"sm"}
            shadow="lg"
            borderRadius={"lg"} />
          </Center>
          <Spacer h={"10"}/>
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
            <SimpleGrid bg={""} textAlign={"right"} w={"100%"} spacingY={"4"} m={"2"}   >
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
            <SimpleGrid columns={1} spacingY="10" w={"100%"} m={"2"}>
              <HStack  justify="center">
                <Text>--d-d-d--d---d-d-d--d---d-d-d--d-</Text>
                <Text> :السعر</Text> <PaidOutlinedIcon color="primary" />
              </HStack>
              <HStack  justify="center">
                <Button colorScheme="blue" w={"50%"}>
                  احجز الآن
                </Button>
              </HStack>
            </SimpleGrid>
          </Flex>
        </Box>
      </Container>
    </>
  );
}

export default Event;
