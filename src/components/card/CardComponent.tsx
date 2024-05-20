import {
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    Divider,
    Heading,
    Image,
    Stack,
    Text,
} from "@chakra-ui/react";

import { AddIcon } from "@chakra-ui/icons";
import { CardProps } from "./interface/card-props";

export const CardComponent = (props: CardProps) => {
    const { url, body, title, onClick } = props;
    return (
        <Card maxW="sm" data-aos="fade-up" data-aos-duration="1000">
            <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <CardBody>
                    <Image src={url} alt="Green double couch with wooden legs" borderRadius="lg" />
                    <Stack mt="6" spacing="3">
                        <Heading size="md">{title}</Heading>
                        <Text>{body}</Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing="2">
                        <Button
                            rightIcon={<AddIcon />}
                            colorScheme="blue"
                            variant="outline"
                            onClick={onClick}
                        >
                            Read more
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </div>
        </Card>
    );
};
