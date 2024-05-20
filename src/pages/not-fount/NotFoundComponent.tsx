import React from "react";
import { Flex, Heading } from "@chakra-ui/react";

export const NotFoundComponent = ({ code }: any) => {
    return (
        <Flex height="100vh" alignItems="center" justifyContent="center">
            <Heading as="h2" size="xl">
                404 - No se encontraron resultados {code}
            </Heading>
        </Flex>
    );
};
