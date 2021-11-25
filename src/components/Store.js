import { Flex, VStack, Image, Text } from '@chakra-ui/react';

import titleStore from '../assets/images/title_store.svg';

function Store() {
  return (
    <Flex justify="center" bg="white">
      <Flex
        w={{ base: '100%', sm: '100%', md: '960px', '2xl': '70%' }}
        px={{ base: '20px', md: '0' }}
        py="40px"
        justify="center"
      >
        <VStack>
          <Flex textAlign="center" direction="column" align="center">
            <Image w="120px" src={titleStore} alt="合作店家" />
            <Text color="white"> 活動說明 </Text>
          </Flex>
        </VStack>
      </Flex>
    </Flex>
  );
}

export default Store;
