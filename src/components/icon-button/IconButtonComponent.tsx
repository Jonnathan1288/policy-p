import { IconButton } from "@chakra-ui/react";
import { IconButtonProps } from "./interface/icon-button-props";

export const IconButtonComponent = ({ icon: Icon, onClick }: IconButtonProps) => {
    return (
        <IconButton icon={<Icon />} isRound={true} onClick={onClick} aria-label="none"></IconButton>
    );
};
