import {
    Box, Flex, Container, Text, Heading, Link, LinkOverlay, LinkBox,
    HStack, IconButton, Spacer, Divider,
    useDisclosure, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton,
  } from '@chakra-ui/react';

import "../index.css";

const Links = [
    {'name': 'GitHub', 'link': "https://github.com/tnagano99", 'type': 'external'},
    {'name': 'LinkedIn', 'link': "https://www.linkedin.com/in/tyler-nagano/", 'type': 'external'}
];

function NavBar(props: any) {
    return (
    <Link href={props.link} isExternal>
        <Heading as='h1' size='xl' noOfLines={1} p='10px'>{props.name}</Heading>
    </Link>
    )
}

function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box bg='white'>
            <Container maxW='1200px'>
            <Flex alignItems={'center'}>
                <Heading as='h1' size='3xl' noOfLines={1} p='10px'>Tyler Nagano</Heading>
                <Spacer />
                <HStack>
                    
                    {Links.map((link) => {
                    return (
                        <NavBar key={link.name} name={link.name} link={link.link} />
                    )
                    })}
                    
                </HStack>
            </Flex>
            </Container>
        </Box>
    )
}

export default Header;