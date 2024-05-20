import {
    Box,
    Flex,
    HStack,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { NavLink } from "./NavLink";
import { LogoComponent } from "../logo/LogoComponent";
import { LinkItems } from "../../util/constants/link-item";
import { ImageUrl } from "../../util/constants/const";
import { Link } from "react-router-dom";

export const NavbarComponent = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box bg={useColorModeValue("gray.100", "gray.900")} px={6}>
                <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                    <HStack spacing={8} alignItems={"center"}>
                        <Stack spacing={6}>
                            <Link to="/">
                                <LogoComponent path={ImageUrl} />
                            </Link>
                        </Stack>
                    </HStack>
                    <HStack
                        as={"nav"}
                        spacing={4}
                        display={{ base: "none", md: "flex" }}
                        alignItems={"right"}
                    >
                        {LinkItems.map((link, i) => (
                            <NavLink key={i} icon={link.icon} path={link.path} name={link.name} />
                        ))}
                        <ColorModeSwitcher />
                    </HStack>

                    <IconButton
                        size={"md"}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={"Open Menu"}
                        display={{ md: "none" }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: "none" }} w="full">
                        <Stack as={"nav"}>
                            <ColorModeSwitcher />

                            {LinkItems.map((link, i) => (
                                <NavLink
                                    key={i}
                                    icon={link.icon}
                                    path={link.path}
                                    name={link.name}
                                />
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
};
