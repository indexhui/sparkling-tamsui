import { Flex, Box, VStack, Image, Heading } from '@chakra-ui/react';
import kvLong from '../assets/images/kv_long.png';
import time from '../assets/images/time.png';
import logotype from '../assets/images/logotype.png';
import logoTime from '../assets/images/logo_time.png';
import kvMobile from '../assets/images/kv_mobile.png';

function Hero() {
  return (
    <Box
      h="100vh"
      bgGradient="linear(to-b, brand.500 0%,brand.500 10%, brand.100)"
      position="relative"
      justify="center"
      align="center"
      overflow="hidden"
    >
      <Box
        display={{ base: 'block', md: 'none' }}
        w="156px"
        h="475px"
        position="absolute"
        bottom="10%"
        left="35px"
        bgImage={`url('${logoTime}')`}
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPosition="center top"
      ></Box>
      <Box
        display={{ base: 'block', md: 'none' }}
        w="300px"
        h="100%"
        position="absolute"
        top="60px"
        right="0"
        bgImage={`url('${kvMobile}')`}
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPosition="center top"
      ></Box>

      <Flex
        display={{ base: 'none', md: 'flex' }}
        w={{ base: '100%', md: '80%', lg: '1080px' }}
        h="700px"
        justify="space-between"
        pt="80px"
        mt="60px"
        position="relative"
        zIndex="10"
      >
        <VStack align="left" spacing="50px">
          <Image
            textAlign="left"
            w={{ base: '200px', md: '400px' }}
            src={logotype}
          />
          <Box textAlign="left">
            <Heading
              as="h2"
              size={{ base: 'sm', md: 'lg' }}
              letterSpacing="2px"
              color="white"
              py="10px"
            >
              採集時光遺散在淡水的訊息
            </Heading>
            <Heading
              as="h2"
              size={{ base: 'sm', md: 'lg' }}
              letterSpacing="2px"
              color="white"
            >
              以「光」呈現淡水橫跨四百年的文化之美
            </Heading>
          </Box>
        </VStack>
        <Image w="264px" h="99px" src={time} />
      </Flex>
      <Box
        display={{ base: 'none', md: 'block' }}
        w="100%"
        h="65vh"
        position="absolute"
        bottom="0"
        bgImage={`url('${kvLong}')`}
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPosition="center top"
      ></Box>
    </Box>
  );
}

export default Hero;
