import { FaHome, FaTools } from "react-icons/fa";
import { LinkItemProps } from "../../components/navbar/interface/link-item-props";

export const LinkItems: Array<LinkItemProps> = [
    { name: "Home", icon: FaHome, path: '/' },
    { name: "Policies", icon: FaTools, path: '/policies' },
];
