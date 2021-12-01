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

// import waveMap from '../assets/images/wave_map.svg';
import map from '../assets/images/map.png';

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
import event07 from '../assets/images/event07.png';
import event08 from '../assets/images/event08.png';
import event09 from '../assets/images/event09.jpg';

import artist01 from '../assets/images/artist01.png';
import artist02 from '../assets/images/artist02.png';
import artist03 from '../assets/images/artist03.png';
import artist04 from '../assets/images/artist04.png';
import artist05 from '../assets/images/artist05.png';

const waveArt = [
  {
    id: 'art01',
    order: '01',
    name: '微浮 Wave',
    description:
      '作品試著以「光映淡水」的聲波作為符號來轉化，讓海川中的能量與訊息能穿透水岸的邊界，抵達岸上。象徵拍打著水岸的浪潮，像是淡水傳遞給我們的語音訊息，溫柔而細微，但迷人而堅定。',
    image: art01,
    avatar: artist01,
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
    avatar: artist02,
    artist: '梁賴昌',
  },
  {
    id: 'art03',
    order: '03',
    name: '觀/因',
    description:
      '藝術團隊黃樑疑夢俱樂部以「觀/因」思考座落於淡水海關碼頭對岸的觀音山及風的連動。紀錄數百年來看見人潮川流，白日的辛勤以及夜的寧靜，是山的遙望與祝福。',
    image: art03,
    avatar: artist03,
    artist: '黃樑疑夢俱樂部',
  },
  {
    id: 'art04',
    order: '04',
    name: '聚',
    description:
      '以時間情書為概念創作名為「聚」的作品。作品將似魚擬船以擁抱的形式相依偎，象徵擁抱這座港口，在海洋水波、聲音餘波纏繞，共振在琴弦上訴說相聚，相映穿越千百年的兩段基因，平凡卻美麗。',
    image: art04,
    avatar: artist04,
    artist: '王俊淵',
  },
  {
    id: 'art05',
    order: '05',
    name: '山河水',
    description:
      '以河川的線條為發想，作品透過鏡面材質反射天空，在夜裡透過光影洗晾地面，透過日夜不同的觀賞體驗，呈現淡水多元的樣貌，也試圖勾勒淡水川流不息的夢。',
    image: art05,
    avatar: artist05,
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
        pt="72px"
      >
        <VStack w="100%" spacing="32px">
          <Flex textAlign="center" direction="column" align="center">
            <Image w="120px" src={titleWave} alt="時光循跡" />
            <Text color="gray.600"> 淡水海關碼頭系列活動</Text>
          </Flex>
          {/* <Flex justify="flex-start" w="100%">
            <Heading size="md" textAlign="left" letterSpacing="4px">
              水岸光影廊道
            </Heading>
          </Flex> */}
          <Flex w="100%" wrap="wrap" bg="brand.500" borderRadius="6px">
            <Flex w={{ base: '100%', md: '50%' }} direction="column" p="24px">
              <Heading
                size="md"
                color="white"
                textAlign="left"
                letterSpacing="4px"
              >
                水岸光影廊道
              </Heading>
              <Text color="white" my="16px">
                淡水為一個四百年的歷史場域，在山脈、河川、海洋的共同孕育下，匯聚豐沛的人文能量建構出一處文化古都。2021水岸光影廊道以「時光訊息」為題，與藝術家及藝術團隊共同探索遺落在淡水的時光訊息。
              </Text>
              <Box color="white">
                <Text>12/4 (六)-1/3(一)</Text>
                <Text>每日 17:00-22:00點燈</Text>
              </Box>
              <Flex wrap="wrap">
                {waveArt.map(art => (
                  <HStack w="50%" key={art.name} my="8px">
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
                    <Text color="white">{art.name}</Text>
                  </HStack>
                ))}
                <HStack w="50%" my="8px">
                  <Flex
                    bg="#8EC31F"
                    w="32px"
                    h="32px"
                    color="white"
                    rounded="full"
                    align="center"
                    justify="center"
                  >
                    06
                  </Flex>
                  <Text color="white">耶誕裝置</Text>
                </HStack>
              </Flex>
            </Flex>
            <Flex w={{ base: '100%', md: '50%' }} justify="flex-end">
              <Image
                w={{ base: '100%', md: '400px' }}
                src={map}
                objectFit="cover"
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
            <Image
              bg="white"
              src={art.image}
              w={{ base: '100%', md: '90%' }}
              objectFit="cover"
              borderRadius="2px"
              mr={{ base: '0', md: '24px' }}
              mb={{ base: '24px', md: '0' }}
            />
          </Flex>
          <VStack w={{ base: '100%', md: '50%' }} align="left">
            <HStack>
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
            <Text color="gray.700">{art.description}</Text>
            <HStack>
              <Avatar size="sm" name={art.artist} src={art.avatar} />
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
      <WaveEvent04 />
      <WaveEvent05 />
      <WaveEvent06 />
      <WaveEvent07 />
      <WaveEvent08 />
      <WaveEvent09 />
    </Grid>
  );
};

