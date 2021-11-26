import {
  Flex,
  VStack,
  HStack,
  Image,
  Box,
  Divider,
  Avatar,
  Text,
  Heading,
  Grid,
  GridItem,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Link,
} from '@chakra-ui/react';

import { ExternalLinkIcon } from '@chakra-ui/icons';

import titleWave from '../assets/images/title_wave.svg';

import waveMap from '../assets/images/wave_map.svg';
import { Fade } from 'react-awesome-reveal';

import art01 from '../assets/images/art01.png';
import art02 from '../assets/images/art02.png';
import art03 from '../assets/images/art03.png';
import art04 from '../assets/images/art04.png';
import art05 from '../assets/images/art05.png';

import event01 from '../assets/images/event01.png';
import event02 from '../assets/images/event02.png';
import event03 from '../assets/images/event03.png';
import event04 from '../assets/images/event04.png';
import event05 from '../assets/images/event05.png';
import event06 from '../assets/images/event06.png';

const waveArt = [
  {
    id: 'art01',
    order: '01',
    name: '微浮 Wave',
    description:
      '作品試著以「光映淡水」的聲波作為符號來轉化，讓海川中的能量與訊息能穿透水岸的邊界，抵達岸上。象徵拍打著水岸的浪潮，像是淡水傳遞給我們的語音訊息，溫柔而細微，但迷人而堅定。',
    image: art01,
    artist: '林書瑜',
    team: '協同製作｜烏浪設計開發',
  },
  {
    id: 'art02',
    order: '02',
    name: '時光標記',
    description:
      '百年來，無數人在淡水河畔建構夢想的版圖，在這裡創造輝煌時刻。路面上，古蹟廊帶留下了時光的遺跡，而川流的淡水河從未停下來。作品像是標籤註記時光，定義2021年此時此刻的淡水與我們。',
    image: art02,
    artist: '梁賴昌',
  },
  {
    id: 'art03',
    order: '03',
    name: '觀/因',
    description:
      '百年來，無數人在淡水河畔建構夢想的版圖，在這裡創造輝煌時刻。路面上，古蹟廊帶留下了時光的遺跡，而川流的淡水河從未停下來。作品像是標籤註記時光，定義2021年此時此刻的淡水與我們。',
    image: art03,
    artist: '梁賴昌',
  },
  {
    id: 'art04',
    order: '04',
    name: '聚',
    description:
      '以時間情書為概念創作名為「聚」的作品。作品將似魚擬船以擁抱的形式相依偎，象徵擁抱這座港口，在海洋水波、聲音餘波纏繞，共振在琴弦上訴說相聚，相映穿越千百年的兩段基因，平凡卻美麗。 ，而川流的淡水河從未停下來。作品像是標籤註記時光，定義2021年此時此刻的淡水與我們。',
    image: art04,
    artist: '王俊淵',
  },
  {
    id: 'art05',
    order: '05',
    name: '山河水',
    description:
      '以河川的線條為發想，作品透過鏡面材質反射天空，在夜裡透過光影洗晾地面，透過日夜不同的觀賞體驗，呈現淡水多元的樣貌，也試圖勾勒淡水川流不息的夢。',
    image: art05,
    artist: '丁建中',
  },
];

function Wave() {
  return (
    <Flex justify="center">
      <Flex
        w={{ base: '100%', sm: '100%', md: '960px', '2xl': '70%' }}
        px={{ base: '20px', md: '0' }}
        py="40px"
      >
        <VStack w="100%" spacing="32px">
          <Flex textAlign="center" direction="column" align="center">
            <Image w="120px" src={titleWave} alt="時光循跡" />
            <Text color="gray.600"> 淡水碼頭系列活動 </Text>
          </Flex>
          <Flex justify="flex-start" w="100%">
            <Heading size="md" textAlign="left" letterSpacing="4px">
              水岸光影廊道
            </Heading>
          </Flex>
          <Flex w="100%" wrap="wrap">
            <Flex w={{ base: '100%', md: '50%' }} wrap="wrap">
              {waveArt.map(art => (
                <HStack w="50%" key={art.name}>
                  <Flex
                    bg="#F8B62B"
                    w="32px"
                    h="32px"
                    color="white"
                    rounded="full"
                    align="center"
                    justify="center"
                  >
                    {art.order}
                  </Flex>
                  <Text color="black">{art.name}</Text>
                </HStack>
              ))}
            </Flex>
            <Flex w={{ base: '100%', md: '50%' }} justify="flex-end">
              <Image
                w={{ base: '100%', md: '400px' }}
                src={waveMap}
                alt="波光水岸 地圖"
              />
            </Flex>
          </Flex>
          <WaveArt />
          <Divider borderColor="gray.400" />
          <WaveWEvents />
        </VStack>
      </Flex>
    </Flex>
  );
}

