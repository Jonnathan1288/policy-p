import { Box, Container, Icon, SimpleGrid, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";
import { LogoComponent } from "../logo/LogoComponent";
import { CopyrightComponent } from "./CopyrightComponent";
import { ImageUrl } from "../../util/constants/const";
import { RedSocialComponent } from "./RedSocialComponent";
import { FaFacebook, FaHome } from "react-icons/fa";
import { EmailIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
        <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
            {children}
        </Text>
    );
};

export const FooterComponent = () => {
    return (
        <>
            <RedSocialComponent />
            <Box
                bg={useColorModeValue("gray.50", "gray.900")}
                color={useColorModeValue("gray.700", "gray.200")}
            >
                <Container as={Stack} maxW={"1xl"} py={10}>
                    <SimpleGrid templateColumns={{ sm: "1fr 1fr", md: "3fr 2fr 3fr " }} spacing={8}>
                        <Stack spacing={6}>
                            <Box>
                                <Link to="/">
                                    <LogoComponent path={ImageUrl} />
                                </Link>
                            </Box>
                            <Text fontSize={"md"}>
                                Nos esforzamos por ser el catalizador digital que impulsa a las
                                empresas a la vanguardia de la innovación que aporta valor.
                            </Text>
                        </Stack>
                        <Stack align={"flex-start"}>
                            <ListHeader>OUR ADDRESS</ListHeader>
                            <Box
                                as="a"
                                target="_blank"
                                href="https://www.google.com/maps/place/Penta+Digital+Lab/@-2.8822396,-78.9985352,331m/data=!3m1!1e3!4m14!1m7!3m6!1s0x91cd23a20a7ed93b:0x11341a6091125972!2sKARNATAKA+S.A.!8m2!3d-2.9160417!4d-79.0327316!16s%2Fg%2F11t7c19dr8!3m5!1s0x91cd23257f2865e7:0x2e6748e7ee3cfb2a!8m2!3d-2.8818491!4d-78.9980549!16s%2Fg%2F11vdxvb0c8?entry=ttu"
                                display="flex"
                                alignItems="center"
                            >
                                <Icon as={FaHome} marginRight="0.5rem" /> Av. Miraflores, y, Cuenca
                            </Box>

                            <Box as="a" display="flex" alignItems="center">
                                <Icon as={EmailIcon} marginRight="0.5rem" /> info@pentalab.tech
                            </Box>
                        </Stack>
                        <Stack align={"flex-start"}>
                            <ListHeader>SITEMAP</ListHeader>

                            <Link to="/">Home</Link>
                            <Link to="/policies">Policies</Link>
                        </Stack>
                    </SimpleGrid>
                </Container>
            </Box>

            <CopyrightComponent />
        </>
    );
};
