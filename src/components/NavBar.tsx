import { Box, Flex, HStack, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react"
import logo from '../assets/logo.webp'
import ColorModeButton from "./ColorModeButton"

const NavBar = () => {
    return (
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} marginBottom={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <Box>
                    <HStack>
                        <Image src={logo} width={12}/>
                        <Text>Game Hub</Text>
                    </HStack>
                </Box>

                <Flex alignItems={"center"}>
                    <Stack direction={'row'} spacing={7}>
                        <ColorModeButton />
                    </Stack>
                </Flex>
            </Flex>
        </Box>
    )
}

export default NavBar