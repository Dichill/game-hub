import {
    Box,
    Flex,
    HStack,
    Image,
    Stack,
    useColorModeValue,
} from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeButton from "./ColorModeButton";
import SearchInput from "./SearchInput";

const NavBar = () => {
    return (
        <HStack
            bg={useColorModeValue("gray.100", "gray.900")}
            px={4}
            marginBottom={4}
            h={16}
        >
            <Box>
                <HStack>
                    <Image src={logo} width={12} />
                    {/* <Text whiteSpace="nowrap">Game Hub</Text> */}
                </HStack>
            </Box>

            <SearchInput />

            <Flex alignItems={"center"} paddingLeft={2}>
                <Stack direction={"row"} spacing={7}>
                    <ColorModeButton />
                </Stack>
            </Flex>
        </HStack>
    );
};

export default NavBar;