export default Wave;

const WaveArt = () => {
  return (
    <VStack w="100%" spacing="24px">
      {waveArt.map(art => (
        <Flex
          key={art.id}
          justify="center"
          align="center"
          w="100%"
          wrap="wrap"
          py="20px"
        >
          <Flex w={{ base: '100%', md: '50%' }}>
            <Fade>
              <Image
                bg="white"
                src={art.image}
                w={{ base: '100%', md: '90%' }}
                objectFit="cover"
                borderRadius="2px"
                mr={{ base: '0', md: '24px' }}
                mb={{ base: '24px', md: '0' }}
              />
            </Fade>
          </Flex>
          <VStack w={{ base: '100%', md: '50%' }} align="left">
            <HStack>
              <Fade>
                <Flex
                  bg="#F8B62B"
                  w="32px"
                  h="32px"
                  color="white"
                  rounded="full"
                  align="center"
                  justify="center"
                >
                  {art.order}
                </Flex>
              </Fade>
              <Fade>
                <Text color="black">{art.name}</Text>
              </Fade>
            </HStack>
            <Fade>
              <Text color="gray.700">{art.description}</Text>
            </Fade>
            <HStack>
              <Avatar
                size="sm"
                name="林書瑜"
                src="https://bit.ly/dan-abramov"
              />
              <Text>{art.artist}</Text>
            </HStack>
            <Text>{art.team}</Text>
          </VStack>
        </Flex>
      ))}
    </VStack>
  );
};

const WaveWEvents = () => {
  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
      gap={6}
    >
      <WaveEvent01 />
      <WaveEvent02 />
      <WaveEvent03 />
    </Grid>
  );
};

const WaveEvent01 = () => {
  return (
    <GridItem
      w="100%"
      direction="column"
      h="100%"
      border="1px solid  #f0f0f0"
      borderBottomLeftRadius="6px"
      borderBottomRightRadius="6px"
    >
      <Image src={event01} />
      <Box
        border="1px solid #f0f0f0"
        p="12px"
        borderBottomLeftRadius="6px"
        borderBottomRightRadius="6px"
      >
        <Text fontSize={{ base: 'lg', md: 'xl' }} my="4px" px="6px">
          波響— AudioVisual數位音像表演
        </Text>
        <VStack
          pt="2px"
          align="flex-start"
          spacing="0"
          fontSize="sm"
          color="#4F4F4F"
        >
          <Text color="#656565">12/4(六) 17:30-20:00</Text>
          <Text>12/5(日) 17:00-19:00</Text>
          <Text textAlign="right">淡水海關碼頭 C棟倉庫</Text>
        </VStack>

        <Flex w="100%" mt="12px">
          <WaveEvent01Schedule />
          <WaveEvent01Info />
        </Flex>
      </Box>
    </GridItem>
  );
};

const WaveEvent01Schedule = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        size="sm"
        w="40%"
        bg="white"
        border="1px solid #4f4f4f"
        borderRadius="0"
        onClick={onOpen}
      >
        活動簡介
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} bg="black" color="white">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg="brand.500" color="white">
            活動簡介
          </ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody bg="brand.500" color="white">
            古蹟DVJ
            Show動感節奏表演，創造出屬於淡水特色的美好視覺與聽覺藝術饗宴，藉此帶給民眾震撼炫目的全新體驗，以及認識不同於以往的淡水古蹟形象。
          </ModalBody>

          <ModalFooter bg="brand.500" color="white">
            <Button
              colorScheme="white"
              mr={3}
              onClick={onClose}
              borderRadius="0"
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

