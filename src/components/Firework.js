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
} from '@chakra-ui/react';

import titleFirework from '../assets/images/title_firework.svg';
import fire01 from '../assets/images/fire01.jpg';

const fireworkDate01 = {
  title: '京都teamLab展',
  description: '糺之森和沈浸式藝術會碰撞出怎樣的火花',
  image: fire01,
  schedule: ['17:30-18:30 黃偉軒✕晟SHENG', '18:30-19:00 洪梓倪✕___cssss___'],
};

function Firework() {
  return (
    <Flex justify="center" bg="brand.500">
      <Flex
        w={{ base: '100%', sm: '100%', md: '960px', '2xl': '70%' }}
        px={{ base: '20px', md: '0' }}
        py="40px"
        justify="center"
      >
        <VStack>
          <Flex textAlign="center" direction="column" align="center">
            <Image w="120px" src={titleFirework} alt="時光循跡" />
            <Text color="white"> 淡水聲光夜 </Text>
          </Flex>
          <HStack
            w="100%"
            wrap={{ base: 'wrap', md: 'nowrap' }}
            spacing={{ base: '0', md: '24px' }}
          >
            <Fire01 />
            <Fire01 />
            <Fire01 />
            <Fire01 />
          </HStack>
        </VStack>
      </Flex>
    </Flex>
  );
}

export default Firework;

const Fire01 = () => {
  return (
    <>
      <VStack
        w={{ base: '100%', md: '25%' }}
        py="20px"
        spacing="8px"
        color="white"
        align="flex-start"
      >
        <Image rounded="sm" w="100%" src={fireworkDate01.image} />
        <Heading size="md">{fireworkDate01.title}</Heading>
        <Text>{fireworkDate01.description}</Text>
        <HStack w="100%" spacing="12px">
          <FireSchedule01 />
          <FireApply01 />
        </HStack>
      </VStack>
    </>
  );
};

const FireSchedule01 = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        colorScheme="black"
        w="100%"
        bg="gray.800"
        borderRadius="0"
        onClick={onOpen}
      >
        節目單
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>報名資訊</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{fireworkDate01.description}</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

const FireApply01 = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        w="100%"
        colorScheme="black"
        borderRadius="0"
        variant="outline"
        onClick={onOpen}
      >
        報名資訊
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>報名資訊</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{fireworkDate01.description}</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