const WaveEvent01 = () => {
  return (
    <Flex
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
          <Text>12/4(六) 18:00-20:30</Text>
          <Text>12/5(日) 18:00-20:00</Text>
          <Text textAlign="right">淡水海關碼頭 C棟倉庫</Text>
        </VStack>

        <Flex w="100%" mt="12px">
          <WaveEvent01Schedule />
          <WaveEvent01Info />
        </Flex>
      </Box>
    </Flex>
  );
};

const WaveEvent01Schedule = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        size="sm"
        w="50%"
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
        詳細資訊
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} bg="black" color="white">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg="brand.500" color="white">
            詳細資訊
          </ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody bg="brand.500" color="white">
            <Text>12/4(六)18:00-20:30</Text>
            <Text>黃偉軒✕晟SHENG</Text>
            <Text>洪梓倪✕___cssss___</Text>
            <Text>都普勒浪潮✕林立翔</Text>
            <Text>HH</Text>
            <Divider my="5px" />
            <Text>12/5(日)18:00-20:00</Text>
            <Text>黃偉</Text>
            <Text>王連晟</Text>
            <Text>黃偉軒✕晟SHENG</Text>
            <Text>都普勒浪潮✕林立翔</Text>
            <Divider my="5px" />
            <Text>
              「波響—AudioVisual數位音像表演」需事先報名，詳細報名資訊及當日線上直播請參考
            </Text>
            <Link
              color="cyan.600"
              href="https://www.tshs.ntpc.gov.tw/xceventsnews/cont?xsmsid=0G252620780150430418&sid=0L321307409890938868"
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
          <Text color="#656565">12/4(六)起 10:00-19:00</Text>
          <Text>淡水海關碼頭 B棟倉庫</Text>
        </VStack>
        <Flex w="100%" mt="12px">
          <WaveEvent02Schedule />
          <WaveEvent02Info />
        </Flex>
      </Flex>
    </Flex>
  );
};

const WaveEvent02Schedule = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        size="sm"
        w="50%"
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
            以淡水重要古蹟景點與山川壯麗為主軸，以淡水的日出日落不同時間點的潮汐變化作為引言，透過多媒體互動遊戲、3D場景、投影沉浸劇場及情境休憩布置等，引導民眾認識淡水不同時段的美景。
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

const WaveEvent02Info = () => {
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
        詳細資訊
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} bg="black" color="white">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg="brand.500" color="white">
            詳細資訊
          </ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody bg="brand.500" color="white">
            <Text>12/4(六) 10:00-19:00</Text>
            <Text>
              「淡水絕美之境—淡水山河古蹟沉浸式劇場」需現場領號碼牌，每30分鐘1場次，9:30現場發放上午場次號碼牌、14:00發放下午場次號碼牌。
            </Text>
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
          <WaveEvent03Schedule />
          <WaveEvent03Info />
        </Flex>
      </Flex>
    </Flex>
  );
};

const WaveEvent03Schedule = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        size="sm"
        w="50%"
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
            夕陽餘暉下集合文青店家，共同推出手作、好禮市集，聆聽在地學校學生、音樂團體表演，點綴海關浪漫氛圍。
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

