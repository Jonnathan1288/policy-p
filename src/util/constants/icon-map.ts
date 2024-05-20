import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { RedirectEnum } from "../enums/redirect-enum";

export const iconMap: { [key: string]: IconType } = {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
};

export const mapToRedirectEnum = (value: string): RedirectEnum => {
    switch (value) {
        case 'Facebook':
            return RedirectEnum.Facebook;
        case 'Instagram':
            return RedirectEnum.Instagram;
        case 'Linkedin':
            return RedirectEnum.Linkedin;
        default:
            return RedirectEnum.Default;
    }
};