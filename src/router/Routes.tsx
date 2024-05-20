import { HomeComponent } from "../pages/home/HomeComponent";
import { InformationPolicyComponent } from "../pages/information-policy/InformationPolicyComponent";
import { NotFoundComponent } from "../pages/not-fount/NotFoundComponent";
import { PoliciesComponent } from "../pages/policies/PoliciesComponent";

export const Routes = [
    {
        path: "/",
        component: <HomeComponent />,
        exact: true,
        protected: false,
    },
    {
        path: "/policies",
        component: <PoliciesComponent />,
        exact: true,
        protected: false,
    },
    {
        path: "/policies/:appCode",
        component: <InformationPolicyComponent />,
        exact: true,
        protected: false,
    },
    {
        path: "*",
        component: <NotFoundComponent />,
        exact: false,
        protected: false,
    },
];
