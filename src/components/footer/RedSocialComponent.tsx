import { Box, Container, Stack, Text, useColorModeValue } from "@chakra-ui/react";

import { IconButtonComponent } from "../icon-button/IconButtonComponent";
import { RedirectEnum } from "../../util/enums/redirect-enum";
import { Redirect } from "../../util/constants/redirect";
import { iconMap, mapToRedirectEnum } from "../../util/constants/icon-map";
import { FaQuestionCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { AssetsService } from "../../service/assets-service";
export const RedSocialComponent = () => {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        setData(AssetsService.getSocial());
    }, []);

    const MoveToLink = (enumType: RedirectEnum) => {
        Redirect(enumType);
    };
    return (
        <Box
            bg={useColorModeValue("gray.50", "gray.900")}
            color={useColorModeValue("gray.700", "gray.200")}
        >
            <Box
                borderBottomWidth={1}
                borderStyle={"solid"}
                borderColor={useColorModeValue("gray.200", "gray.700")}
            >
                <Container
                    as={Stack}
                    maxW={"1xl"}
                    py={4}
                    direction={{ base: "column", md: "row" }}
                    spacing={4}
                    justify={{ base: "center", md: "space-between" }}
                    align={{ base: "center", md: "center" }}
                >
                    <Text>Get connected with us on social networks:</Text>
                    <Stack direction={"row"} spacing={2}>
                        {data.map((item, i) => (
                            <IconButtonComponent
                                key={i}
                                icon={iconMap[item.icon] || FaQuestionCircle}
                                onClick={() => MoveToLink(mapToRedirectEnum(item.enumType))}
                            />
                        ))}
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
};
