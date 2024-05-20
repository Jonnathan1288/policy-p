import { ChakraProvider, theme, IconButton } from "@chakra-ui/react";

import { AppRoute } from "./router/AppRoute";
import { NavbarComponent } from "./components/navbar/NavbarComponent";
import { FooterComponent } from "./components/footer/FooterComponent";
import { FaWhatsapp } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const App = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
        AOS.refresh();
    }, []);

    return (
        <>
            <ChakraProvider theme={theme}>
                <NavbarComponent />
                <AppRoute />
                <FooterComponent />
                <IconButton
                    icon={<FaWhatsapp />}
                    size="lg"
                    rounded={50}
                    colorScheme="teal"
                    aria-label="Wpp"
                    position="fixed"
                    bottom="6"
                    right="6"
                    zIndex="999"
                    onClick={() => window.open("", "_blank")}
                    style={{ fontSize: "30px", width: "60px", height: "60px" }}
                />
            </ChakraProvider>
        </>
    );
};