const WaveEvent03Info = () => {
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
        詳細資訊
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} bg="black" color="white">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg="brand.500" color="white">
            詳細資訊
          </ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody bg="brand.500" color="white">
            <Text>12/11(六)</Text>
            <Text>14:00-20:00 市集時間</Text>
            <Text>｜舞台演出｜ </Text>
            <Text>14:30-17:00 淡水區學校聯合音樂會-管樂總動員8</Text>
            <Text>
              演出學校：天生國小管樂團、新興國小管樂團、關渡國小管樂團、淡水國小管樂團、正德國中管樂團
            </Text>
            <Text>17:30-18:15 福容大飯店漁人碼頭-Nite Birds</Text>
            <Divider my="5px" />
            <Text>12/18(六)</Text>
            <Text>14:00-20:00 市集時間</Text>
            <Text>｜舞台演出｜</Text>
            <Text>14:30-15:15 中華民國新弦愛樂協會 </Text>
            <Text>17:00-18:00 泥灘地浪人</Text>
            <Text>18:30-19:30 十九兩樂團</Text>
            <Divider my="5px" />
            <Text>
              「夕陽黃金音樂市集」活動場地為戶外空間，無設席，歡迎自由參加。
            </Text>
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

const WaveEvent04 = () => {
  return (
    <Flex
      w="100%"
      direction="column"
      border="1px solid  #f0f0f0"
      borderBottomLeftRadius="6px"
      borderBottomRightRadius="6px"
    >
      <Image src={event04} />
      <Flex flex="1" p="12px" direction="column" justify="space-between">
        <Text fontSize={{ base: 'lg', md: 'xl' }} my="4px" px="6px">
          愛在淡水・聖誕點燈
        </Text>
        <VStack
          pt="2px"
          pl="6px"
          align="flex-start"
          spacing="0"
          fontSize="sm"
          color="#4F4F4F"
        >
          <Text>2021/12/11(六)-2022/02/16(三) 17:00-23:00</Text>
          <Text>淡水老街廣場、馬偕銅像三角公園</Text>
        </VStack>
        <Flex w="100%" mt="12px">
          <WaveEvent04Schedule />
          <WaveEvent04Info />
        </Flex>
      </Flex>
    </Flex>
  );
};

const WaveEvent04Schedule = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        size="sm"
        w="50%"
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
            隨著聖誕節的到來，淡水區公所在「淡水老街廣場」設置了超美燈飾，讓大家可以拍照打卡。白天可以到淡水走走，欣賞美景、品嚐在地美食，晚上接著欣賞美麗的聖誕燈飾，感受淡水聖誕小鎮過節的氛圍。
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

const WaveEvent04Info = () => {
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
        詳細資訊
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} bg="black" color="white">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg="brand.500" color="white">
            詳細資訊
          </ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody bg="brand.500" color="white">
            <Text>2021/12/11(六)-2022/02/16(三) 17:00-23:00</Text>
            <Divider my="5px" />
            <Text>活動詳情請上</Text>
            <Link
              color="cyan.600"
              href="https://www.facebook.com/%E6%B7%A1%E6%B0%B4%E5%8D%80%E5%85%AC%E6%89%80%E9%87%91%E8%89%B2%E6%B7%A1%E6%B0%B4-614634901969917/"
              target="_blank"
            >
              淡水區公所粉絲專頁
              <ExternalLinkIcon mx="2px" />
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

const WaveEvent05 = () => {
  return (
    <Flex
      w="100%"
      direction="column"
      border="1px solid  #f0f0f0"
      borderBottomLeftRadius="6px"
      borderBottomRightRadius="6px"
    >
      <Image src={event05} />
      <Flex flex="1" p="12px" direction="column" justify="space-between">
        <Text fontSize={{ base: 'lg', md: 'xl' }} my="4px" px="6px">
          光映淡水抽獎活動
        </Text>
        <VStack
          pt="2px"
          pl="6px"
          align="flex-start"
          spacing="0"
          fontSize="sm"
          color="#4F4F4F"
        >
          <Text>12/4-1/3 線上報名</Text>
        </VStack>
        <Flex w="100%" mt="12px">
          <WaveEvent05Schedule />
          <WaveEvent05Info />
        </Flex>
      </Flex>
    </Flex>
  );
};

