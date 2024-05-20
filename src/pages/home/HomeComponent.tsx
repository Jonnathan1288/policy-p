import { Container, SimpleGrid, Image, Flex, Heading, Text, Stack } from "@chakra-ui/react";
import { PentaUrl } from "../../util/constants/const";

export const HomeComponent = () => {
    return (
        <Container maxW={"6xl"} py={12}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Flex>
                    <Image
                        rounded={"md"}
                        alt={"feature image"}
                        src={PentaUrl}
                        objectFit={"cover"}
                        data-aos="zoom-in-down"
                        data-aos-easing="ease-out-cubic"
                    />
                </Flex>
                <Stack spacing={4} justifyContent="center" alignItems="left">
                    <Heading
                        color={"#8C4DFA"}
                        as="h5"
                        size="sm"
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                    >
                        UN MUNDO DIGITAL A TU MEDIDA
                    </Heading>
                    <Heading
                        color={"#225469"}
                        as="h2"
                        size="3xl"
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                    >
                        AImpulsando
                    </Heading>
                    <Heading
                        color={"#8C4DFA"}
                        as="h2"
                        size="3xl"
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                    >
                        Soluciones
                    </Heading>
                    <Heading
                        color={"#225469"}
                        as="h2"
                        size="3xl"
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                    >
                        Empresariales
                    </Heading>
                    <Text
                        color={"gray.500"}
                        fontSize={"lg"}
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                    >
                        Convertimos tus ideas en experiencias digitales a medida. Fusionamos
                        vanguardia e innovación para brindar soluciones que trascienden, guiando a
                        las empresas hacia una transformación tecnológica. Únete a nosotros y da
                        vida a tu futuro digital!
                    </Text>
                    <Text
                        color={"gray.500"}
                        fontSize={"lg"}
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                    >
                        Optimizamos tu negocio con soluciones versátiles y efectivas
                    </Text>
                </Stack>
            </SimpleGrid>
        </Container>
    );
};
