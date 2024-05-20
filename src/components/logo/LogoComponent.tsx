import { LogoProps } from "./interface/logo-props";

export const LogoComponent = (props: LogoProps) => {
    const { path } = props;
    const style = {
        width: `140px`,
        heigth: `20px`,
    };

    return <img src={path} style={style} />;
};
