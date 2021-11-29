import { Flex, Box, Grid, VStack, HStack, Image, Text } from '@chakra-ui/react';

import titleStore from '../assets/images/title_store.svg';

import building01 from '../assets/images/building01.jpg';
import building02 from '../assets/images/building02.jpg';
import building03 from '../assets/images/building03.jpg';
import building04 from '../assets/images/building04.jpg';
import building05 from '../assets/images/building05.jpg';
import building06 from '../assets/images/building06.jpg';
import building07 from '../assets/images/building07.jpg';
import building08 from '../assets/images/building08.jpg';
import building09 from '../assets/images/building09.jpg';

import store01 from '../assets/images/store01.jpg';
import store02 from '../assets/images/store02.jpg';
import store03 from '../assets/images/store03.jpg';
import store04 from '../assets/images/store04.jpg';
import store05 from '../assets/images/store05.jpg';
import store06 from '../assets/images/store06.jpg';
import store07 from '../assets/images/store07.jpg';
import store08 from '../assets/images/store08.jpg';
import store09 from '../assets/images/store09.jpg';
import store10 from '../assets/images/store10.jpg';
import store11 from '../assets/images/store11.jpg';

const buildingData = [
  {
    title: '淡水紅毛城',
    image: building01,
  },
  {
    title: '小白宮',
    image: building02,
  },
  {
    title: '滬尾礮臺',
    image: building03,
  },
  {
    title: '淡水海關碼頭',
    image: building04,
  },
  {
    title: '淡水日本警官宿舍',
    image: building05,
  },
  {
    title: '淡水街長多田榮吉故居',
    image: building06,
  },
  {
    title: '淡水木下靜涯舊居',
    image: building07,
  },
  {
    title: '得忌利士洋行',
    image: building08,
  },
  {
    title: '滬水一方藝文空間',
    image: building09,
  },
];

const shopData = [
  {
    id: 'store01',
    title: '滬尾藝文休閒園區',
    plans: ['滬尾之星：飲品9折', '河畔餐廳：餐點9折'],
    image: store01,
  },
  {
    id: 'store02',
    title: '福容大飯店淡水漁人碼頭',
    plans: [
      '1.大廳咖啡廳享9折優惠(酒精飲料除外)',
      '2.親子館享門票$399一大一小場',
      '3.單人泡湯平假日同價NT$600元',
    ],
    image: store02,
  },
  {
    id: 'store03',
    title: 'Cumar',
    plans: ['莫代爾三角內褲9折'],
    image: store03,
  },
  {
    id: 'store04',
    title: 'Grace Watch',
    plans: ['部分商品打9折'],
    image: store04,
  },
  {
    id: 'store05',
    title: '啟鑫',
    plans: ['原石原礦錬墜 特價再9折'],
    image: store05,
  },
  {
    id: 'store06',
    title: 'BA SALIX 煽 in RC',
    plans: ['消費滿600打9折（需人均消費滿600）'],
    image: store06,
    dessert:
      '「烽火街」調酒（取自淡水舊漁港漁火點點的意向，以淡水港主要出口品項烏龍茶和我們自製的洛神蜜為主調）',
  },
  {
    id: 'store07',
    title: 'LA Villa',
    image: store07,
    coupon: '「到店消費可換起司條乙份',
  },
  {
    id: 'store08',
    title: '旅行邦尼旅店',
    plans: ['住宿可享9折優惠'],
    image: store08,
  },
  {
    id: 'store09',
    title: '浪花丸',
    plans: ['水鑽冰系列打9折'],
    image: store09,
  },
  {
    id: 'store10',
    title: '真食・手作',
    plans: ['餐點消費享9折優惠'],
    image: store10,
  },
  {
    id: 'store11',
    title: '撰食坊鐵板燒',
    dessert: '光映淡水限定套餐・海陸吃光光（菲力牛+香煎鮮蝦+飲品）',
    image: store11,
  },
];

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
            <Text w={{ base: '80%', md: '600px' }}>
              2021/12/4-2022/1/3
              於新北市立淡水古蹟博物館九個館舍持「光映淡水」手拿牌拍照，在臉書或IG打卡，即可於下列指定店家享有限量優惠。
            </Text>
          </Flex>
          <Text
            fontSize={{ base: 'xl', md: 'xl' }}
            borderBottom="2px solid black"
            w
            pt="40px"
          >
            新北市立淡水古蹟博物館
          </Text>
          <Grid
            py="10px"
            w="100%"
            templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(5, 1fr)' }}
            gap="8px"
          >
            <Buildings />
          </Grid>
          <Text
            fontSize={{ base: 'xl', md: 'xl' }}
            borderBottom="2px solid black"
            pt="40px"
            textAlign="center"
          >
            周邊夥伴
          </Text>
          <Grid
            py="10px"
            w="100%"
            templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
            gap={1}
          >
            <Shops />
          </Grid>
        </VStack>
      </Flex>
    </Flex>
  );
}

