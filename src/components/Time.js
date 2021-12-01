import { Flex, VStack, Image, Heading, Text } from '@chakra-ui/react';

import titleTime from '../assets/images/title_time.svg';

import decorateTopRight from '../assets/images/decorate_top_right.png';
import decorateBottomLeft from '../assets/images/decorate_bottom_left.png';
import decorateMid from '../assets/images/decorate_mid.png';

import time01 from '../assets/images/time01.png';
import time02 from '../assets/images/time02.jpg';
import time03 from '../assets/images/time03.png';
import time04 from '../assets/images/time04.png';

const timeWorks = [
  {
    title: '映河',
    description:
      '《映河》特展透過齊柏林的鏡頭，以鳥的視野與雲的高度，看見臺灣河流原初的美麗，映照環境與城市交融後的變化，更映現人們對自然的初心。',
    image: time01,
    place: '齊柏林空間',
    date: '10/9(六)開展',
    id: 'time01',
    imageProvided: '影像提供｜看見・齊柏林基金會',
  },
  {
    title: '探索淡水密碼─淡水文史特展',
    description:
      '以數字解密的概念出發，串連所有關於淡水歷史、商業、經濟的神秘數字。每位走進展場的民眾，都是淡水地區的探員，在這個神秘的空間裡，找尋每個數字背後的意義。',
    image: time02,
    place: '得忌利士洋行',
    date: '11/10(三)開展',
    id: 'time02',
  },
  {
    title: '淡水木下靜涯舊居',
    description:
      '擅長膠彩畫的木下靜涯，曾擔任多次展覽審查委員，更熱心提攜後進，影響日本時期臺灣膠彩畫的發展。請您與我們一起走入歷史，放鬆沉思，共同體會木下優游藝術的生命片刻。',
    image: time03,
    place: '淡水木下靜涯舊居',
    date: '11/26(五)開展',
    id: 'time03',
  },
  {
    title: '巷弄藝起來─唐美雲歌仔戲團《佘太君掛帥》',
    description:
      '成立於1998年，立團宗旨為「承傳統、創新局」，持續延攬歌仔戲優秀演員並提拔新秀、扶植創作人才，製作精緻好戲，希望改變大眾對歌仔戲的印象，使歌仔戲生機盎然。',
    image: time04,
    place: '淡水金色水岸',
    date: '11/27(六)',
    id: 'time04',
  },
];

function Time() {
  return (
    <Flex
      bg="brand.500"
      color="white"
      justify="center"
      position="relative"
      pt="32px"
    >
      <Image
        src={decorateTopRight}
        w="300px"
        position="absolute"
        top="0"
        right="0"
      />
      <Image
        src={decorateMid}
        w="100px"
        position="absolute"
        bottom="50%"
        left="-50px"
      />
      <Image
        src={decorateBottomLeft}
        w="300px"
        position="absolute"
        bottom="0"
        left="0"
      />
      <Flex
        w={{ base: '100%', sm: '100%', md: '960px', lg: '960px' }}
        px={{ base: '20px', md: '0' }}
        py="40px"
      >
        <VStack w="100%" spacing="32px">
          <Flex textAlign="center" direction="column" align="center">
            <Image w="120px" src={titleTime} alt="時光循跡" />
            <Text> 藝文展演 </Text>
          </Flex>
          {timeWorks.map(work => (
            <Flex key={work.id} direction={{ base: 'column', md: 'row' }}>
              <Image
                bg="white"
                src={work.image}
                w={{ base: '100%', md: '300px' }}
                objectFit="cover"
                borderRadius="2px"
                mr={{ base: '0', md: '24px' }}
                mb={{ base: '24px', md: '0' }}
              />
              <VStack align="left">
                <Heading fontSize="xl">{work.title}</Heading>
                <Text>{work.description}</Text>
                {work.imageProvided && (
                  <Text fontSize="sm">{work.imageProvided}</Text>
                )}
                <Text fontSize="sm">{work.date}</Text>
                <Text fontSize="sm">{work.place}</Text>
              </VStack>
            </Flex>
          ))}
        </VStack>
      </Flex>
    </Flex>
  );
}

export default Time;
