import React from 'react'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';
// End Slider imports
// card imports
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  SimpleGrid,
} from '@chakra-ui/react';
import data from '../components/DataEvents'
const jData=JSON.stringify(data)
console.log(jData);

const IMAGE =
  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';
function HomePage() {
  return (
    <>
    {/* strat image slider */}
    <Splide aria-label="My Favorite Images" options={{type:'fade'
      ,rewind:true,speed:2000,rewindByDrag:true, rewindSpeed:2000,}}>
  <SplideSlide>
    <img src="https://s3.ticketmx.com/uploads/images/182b2df9c13e6f94da1ade102199c192e71ee791.jpeg?w=1920&h=700&mode=crop&bgcolor=black&format=jpg" alt="Image 1"/>
  </SplideSlide>
  <SplideSlide>
    <img src="https://s3.ticketmx.com/uploads/images/1c6513a267595fd2d11c0213e2a692798966f68c.png?w=1920&h=700&mode=crop&bgcolor=black&format=jpg" alt="Image 2"/>
  </SplideSlide>
  <SplideSlide>
    <img src="https://s3.ticketmx.com/uploads/images/a2397f600f554df37ff3223a85d616d8edeb603b.png?w=1920&h=700&mode=crop&bgcolor=black&format=jpg" alt="Image 3"/>
  </SplideSlide>
</Splide>
        {/* End image slider */}
        {/* Start Cards */}

        <Center py={12}>
      <SimpleGrid columns={{base:1,sm:2,md:3}} spacingX={{base:0,sm:2,md:4,lg:6}} spacingY={15} >
        {data.map((item)=>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-4}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${item.image})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={285}
            objectFit={'cover'}
            src={item.image}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {item.name}
          </Heading>
          <Stack direction={'row'} align={'center'}>
          <Text  color={'gray.600'}>
              ريال
            </Text>
            <Text fontWeight={800} fontSize={'xl'}>
              {item.price}
            </Text>
           
          </Stack>
        </Stack>
      </Box>
      )}
      </SimpleGrid>
    </Center>
        
    
    
    
    </>
  )
}

export default HomePage