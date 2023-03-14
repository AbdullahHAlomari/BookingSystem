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
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import axios from 'axios';

export default function LoginCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3008/login', {
        email,
        password,
      });
      console.log(response.data.token);
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
            <Text align={'center'}>
              You don't have an account?{' '}
              <Link color={'blue.400'}>Sign up</Link>
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
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleLogin = async () => {
//     setIsLoading(true);
//     setError('');

//     try {
//       const response = await axios.post('http://localhost:3008/login', {
//         email,
//         password,
//       });
//       const token = response.data.token;
//       // do something with the token, such as saving it to local storage
//     } catch (error) {
//       setError(error.response.data.error);
//     }

//     setIsLoading(false);
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
//           <Stack spacing={4}>
//             <FormControl id="email" isRequired>
//               <FormLabel>Email address</FormLabel>
//               <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//             </FormControl>
//             <FormControl id="password" isRequired>
//               <FormLabel>Password</FormLabel>
//               <InputGroup>
//                 <Input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
//                 <InputRightElement h={'full'}>
//                   <Button
//                     variant={'ghost'}
//                     onClick={() => setShowPassword((showPassword) => !showPassword)}>
//                     {showPassword ? <ViewIcon /> : <ViewOffIcon />}
//                   </Button>
//                 </InputRightElement>
//               </InputGroup>
//             </FormControl>
//             <Stack spacing={10} pt={2}>
//               <Button
//                 isLoading={isLoading}
//                 loadingText="Submitting"
//                 size="lg"
//                 bg={'blue.400'}
//                 color={'white'}
//                 _hover={{
//                   bg: 'blue.500',
//                 }}
//                 onClick={handleLogin}>
//                 LOGIN
//               </Button>
//             </Stack>
//             {error && (
//               <Text color="red.500" fontSize="sm">
//                 {error}
//               </Text>
//             )}
//             <Stack pt={6}>
//               <Text align={'center'}>
//                 You don't have an account? <Link color={'blue.400'}>Sign up</Link>
//               </Text>
//             </Stack>
//           </Stack>
//         </Box>
//       </Stack>
//     </Flex>
//   );
// }
