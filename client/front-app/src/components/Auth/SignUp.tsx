import {
  Box,
  Flex,
  Heading,
  VStack,
  Text,
  Input,
  Button,
  useToast,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const SignUp = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const toast = useToast();

  const submitRegister = async () => {
    try {
      // if (!password) {
      //   toast({
      //     title: `You passwords doesn't match`,
      //     status: "error",
      //     duration: 3000,
      //     position: "top",
      //   });
      //   return;
      // }

      const request = await fetch("http://localhost:3008/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstname, lastname, password, email }),
      });

      const data = await request.json();

      if (request.status !== 201) {
        toast({
          title: data.message,
          status: "error",
          duration: 3000,
          position: "top",
        });
        return;
      }

      toast({
        title: data.message,
        status: "success",
        duration: 3000,
        position: "top",
      });
      navigate("/login");
    } catch (error) {
      toast({
        title: "Server Error !",
        status: "error",
        duration: 3000,
        position: "top",
      });
    }
  };

  return (
    <Flex justifyContent="center" alignItems="center" height="100vh">
      <VStack spacing="2rem" width="20rem">
        <Heading>Register </Heading>
        <VStack align="left" spacing="1rem" width="100%">
          <Box>
            <Text>Fistname</Text>
            <Input
              onChange={(e) => setFirstname(e.target.value)}
              value={firstname}
              type="text"
            />
          </Box>
          <Box>
            <Text>Lastname</Text>
            <Input
              onChange={(e) => setLastname(e.target.value)}
              value={lastname}
              type="text"
            />
          </Box>
          <Box>
            <Text>Email</Text>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
            />
          </Box>
          <Box>
            <Text>Password</Text>
            <Input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
            />
          </Box>

          <Button onClick={submitRegister}>Register !</Button>
        </VStack>
        <HStack>
          <Text>Already have account ?</Text>
          <Link to="/login">Login</Link>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default SignUp
