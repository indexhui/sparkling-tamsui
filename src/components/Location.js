import { Flex, VStack, Box, Text, Heading } from '@chakra-ui/react';

function Location() {
  return (
    <Flex bg="brand.500" align="center" justify="center">
      <Flex
        w={{ base: '100%', sm: '100%', md: '960px', lg: '1080px', xl: '70%' }}
        wrap="wrap"
        px={{ base: '20px', md: '0' }}
        py="40px"
        color="white"
      >
        <Flex
          w={{ base: '100%', md: '50%' }}
          direction="column"
          align="flex-start"
          mb={{ base: '20px', md: '0' }}
        >
          <Heading size="md" mb="10px">
            新北市立淡水古蹟博物館 淡水海關碼頭
          </Heading>
          <VStack spacing="4px" align="flex-start" fontSize="sm">
            <Text>新北市淡水區中正路259號</Text>
            <Text>開放時間：週一至週日</Text>
            <Text>室內 | 9:30—19:30 戶外 | 全天開放，17:00-22:00點燈</Text>
          </VStack>
        </Flex>
        <Flex
          w={{ base: '100%', md: '50%' }}
          direction="column"
          align="flex-start"
        >
          <Text size="md" mb="10px">
            交通資訊
          </Text>
          <VStack spacing="20px" align="flex-start" fontSize="sm">
            <VStack align="flex-start">
              <Box w="100px" rounded="full" border="1px solid white">
                <Text fontSize="sm" color="white" textAlign="center">
                  捷運
                </Text>
              </Box>
              <Text>
                捷運淡水站下車，轉搭紅26、836、870公車至「紅毛城（真理大學）」，跨越馬路後往河堤岸走約30公尺，即可到達。
              </Text>
            </VStack>
            <VStack align="flex-start">
              <Box w="100px" rounded="full" border="1px solid white">
                <Text fontSize="sm" color="white" textAlign="center">
                  開車/機車
                </Text>
              </Box>
              <Text>可將車停放於紅毛城收費停車場。</Text>
            </VStack>
            <VStack align="flex-start">
              <Box w="100px" rounded="full" border="1px solid white">
                <Text fontSize="sm" color="white" textAlign="center">
                  自行車
                </Text>
              </Box>
              <Text>
                沿金色水岸自行車道騎乘，可將自行車停放於河堤岸停車區或園區自行車停車區，步行進入參觀。
              </Text>
            </VStack>
          </VStack>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Location;
