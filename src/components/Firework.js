import {
  Flex,
  VStack,
  HStack,
  Button,
  Heading,
  Image,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Grid,
  Box,
  Link,
  Icon,
} from '@chakra-ui/react';

import { ExternalLinkIcon } from '@chakra-ui/icons';

import { MdPlace } from 'react-icons/md';

import titleFirework from '../assets/images/title_firework.svg';

import firework01 from '../assets/images/firework01.png';
import firework02 from '../assets/images/firework02.png';
import firework03 from '../assets/images/firework03.jpeg';

function Firework() {
  return (
    <Flex justify="center" bg="brand.500" pt="40px">
      <Flex
        w={{ base: '100%', sm: '100%', md: '960px', '2xl': '70%' }}
        px={{ base: '20px', md: '0' }}
        py="40px"
        justify="center"
      >
        <VStack>
          <Flex textAlign="center" direction="column" align="center">
            <Image w="120px" src={titleFirework} alt="時光循跡" />
            <Text color="white" py="12px">
              淡水聲光夜
            </Text>
          </Flex>
          <Grid
            templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
            gap={6}
          >
            <Fire01 />
            <Fire02 />
            <Fire03 />
          </Grid>
        </VStack>
      </Flex>
    </Flex>
  );
}

export default Firework;

const Fire01 = () => {
  return (
    <Flex
      w="100%"
      direction="column"
      h="100%"
      border="1px solid white"
      borderBottomLeftRadius="6px"
      borderBottomRightRadius="6px"
      color="white"
    >
      <Image src={firework01} />
      <Flex flex="1" p="12px" direction="column" justify="space-between">
        <Text fontSize={{ base: 'lg', md: 'xl' }} my="4px" px="0px">
          「光耀新北-1314就愛你」跨河煙火秀
        </Text>
        <VStack
          pt="2px"
          align="flex-start"
          spacing="0"
          fontSize="sm"
          color="#4F4F4F"
        >
          <Text color="white">12/31(五)20:22</Text>
          <HStack align="center" spacing="2px" color="white">
            <Icon as={MdPlace} />
            <Text>淡水漁人碼頭</Text>
          </HStack>
        </VStack>

        <Flex w="100%" mt="12px">
          <Fire01Info />
          <Fire01Apply />
        </Flex>
      </Flex>
    </Flex>
  );
};

const Fire01Info = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        colorScheme="white"
        variant="outline"
        border="1px solid #4f4f4f"
        w="100%"
        borderRadius="0"
        onClick={onOpen}
      >
        簡介
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="brand.500" color="white">
          <ModalHeader>簡介</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              「光耀新北-1314就愛你」跨河煙火秀，今年位於淡江大橋施工構台及便道上，12月31日晚間8點22分將施放煙火13分14秒，並將表演細分為9個節目段，預計施放超過1萬發煙火彈。
            </Text>
            <Link
              color="cyan.300"
              href="https://www.facebook.com/tamsuihistoricalmuseum/posts/5351616128187784?__cft__[0]=AZX2ysfTPDBZfIihYr8XqeYAbTCRaZYRnGFrA6ZRN-R0qhDBnOwq3mWd5z1Pv0h3McirB0QuXpVaPSq0G4b3mLIy1CXKFDtHVLaDTJp50zgc8w2tiqvuHZk1D5O6IIyfIYxW42woJ5Owmwh2fQrl4QR8c6HELNNabWO0H4RwW2IQ5iVVyXtdMpL5VcxxPirNTws&__tn__=%2CO%2CP-R

"
              target="_blank"
            >
              模擬動畫影片
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="white" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

const Fire01Apply = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        w="100%"
        colorScheme="black"
        borderRadius="0"
        onClick={onOpen}
        bg="white"
        color="brand.500"
        border="1px solid white"
      >
        報名資訊
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="brand.500" color="white">
          <ModalHeader>報名資訊</ModalHeader>
          <ModalCloseButton />
          <ModalBody>場地為開放空間，自由參觀</ModalBody>

          <ModalFooter>
            <Button colorScheme="white" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

