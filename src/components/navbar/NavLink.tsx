import { Button, Text, useColorModeValue } from "@chakra-ui/react";
import { LinkItemProps } from "./interface/link-item-props";
import { Link } from "react-router-dom";
export const NavLink = ({ name, path, icon: Icon }: LinkItemProps) => {
    return (
        <Link to={path}>
            <Button
                leftIcon={<Icon />}
                colorScheme="teal"
                variant="none"
                _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("gray.200", "gray.700"),
                }}
                w="full"
            >
                <Text as="b">{name}</Text>
            </Button>
        </Link>
    );
};
