import { Routes, Route } from "react-router-dom";
import { Routes as routes } from "./Routes";

import { useLocation } from "react-router-dom";

export const AppRoute = () => {
    console.log(useLocation);
    return (
        <>
            <Routes>
                {routes.map((route, i) => (
                    <Route exact={route.exact} key={i} path={route.path} element={route.component}></Route>
                ))}
            </Routes>
        </>
    );
};
