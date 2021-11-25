import { Flex, VStack, Box, Text } from '@chakra-ui/react';

function MainFooter() {
  return (
    <Flex
      bg="#353535"
      align="center"
      justify="center"
      w="100%"
      as="footer"
      direction="column"
    >
      <Flex
        w={{ base: '100%', sm: '100%', md: '960px', lg: '1080px', xl: '70%' }}
        wrap="wrap"
        px={{ base: '20px', md: '0' }}
        py="40px"
        color="white"
      >
        <Flex w={{ base: '100%', md: '33.33%' }} direction="column">
          <VStack spacing="20px" align="flex-start">
            <Box>
              <Text color="gray.300">｜主辦單位｜</Text>
              <Box pl="12px">
                <Text>新北市政府</Text>
              </Box>
            </Box>
            <Box>
              <Text color="gray.300">｜承辦單位｜</Text>
              <VStack pl="12px" spacing="4px" align="flex-start">
                <Text>新北市政府文化局</Text>
                <Text>新北市立淡水古蹟博物館</Text>
              </VStack>
            </Box>
          </VStack>
        </Flex>

        <Flex w={{ base: '100%', md: '33.33%' }} direction="column">
          <VStack spacing="20px" align="flex-start">
            <Box>
              <Text color="gray.300">｜協辦單位｜</Text>
              <VStack pl="12px" spacing="4px" align="flex-start">
                <Text>新北市政府教育局</Text>
                <Text>新北市政府教育局</Text>
                <Text>新北市政府高灘地工程管理處</Text>
                <Text>新北市圖書館</Text>
              </VStack>
            </Box>
          </VStack>
        </Flex>

        <Flex w={{ base: '100%', md: '33.33%' }} direction="column">
          <VStack spacing="20px" align="flex-start">
            <Box>
              <Text color="gray.300">｜特別感謝｜</Text>
              <VStack pl="12px" spacing="4px" align="flex-start">
                <Text>財團法人看見・齊柏林基金會</Text>
                <Text>淡水區各級學校</Text>
              </VStack>
            </Box>
          </VStack>
        </Flex>
      </Flex>
      <Text color="rgba(255,255,255,.5)">
        © 2021 Tamsui Historical Museum Taiwan All rights reserved.
      </Text>
    </Flex>
  );
}

export default MainFooter;