const Fire02 = () => {
  return (
    <Flex
      w="100%"
      direction="column"
      h="100%"
      border="1px solid white"
      borderBottomLeftRadius="6px"
      borderBottomRightRadius="6px"
      color="white"
    >
      <Image src={firework02} />
      <Flex
        flex="1"
        direction="column"
        justify="space-between"
        p="12px"
        borderBottomLeftRadius="6px"
        borderBottomRightRadius="6px"
      >
        <Text fontSize={{ base: 'lg', md: 'xl' }} my="4px" px="0px">
          紙風車劇場-雞城故事
        </Text>
        <VStack
          pt="2px"
          align="flex-start"
          spacing="0"
          fontSize="sm"
          color="#4F4F4F"
        >
          <Text color="white">12/31(五)18:30</Text>
          <HStack align="center" spacing="2px" color="white">
            <Icon as={MdPlace} />
            <Text>淡水漁人碼頭-觀海廣場</Text>
          </HStack>
        </VStack>

        <Flex w="100%" mt="12px">
          <Fire02Info />
          <Fire02Apply />
        </Flex>
      </Flex>
    </Flex>
  );
};

const Fire02Info = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        colorScheme="white"
        variant="outline"
        border="1px solid #4f4f4f"
        w="100%"
        borderRadius="0"
        onClick={onOpen}
      >
        簡介
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="brand.500" color="white">
          <ModalHeader>簡介</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            雞頭城裡總是互不相讓的「麥可雞」和「肯特雞」家族，為了爭奪早安雞的頭銜相互較勁，使出渾身解數展現自己。
            爭著要當早安雞的兩大家族新生代，來到了競賽的最終舞台-淡水漁人碼頭，即將在眾人注目之下，誕生新生代的早安雞！
            {/* <Text>
              光耀新北-1314就愛你」跨河煙火秀，今年位於淡江大橋施工構台及便道上，12月31日晚間8點22分將施放煙火13分14秒，並將表演細分為9個節目段，預計施放超過1萬發煙火彈。
            </Text>
            <Text>
              爭著要當早安雞的兩大家族新生代，來到了競賽的最終舞台-淡水漁人碼頭，即將在眾人注目之下，誕生新生代的早安雞!
            </Text> */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="white" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

const Fire02Apply = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        w="100%"
        colorScheme="black"
        borderRadius="0"
        onClick={onOpen}
        bg="white"
        color="brand.500"
        border="1px solid white"
      >
        報名資訊
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="brand.500" color="white">
          <ModalHeader>報名資訊</ModalHeader>
          <ModalCloseButton />
          <ModalBody>報名方式請洽新北市文化局</ModalBody>

          <ModalFooter>
            <Button colorScheme="white" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

const Fire03 = () => {
  return (
    <Flex
      w="100%"
      direction="column"
      h="100%"
      border="1px solid white"
      borderBottomLeftRadius="6px"
      borderBottomRightRadius="6px"
      color="white"
    >
      <Image src={firework03} />
      <Flex
        flex="1"
        direction="column"
        justify="space-between"
        p="12px"
        borderBottomLeftRadius="6px"
        borderBottomRightRadius="6px"
      >
        <Text fontSize={{ base: 'lg', md: 'xl' }} my="4px" px="0px">
          淡水聲光夜系列活動
        </Text>
        <VStack
          pt="2px"
          align="flex-start"
          spacing="0"
          fontSize="sm"
          color="#4F4F4F"
        >
          <Text color="white">12/31(五)</Text>
          <HStack align="center" spacing="2px" color="white">
            <Icon as={MdPlace} />
            <Text>滬水一方藝文空間</Text>
          </HStack>
        </VStack>

        <Flex w="100%" mt="12px">
          <Fire03Info />
          <Fire03Apply />
        </Flex>
      </Flex>
    </Flex>
  );
};

const Fire03Info = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        colorScheme="white"
        variant="outline"
        border="1px solid #4f4f4f"
        w="100%"
        borderRadius="0"
        onClick={onOpen}
      >
        簡介
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="brand.500" color="white">
          <ModalHeader>簡介</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              為迎接2022年的到來，本館全新打造滬水一方藝文空間，並配合「光映淡水」於110年12月31日規劃淡水聲光夜系列活動，「古蹟時光空拍影像展」、「古蹟輕旅行」、「古蹟親子活動」，讓民眾體驗多元又精彩豐富的淡水遊。
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="white" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

const Fire03Apply = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        w="100%"
        colorScheme="black"
        borderRadius="0"
        onClick={onOpen}
        bg="white"
        color="brand.500"
        border="1px solid white"
      >
        報名資訊
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent bg="brand.500" color="white">
          <ModalHeader>報名資訊</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize="lg">｜古蹟時光空拍影像展｜</Text>
            <Text>
              集結並首次同步公開本館近10年來珍貴空拍紀錄照片、影像，搭配淡水老照片及各種淡水圖像，呈現淡水的今昔美好時光。
            </Text>
            <Text fontSize="lg" mt="8px">
              ｜古蹟輕旅行｜
            </Text>
            <Text>110年12月31日（五）13:00至15:00</Text>
            <Text>111年1月1日（六）15:00至17:00</Text>
            <Text>111年1月2日（日）15:00時至17:00</Text>
            <Text fontSize="lg" mt="8px">
              路線：
            </Text>
            <Text>
              福佑宮（對面廣場集合）→重建街（戀愛巷）→日本警官宿舍→木下靜涯舊居→陳澄波戶外美術館→金色水岸榕堤段→小白宮→真理街→海關碼頭
            </Text>
            <Text fontSize="lg" mt="8px">
              參與人數：
            </Text>
            <Text>每場次活動名額上限25位，3場次共計75位。</Text>
            <Text fontSize="lg" mt="8px">
              報名方式：
            </Text>
            <Text>
              線上報名，每人酌收報名費200元（不限年齡，費用含小白宮免費入館）
            </Text>
            <Text fontSize="lg" mt="8px">
              ｜古蹟親子活動｜
            </Text>
            <Text>時間：110年12月31日（五）15:00-18:00</Text>
            <Text>地點：滬水一方藝文空間3樓</Text>
            <Text fontSize="lg" mt="8px">
              內容：
            </Text>
            <Text>15:00-18:00好物交換趣</Text>
            <Text>
              整理自己已不需要的二手玩具或是二手書籍，前來和其他小朋友互相交換，幫助玩具與二手書找到愛惜它的新主人。
            </Text>
            <Text>15:00-18:00益智積木好好玩</Text>
            <Text>
              開放小朋友最愛的積木體驗桌，一起動手玩積木，激發無限創造力。
            </Text>
            <Text>15:00-18:00滬尾守衛戰</Text>
            <Text>
              遊戲以虛擬互動方式，搭配實體道具的使用，增加孩童體驗時的回饋感受，創造出小朋友的參與感及榮譽感。
            </Text>
            <Text>15:00-16:00拆解玩具工作坊</Text>
            <Text>
              藉由拆解玩具訓練小朋友手眼協調能力外，還能讓小朋友瞭解損壞玩具被丟棄很可惜，可將拆解下來的玩具零件分類回收或留下可用的部分作為其他玩具的維修零件。
            </Text>
            <Text>16:00-17:00玩具小醫生</Text>
            <Text>
              玩具醫生來到淡水進行玩具檢修，免費為你心愛的玩具義診！每人限帶一個玩具，請挑選你最希望能修好並想繼續玩的玩具來找玩具醫生。
            </Text>
            <Text>17:00-18:00親子繪本共讀</Text>
            <Text>
              與知名繪本及說故事老師粘忘凡合作，導讀本館出版《忙個不停的紅城堡》或《海上只剩下船》，以生動活潑的方式帶動小朋友快樂學習的氛圍。
            </Text>
            <Text fontSize="lg" mt="8px">
              ｜情人VIP煙火夜｜
            </Text>
            <Text>時間：20:00～20:35</Text>
            <Text>地點：滬水一方3樓</Text>
            <Text>組數：10組情人，共20人，採抽獎方式</Text>
            {/* 報名方式請上
            <Link
              color="cyan.600"
              href="https://www.tshs.ntpc.gov.tw/xceventsnews/cont?xsmsid=0G252620780150430418&sid=0L322422145908368005
"
              target="_blank"
            >
              新北市立淡水古蹟博物館官網
              <ExternalLinkIcon mx="2px" />
            </Link> */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="white" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
