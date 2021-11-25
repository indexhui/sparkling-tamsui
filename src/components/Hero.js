import { Flex, Box, VStack, Image, Heading } from '@chakra-ui/react';
import kv from '../assets/images/kv.svg';
import time from '../assets/images/time.svg';
import logotype from '../assets/images/logotype.svg';

function Hero() {
  return (
    <Box
      h="700px"
      bgGradient="linear(to-b, brand.500, brand.100)"
      position="relative"
      justify="center"
      align="center"
    >
      <Flex
        w={{ base: '100%', md: '80%', lg: '1080px' }}
        h="700px"
        justify="space-between"
        pt="80px"
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
        w="100%"
        h={{ base: '400px', md: '600px' }}
        position="absolute"
        bottom="0"
        bgImage={`url('${kv}')`}
        bgRepeat="no-repeat"
        bgSize="cover"
      ></Box>
    </Box>
  );
}

export default Hero;