const WaveEvent01Info = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        size="sm"
        flex="1"
        bg="#495460"
        color="white"
        borderRadius="0"
        colorScheme="black"
        onClick={onOpen}
      >
        詳細資訊和報名
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} bg="black" color="white">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg="brand.500" color="white">
            活動簡介
          </ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody bg="brand.500" color="white">
            <Text>12/4(六)17:30-20:00</Text>
            <Text>17:30-18:30 黃偉軒✕晟SHENG</Text>
            <Text>18:30-19:00 洪梓倪✕___cssss___</Text>
            <Text>19:00-19:30 都普勒浪潮✕林立翔</Text>
            <Text>19:30-20:00 HH</Text>
            <Text>12/4(六)17:30-20:00</Text>
            <Divider my="5px" />
            <Text>12/5(日)17:00-19:00</Text>
            <Text>18:00-18:30 黃偉</Text>
            <Text>18:30-19:00 王連晟</Text>
            <Text>19:00-19:30 黃偉軒✕晟SHENG</Text>
            <Text>19:30-20:00 都普勒浪潮✕林立翔 0</Text>
            <Divider my="5px" />
            <Text>
              「波響—AudioVisual數位音像表演」需事先報名，詳細報名資訊及當日線上直播請參考
            </Text>
            <Link
              color="cyan.600"
              href="https://www.facebook.com/events/238972408749093/"
              target="_blank"
            >
              新北市立淡水古蹟博物館官網 <ExternalLinkIcon mx="2px" />
            </Link>
          </ModalBody>

          <ModalFooter bg="brand.500" color="white">
            <Button
              colorScheme="white"
              mr={3}
              onClick={onClose}
              borderRadius="0"
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

const WaveEvent02 = () => {
  return (
    <Flex
      w="100%"
      direction="column"
      border="1px solid  #f0f0f0"
      borderBottomLeftRadius="6px"
      borderBottomRightRadius="6px"
    >
      <Image src={event02} />
      <Flex flex="1" p="12px" direction="column" justify="space-between">
        <Text fontSize={{ base: 'lg', md: 'xl' }} my="4px" px="6px">
          淡水絕美之境—淡水山河古蹟沉浸式劇場
        </Text>
        <VStack
          pt="2px"
          pl="6px"
          align="flex-start"
          spacing="0"
          fontSize="sm"
          color="#4F4F4F"
        >
          <Text color="#656565">12/4(六) 10:00-19:00</Text>
          <Text>淡水海關碼頭 B棟倉庫</Text>
        </VStack>
        <Flex w="100%" mt="12px">
          <Button
            size="sm"
            w="40%"
            bg="white"
            border="1px solid #4f4f4f"
            borderRadius="0"
          >
            節目單
          </Button>
          <Button
            size="sm"
            flex="1"
            bg="#495460"
            color="white"
            borderRadius="0"
            colorScheme="black"
          >
            詳細資訊和報名
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

const WaveEvent03 = () => {
  return (
    <Flex
      w="100%"
      direction="column"
      border="1px solid  #f0f0f0"
      borderBottomLeftRadius="6px"
      borderBottomRightRadius="6px"
    >
      <Image src={event03} />
      <Flex flex="1" p="12px" direction="column" justify="space-between">
        <Text fontSize={{ base: 'lg', md: 'xl' }} my="4px" px="6px">
          夕陽黃金音樂市集
        </Text>
        <VStack
          pt="2px"
          pl="6px"
          align="flex-start"
          spacing="0"
          fontSize="sm"
          color="#4F4F4F"
        >
          <Text color="#656565">12/11(六) 14:00-20:00</Text>
          <Text>12/18(六) 14:00-20:00</Text>
          <Text>淡水海關碼頭</Text>
        </VStack>
        <Flex w="100%" mt="12px">
          <Button
            size="sm"
            w="40%"
            bg="white"
            border="1px solid #4f4f4f"
            borderRadius="0"
          >
            節目單
          </Button>
          <Button
            size="sm"
            flex="1"
            bg="#495460"
            color="white"
            borderRadius="0"
            colorScheme="black"
          >
            詳細資訊和報名
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
