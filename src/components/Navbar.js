import { Flex, Link, HStack, Image } from '@chakra-ui/react';
import { Link as ReachLink, animateScroll as scroll } from 'react-scroll';

import logotype from '../assets/images/logotype.svg';

export default function Navbar() {
  return (
    <Flex
      w="100%"
      h="65px"
      bg="brand.500"
      color="white"
      align="center"
      justify="center"
    >
      <Flex w="1080px" justify="space-between">
        <Image w="168px" src={logotype} alt="sparkling-tamsui" />
        <DesktopNav />
      </Flex>
    </Flex>
  );
}

const DesktopNav = () => {
  return (
    <HStack spacing="20px">
      {navItems.map(item => (
        <Link key={item.to} as={ReachLink} to={item.to} smooth={true}>
          {item.label}
        </Link>
      ))}
    </HStack>
  );
};

const navItems = [
  {
    label: '時光循跡',
    to: 'time',
  },
  {
    label: '波光水岸',
    to: 'wave',
  },
  {
    label: '火光十色',
    to: 'firework',
  },
  {
    label: '合作店家',
    to: 'shop',
  },
  {
    label: '淡水古蹟博物館',
    to: 'museum',
  },
];