const WaveEvent05Schedule = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        size="sm"
        w="50%"
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
            <Text>響應「光映淡水抽獎活動」請至</Text>
            <Link
              color="cyan.600"
              href="https://www.tshs.ntpc.gov.tw"
              target="_blank"
            >
              新北市立淡水古蹟博物館官網
              <ExternalLinkIcon mx="2px" />
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

const WaveEvent05Info = () => {
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
        詳細資訊
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} bg="black" color="white">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg="brand.500" color="white">
            詳細資訊
          </ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody bg="brand.500" color="white">
            <Text>2021/12/11(六)-2022/02/16(三) 17:00-23:00</Text>
            <Divider my="5px" />
            <Text>參加方式請上</Text>
            <Link
              color="cyan.600"
              href="https://www.tshs.ntpc.gov.tw"
              target="_blank"
            >
              新北市立淡水古蹟博物館官網
              <ExternalLinkIcon mx="2px" />
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

const WaveEvent06 = () => {
  return (
    <Flex
      w="100%"
      direction="column"
      border="1px solid  #f0f0f0"
      borderBottomLeftRadius="6px"
      borderBottomRightRadius="6px"
    >
      <Image src={event06} />
      <Flex flex="1" p="12px" direction="column" justify="space-between">
        <Text fontSize={{ base: 'lg', md: 'xl' }} my="4px" px="6px">
          光劇場、影劇場
        </Text>
        <VStack
          pt="2px"
          pl="6px"
          align="flex-start"
          spacing="0"
          fontSize="sm"
          color="#4F4F4F"
        >
          <Text>12/12(日) 光劇場</Text>
          <Text>12/19(日) 影劇場</Text>
          <Text>淡水海關碼頭 C棟倉庫</Text>
        </VStack>
        <Flex w="100%" mt="12px">
          <WaveEvent06Schedule />
          <WaveEvent06Info />
        </Flex>
      </Flex>
    </Flex>
  );
};

const WaveEvent06Schedule = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        size="sm"
        w="50%"
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
            邀請國內知名表演團隊身聲劇場與頑書趣工作室進行展演。透過光影劇場活動，結合多元表演形式，呈現簡單又深刻的生命議題，促進親子的思考與討論，並且達到藝術扎根之目的。
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

const WaveEvent06Info = () => {
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
        詳細資訊
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} bg="black" color="white">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg="brand.500" color="white">
            詳細資訊
          </ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody bg="brand.500" color="white">
            <Text>12/12(日)</Text>
            <HStack>
              <Text w="92px">13:00-14:00</Text>
              <Text>光劇場 身聲劇場</Text>
            </HStack>
            <HStack>
              <Text w="92px">19:00-20:00</Text>
              <Text>光劇場 頑書趣工作室</Text>
            </HStack>
            <Divider my="5px" />
            <Text>12/19(日) 13:00-15:00 影劇場 每場次20-30分鐘</Text>
            <Text>13:00 樹人家商</Text>
            <Text>14:00 汐止東山國小</Text>
            <Text>14:30 影子傳奇劇團 </Text>
            <Divider my="5px" />
            <Text>
              「光劇場」、「影劇場」需現場排隊入場，節目開場前10分鐘開放入場。
            </Text>
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

const WaveEvent07 = () => {
  return (
    <Flex
      w="100%"
      direction="column"
      border="1px solid  #f0f0f0"
      borderBottomLeftRadius="6px"
      borderBottomRightRadius="6px"
    >
      <Image src={event07} />
      <Flex flex="1" p="12px" direction="column" justify="space-between">
        <Text fontSize={{ base: 'lg', md: 'xl' }} my="4px" px="6px">
          月光電影
        </Text>
        <VStack
          pt="2px"
          pl="6px"
          align="flex-start"
          spacing="0"
          fontSize="sm"
          color="#4F4F4F"
        >
          <Text>12/12(日) 18:30 52赫茲我愛你</Text>
          <Text>12/19(日) 18:30 冰雪奇緣</Text>
          <Text>淡水海關碼頭 棟倉庫</Text>
        </VStack>
        <Flex w="100%" mt="12px">
          <WaveEvent07Schedule />
          <WaveEvent07Info />
        </Flex>
      </Flex>
    </Flex>
  );
};

