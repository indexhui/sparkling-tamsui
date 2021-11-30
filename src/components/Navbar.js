import {
  Flex,
  Box,
  Link,
  HStack,
  VStack,
  Image,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Text,
  Icon,
} from '@chakra-ui/react';

import { HamburgerIcon } from '@chakra-ui/icons';
import { MdFacebook } from 'react-icons/md';

import { Link as ReachLink, animateScroll as scroll } from 'react-scroll';

import { useState } from 'react';

import logotype from '../assets/images/logotype.svg';

export default function Navbar() {
  return (
    <Flex
      w="100%"
      h="62px"
      bg="brand.500"
      color="white"
      align="center"
      px="20px"
      justify="center"
      top="0"
      left="0"
      zIndex="20"
      position="fixed"
    >
      <Flex w="1080px" justify="space-between" align="center">
        <Image w="150px" src={logotype} alt="sparkling-tamsui" />
        <MobileNav />
        <DesktopNav />
      </Flex>
    </Flex>
  );
}

const MobileNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex display={{ base: 'block', md: 'none' }}>
      <HamburgerIcon onClick={onOpen} w={6} h={6} />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        bg="black"
        color="white"
      >
        <DrawerOverlay />
        <DrawerContent bg="brand.500" color="white">
          <DrawerCloseButton color="white" />

          <DrawerBody pt="30%">
            <VStack spacing="20px">
              {navItems.map(item => (
                <NavLink onClick={onClose} key={item.to} {...item} />
              ))}
              <Link
                display="flex"
                href="https://www.facebook.com/tamsuihistoricalmuseum"
                isExternal
              >
                <HStack align="center" spacing="2px">
                  <Text>淡水古蹟博物館</Text> <Icon as={MdFacebook} />
                </HStack>
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

const DesktopNav = () => {
  return (
    <HStack spacing="20px" display={{ base: 'none', md: 'flex' }}>
      {navItems.map(item => (
        <NavLink key={item.to} {...item} />
      ))}
      <Link
        display="flex"
        href="https://www.facebook.com/tamsuihistoricalmuseum"
        isExternal
      >
        <HStack align="center" spacing="2px">
          <Text>淡水古蹟博物館</Text> <Icon as={MdFacebook} />
        </HStack>
      </Link>
    </HStack>
  );
};

const NavLink = props => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Link
      spy={true}
      hashSpy={true}
      key={props.to}
      as={ReachLink}
      to={props.to}
      onClick={props.onClick}
      position="relative"
      smooth={true}
      color="white"
      onSetActive={() => setIsActive(true)}
      onSetInactive={() => setIsActive(false)}
      fontSize={{ base: '18px', md: '16px' }}
    >
      {props.label}
      {isActive && (
        <Box
          bgGradient="linear(to-b,rgba(255,241,0,.7), rgba(255,241,0,0))"
          rounded="full"
          position="absolute"
          zIndex="-1"
          top="0"
          margin="0 auto"
          left="0"
          right="0"
          w="24px"
          h="24px"
        ></Box>
      )}
    </Link>
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
  // {
  //   label: '火光十色',
  //   to: 'firework',
  // },
  {
    label: '合作店家',
    to: 'store',
  },
];
