import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import axios from 'axios';

export default function LoginCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Redirect user to the dashboard page if token is available
      window.location.href = '/dashboard';
    }
  }, []);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3008/login', {
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);
      // Redirect user to the dashboard page after successful login
      window.location.href = '/dashboard';
    } catch (error) {
      setError('Invalid email or password');
      console.log(error);
    }
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            LOG-IN
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            Enjoy booking tickets with ease
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <form onSubmit={handleLogin}>
            <Stack spacing={4}>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                {error && (
                  <Text color={'red.500'} fontSize={'sm'}>
                    {error}
                  </Text>
                )}
                <Button
                  type="submit"
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  LOGIN
                </Button>
              </Stack>
            </Stack>
          </form>
          <Stack pt={6}>
          <Text fontSize={'sm'} color={'gray.600'} align={'center'}>
Don't have an account?{' '}
<Link color={'blue.400'} href={'/signup'}>
Sign up
</Link>
</Text>
</Stack>
</Box>
</Stack>
</Flex>
);
}











// import {
//   Flex,
//   Box,
//   FormControl,
//   FormLabel,
//   Input,
//   InputGroup,
//   HStack,
//   InputRightElement,
//   Stack,
//   Button,
//   Heading,
//   Text,
//   useColorModeValue,
//   Link,
// } from '@chakra-ui/react';
// import { useState } from 'react';
// import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
// import axios from 'axios';

// export default function LoginCard() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3008/login', {
//         email,
//         password,
//       });
//       console.log(response.data.token);
//     } catch (error) {
//       setError('Invalid email or password');
//       console.log(error);
//     }
//   };

//   return (
//     <Flex
//       minH={'100vh'}
//       align={'center'}
//       justify={'center'}
//       bg={useColorModeValue('gray.50', 'gray.800')}>
//       <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
//         <Stack align={'center'}>
//           <Heading fontSize={'4xl'} textAlign={'center'}>
//             LOG-IN
//           </Heading>
//           <Text fontSize={'lg'} color={'gray.600'}>
//             Enjoy booking tickets with ease
//           </Text>
//         </Stack>
//         <Box
//           rounded={'lg'}
//           bg={useColorModeValue('white', 'gray.700')}
//           boxShadow={'lg'}
//           p={8}>
//           <form onSubmit={handleLogin}>
//             <Stack spacing={4}>
//               <FormControl id="email" isRequired>
//                 <FormLabel>Email address</FormLabel>
//                 <Input
//                   type="email"
//                   value={email}
//                   onChange={(event) => setEmail(event.target.value)}
//                 />
//               </FormControl>
//               <FormControl id="password" isRequired>
//                 <FormLabel>Password</FormLabel>
//                 <InputGroup>
//                   <Input
//                     type={showPassword ? 'text' : 'password'}
//                     value={password}
//                     onChange={(event) => setPassword(event.target.value)}
//                   />
//                   <InputRightElement h={'full'}>
//                     <Button
//                       variant={'ghost'}
//                       onClick={() =>
//                         setShowPassword((showPassword) => !showPassword)
//                       }>
//                       {showPassword ? <ViewIcon /> : <ViewOffIcon />}
//                     </Button>
//                   </InputRightElement>
//                 </InputGroup>
//               </FormControl>
//               <Stack spacing={10} pt={2}>
//                 {error && (
//                   <Text color={'red.500'} fontSize={'sm'}>
//                     {error}
//                   </Text>
//                 )}
//                 <Button
//                   type="submit"
//                   loadingText="Submitting"
//                   size="lg"
//                   bg={'blue.400'}
//                   color={'white'}
//                   _hover={{
//                     bg: 'blue.500',
//                   }}>
//                   LOGIN
//                 </Button>
//               </Stack>
//             </Stack>
//           </form>
//           <Stack pt={6}>
//             <Text align={'center'}>
//               You don't have an account?{' '}
//               <Link color={'blue.400'}>Sign up</Link>
//             </Text>
//           </Stack>
//         </Box>

//       </Stack>
//     </Flex>
//   );
// }
