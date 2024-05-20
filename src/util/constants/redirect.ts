import { RedirectEnum } from "../enums/redirect-enum";

export const Redirect = (e: RedirectEnum) => {
    const urls: { [key: number]: string } = {
        [RedirectEnum.Facebook]: 'https://www.facebook.com/people/PENTA-Digital-Lab/61550772579480/',
        [RedirectEnum.Instagram]: 'https://www.instagram.com/penta_digital_lab/',
        [RedirectEnum.Linkedin]: 'https://www.linkedin.com/company/penta-digital-lab/',

    };;

    const urlSelected = urls[e];

    if (!urlSelected) return;

    window.open(urlSelected, '_blank');
}