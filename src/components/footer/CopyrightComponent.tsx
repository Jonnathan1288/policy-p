import { Box, Container, Stack, Text, useColorModeValue } from "@chakra-ui/react";

export const CopyrightComponent = () => {
    return (
        <Box
            bg={useColorModeValue("gray.50", "gray.700")}
            color={useColorModeValue("gray.700", "gray.200")}
        >
            <Container as={Stack} py={4} spacing={4} align={{ base: "center", md: "center" }}>
                <Text>© 2023 Copyright: Pentalab. Todos los derechos reservados</Text>
            </Container>
        </Box>
    );
};