export default Store;

const Buildings = () => {
  return (
    <>
      {buildingData.map(building => (
        <Building key={building.image} {...building} />
      ))}
    </>
  );
};

const Building = props => {
  return (
    <VStack spacing="0" mx="12px" my="12px">
      <Image
        w="100%"
        h="150px"
        objectFit="cover"
        src={props.image}
        borderTopLeftRadius="32px"
        alt={props.title}
      />
      <Box h="28px" w="100%" bg="#FFF57F" textAlign="center">
        {props.title}
      </Box>
    </VStack>
  );
};

const Shops = () => {
  return (
    <>
      {shopData.map(shop => (
        <Shop key={shop.title} {...shop} />
      ))}
    </>
  );
};

const Shop = props => {
  return (
    <HStack
      mx="12px"
      my="12px"
      borderTopLeftRadius="32px"
      bg="brand.500"
      align="stretch"
    >
      <Image
        w={{ base: '100px', md: '300px' }}
        // h={{ base: '', md: '150px' }}
        minH={{ base: '', md: '300px' }}
        objectFit="cover"
        src={props.image}
        borderTopLeftRadius="32px"
        alt={props.title}
      />
      {/* <VStack spacing="0">
        <Image
          w={{ base: '100px', md: '160px' }}
          h={{ base: '', md: '150px' }}
          objectFit="cover"
          src={props.image}
          borderTopLeftRadius="32px"
          alt={props.title}
        /> */}
      {/* <Box h="20px" bg="brand.500" color="white" w="100%" textAlign="center">
          <Text fontSize="xs">{props.title}</Text>
        </Box> */}
      {/* </VStack> */}
      <VStack
        align="flex-start"
        justify="center"
        color="white"
        flex="1"
        p="10px"
      >
        <Box pb="10px" color="white">
          <Text
            fontSize={{ base: 'sm', md: '2xl' }}
            textAlign="left"
            fontWeight="bold"
          >
            {props.title}
          </Text>
        </Box>
        {props.plans && (
          <VStack align="flex-start" spacing="2px">
            <Text fontSize={{ base: 'sm', md: 'xl' }} color="gray.200">
              優惠方案
            </Text>
            {props.plans?.map(plan => (
              <Text fontSize={{ base: 'sm', md: 'xl' }} key={plan}>
                {plan}
              </Text>
            ))}
          </VStack>
        )}
        {props.dessert && (
          <VStack align="flex-start" spacing="2px">
            <Text fontSize="xs" color="gray.200">
              餐飲合作
            </Text>
            <Text fontSize="xs">{props.dessert}</Text>
          </VStack>
        )}
        {props.coupon && (
          <VStack align="flex-start" spacing="2px">
            <Text fontSize="xs" color="gray.200">
              好康兌換
            </Text>
            <Text fontSize="xs">{props.coupon}</Text>
          </VStack>
        )}
      </VStack>
    </HStack>
  );
};
