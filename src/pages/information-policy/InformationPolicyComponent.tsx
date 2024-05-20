import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";
import { AssetsService } from "../../service/assets-service";
import { NotFoundComponent } from "../not-fount/NotFoundComponent";

export const InformationPolicyComponent = () => {
    const { appCode } = useParams();

    const [dataInformation, setDataInformation] = useState<any>();

    useEffect(() => {
        setDataInformation(AssetsService.getPolicyApplication(appCode ?? ""));
    }, [appCode]);

    return (
        <div>
            {!dataInformation ? (
                <NotFoundComponent code={appCode} />
            ) : (
                <Box maxW="6xl" mx="auto" p="6" data-aos="fade-up" data-aos-duration="3000">
                    <Heading
                        as="h1"
                        fontSize="2xl"
                        fontWeight="bold"
                        mb="4"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        {dataInformation.privacyPolicy.title}
                    </Heading>
                    <Text fontSize="sm" mb="2">
                        <strong>Last updated:</strong> {dataInformation.privacyPolicy.lastUpdated}
                    </Text>
                    {dataInformation.privacyPolicy.content.map((section: any, index: any) => (
                        <Box key={index} mt={index !== 0 ? "6" : undefined}>
                            <Heading
                                as="h2"
                                fontSize="xl"
                                fontWeight="semibold"
                                mb="2"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                {section.title}
                            </Heading>
                            <Text data-aos="fade-up" data-aos-duration="1000">
                                {section.description}
                            </Text>
                            {section.points && (
                                <UnorderedList mt="2" pl="5">
                                    {section.points.map((point: any, index: any) => (
                                        <ListItem
                                            key={index}
                                            data-aos="fade-up"
                                            data-aos-duration="1000"
                                        >
                                            {point}
                                        </ListItem>
                                    ))}
                                </UnorderedList>
                            )}
                            {section.additionalInfo && <Text mt="2">{section.additionalInfo}</Text>}
                        </Box>
                    ))}
                    {dataInformation.location && (
                        <Box mt="6">
                            <Heading
                                as="h1"
                                fontSize="2xl"
                                fontWeight="bold"
                                mb="4"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                {dataInformation.location.title}
                            </Heading>
                            {dataInformation.location.content.map((section: any, index: any) => (
                                <Box key={index} mt={index !== 0 ? "6" : undefined}>
                                    <Heading
                                        as="h2"
                                        fontSize="xl"
                                        fontWeight="semibold"
                                        mb="2"
                                        data-aos="fade-up"
                                        data-aos-duration="1000"
                                    >
                                        {section.title}
                                    </Heading>
                                    <Text data-aos="fade-up" data-aos-duration="1000">
                                        {section.description}
                                    </Text>
                                    {section.points && (
                                        <UnorderedList mt="2" pl="5">
                                            {section.points.map((point: any, index: any) => (
                                                <ListItem
                                                    key={index}
                                                    data-aos="fade-up"
                                                    data-aos-duration="1000"
                                                >
                                                    {point}
                                                </ListItem>
                                            ))}
                                        </UnorderedList>
                                    )}
                                </Box>
                            ))}
                        </Box>
                    )}
                </Box>
            )}
        </div>
    );
};