const WaveEvent07Schedule = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        size="sm"
        w="50%"
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
            月光下在淡水海關碼頭播放電影，讓民眾沉浸在暖暖的電影時光中。
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

const WaveEvent07Info = () => {
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
        詳細資訊
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} bg="black" color="white">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg="brand.500" color="white">
            詳細資訊
          </ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody bg="brand.500" color="white">
            <Text>12/12(日) 18:30 52赫茲我愛你</Text>
            <Text>12/19(日) 18:30 冰雪奇緣</Text>
            <Divider my="5px" />
            <Text>「月光電影」需現場排隊入場， 節目開場前10分鐘開放入場。</Text>
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

const WaveEvent08 = () => {
  return (
    <Flex
      w="100%"
      direction="column"
      border="1px solid  #f0f0f0"
      borderBottomLeftRadius="6px"
      borderBottomRightRadius="6px"
    >
      <Image src={event08} />
      <Flex flex="1" p="12px" direction="column" justify="space-between">
        <Text fontSize={{ base: 'lg', md: 'xl' }} my="4px" px="6px">
          耶誕光影嬉遊
        </Text>
        <VStack
          pt="2px"
          pl="6px"
          align="flex-start"
          spacing="0"
          fontSize="sm"
          color="#4F4F4F"
        >
          <Text>12/11(六)-1/3(一) 每日17:00-22:00點燈</Text>
          <Text>淡水海關碼頭 A棟</Text>
        </VStack>
        <Flex w="100%" mt="12px">
          <WaveEvent08Schedule />
          <WaveEvent08Info />
        </Flex>
      </Flex>
    </Flex>
  );
};

const WaveEvent08Schedule = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        size="sm"
        w="50%"
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
            號外號外！耶誕老人卡在淡水海關碼頭啦！傳遞心意繁忙的時節，耶誕老人竟然卡住了，請大家來淡水海關碼頭推他一把吧！平安夜還有限定任務唷！
            耶誕裝置於2021/12/11-2022/1/3 每日17:00-22:00點燈。
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

const WaveEvent08Info = () => {
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
        詳細資訊
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} bg="black" color="white">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg="brand.500" color="white">
            詳細資訊
          </ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody bg="brand.500" color="white">
            <Text>
              12/24(五) 15:00-20:00 平安夜活動—尋找淡水海關碼頭裡的樹頂星
            </Text>
            <Divider my="5px" />
            <Text>
              「平安夜活動—尋找淡水海關碼頭裡的樹頂星」需現場報名，限量250名。
            </Text>
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

const WaveEvent09 = () => {
  return (
    <Flex
      w="100%"
      direction="column"
      border="1px solid  #f0f0f0"
      borderBottomLeftRadius="6px"
      borderBottomRightRadius="6px"
    >
      <Image src={event09} />
      <Flex flex="1" p="12px" direction="column" justify="space-between">
        <Text fontSize={{ base: 'lg', md: 'xl' }} my="4px" px="6px">
          耶誕親子音樂會
        </Text>
        <VStack
          pt="2px"
          pl="6px"
          align="flex-start"
          spacing="0"
          fontSize="sm"
          color="#4F4F4F"
        >
          <Text>12/25(六)14:00-16:00</Text>
          <Text>淡水海關碼頭</Text>
        </VStack>
        <Flex w="100%" mt="12px">
          <WaveEvent09Schedule />
          <WaveEvent09Info />
        </Flex>
      </Flex>
    </Flex>
  );
};

const WaveEvent09Schedule = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        size="sm"
        w="50%"
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
            YOYO親子台的哥哥姊姊，陪親子一同度過美好又溫暖的耶誕節。
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

const WaveEvent09Info = () => {
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
        詳細資訊
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} bg="black" color="white">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg="brand.500" color="white">
            詳細資訊
          </ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody bg="brand.500" color="white">
            <Text>14:00-14:30 TB All Star－現代科技</Text>
            <Text>14:30-15:30 YOYO家族－親子唱跳秀</Text>
            <Text>15:30-16:00 瓶子先生魔術劇團－繪本變故事</Text>
            <Divider my="5px" />
            <Text>
              「耶誕親子音樂會」活動場地為戶外空間，無設席，歡迎自由參加。
            </Text>
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
