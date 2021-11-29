import {
  Flex,
  VStack,
  Image,
  Text,
  Grid,
  GridItem,
  AspectRatio,
  Link,
} from '@chakra-ui/react';

import { Link as ReachLink } from 'react-scroll';

import titleTime from '../assets/images/title_time.svg';
import titleWaveWhite from '../assets/images/title_wave_white.svg';
import titleFirework from '../assets/images/title_firework.svg';

function Intro() {
  return (
    <Flex bg="#333333" color="white" justify="center">
      <Flex
        w={{ base: '100%', sm: '100%', md: '960px', lg: '1080px' }}
        px={{ base: '20px', md: '0' }}
        py="56px"
      >
        <VStack w="100%" spacing="32px">
          <Flex
            w={{ base: '100%', md: '720px' }}
            textAlign="center"
            direction="column"
            align="center"
          >
            <Flex
              align="center"
              justify="center"
              w="100px"
              h="100px"
              bgGradient="linear(to-bl, rgba(255,255,255,.5), rgba(255,255,255,0))"
            >
              <Text fontSize="3xl"> 光 </Text>
            </Flex>
            <Text mt="-20px">
              賦予淡水迷人的靈魂，淡水夕照刻劃著北臺灣歷史文明的縮影，映照出無數外來勢力的所遺留下的多元歷史建築和文化資產，成為淡水河岸最閃亮的光點，也使淡水成為珍貴的世界遺產潛力點。
            </Text>
            <Text mt="20px">
              2021年尾聲，淡水古蹟博物館以「光映淡水」為架構，透過「時光循跡」藝文展演、「波光水岸」淡水海關碼頭系列活動、「火光十色」淡水聲光夜三大主題，以靜態展演、動態聲光等多元方式呈現淡水橫跨四百年的文化之美。
            </Text>
          </Flex>
          <Grid
            templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
            gap={12}
            py="40px"
          >
            {intro.map(item => (
              <GridItem key={item.id} colSpan={1}>
                <Link as={ReachLink} to={item.name} smooth={true}>
                  <Flex
                    bg="#484848"
                    padding="24px"
                    direction="column"
                    align="center"
                    cursor="pointer"
                    borderRadius="4px"
                  >
                    <Image w="120px" src={item.image} alt={item.id} />
                    {/* <Heading fontSize="lg" my="5px">
                    {item.title}
                  </Heading> */}
                    <Text fontWeight="300" textAlign="center" mt="6px">
                      {item.description}
                    </Text>
                  </Flex>
                </Link>
              </GridItem>
            ))}
          </Grid>
          <AspectRatio w="75%" ratio={2 / 1}>
            <iframe
              title="naruto"
              src="https://www.youtube.com/embed/NwmxVeOhqkk"
              allowFullScreen
            />
          </AspectRatio>
        </VStack>
      </Flex>
    </Flex>
  );
}

const intro = [
  {
    title: '時光循跡',
    description: '在藝文展演探索淡水的時光軌跡，感受淡水豐厚的文化底蘊。',
    image: titleTime,
    id: 'intro-time',
    name: 'time',
  },
  {
    title: '波光水岸',
    description:
      '光影、展演、市集、音樂會，以多元活動構築的淡水海關碼頭的光彩時刻',
    image: titleWaveWhite,
    id: 'intro-wave',
    name: 'wave',
  },
  {
    title: '火光十色',
    description: '相聚在淡水聲光夜，以煙火、劇場演出、親子活動共築新北璀璨時刻',
    image: titleFirework,
    id: 'intro-firework',
    name: 'firework',
  },
];

export default Intro;
