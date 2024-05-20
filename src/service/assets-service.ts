import { ApplicationPolicyEnum } from "../util/enums/application-policy-enum";
import { Application } from "../util/interface/application";
import { Policy } from "../util/interface/policy";

export const AssetsService =
{
    getSocial() {
        return [
            {
                icon: "FaFacebook",
                enumType: "Facebook"
            },
            {
                icon: "FaInstagram",
                enumType: "Instagram"
            },
            {
                icon: "FaLinkedin",
                enumType: "Linkedin"
            }
        ]
    },

    getPolicies() {
        return [
            {
                url: "https://blog.hubspot.com/hs-fs/hubfs/unordered-list-html.png?width=595&height=400&name=unordered-list-html.png",
                title: "BEVERAGES CLUSTER  ",
                body: "This Privacy Policy outlines the types of personal information collected, used, and shared when you use the Beverage Cluster Application (\"the Application\").",
                path: "beverages-cluster"
            },
        ] as Policy[];
    },

    getPolicyApplication(code: string) {
        const companyData: Application = {
            [ApplicationPolicyEnum.BeveragesCluster]: {
                privacyPolicy: {
                    title: "PRIVACY POLICY FOR BEVERAGES CLUSTER",
                    lastUpdated: "2024-04-26",
                    content: [
                        {
                            title: "Information Collection and Use",
                            description:
                                "To provide and improve the Application, we collect several different types of information:",
                            points: [
                                "Account Information: To access the Application, users are required to create an account. During the account creation process, we collect information such as your email address, name, and a password.",
                                "Client Information: Users, specifically pre-sellers, have the ability to create and manage client profiles within the Application. This may include collecting personal information about clients such as names, contact details, and addresses.",
                                "Background Location Usage: To ensure operational integrity and regulatory compliance, our application collects user location information in the background to verify that operations are conducted at the client's location. Additionally, this information is used to monitor and ensure advisors' compliance with regulatory requirements. Access to background location is essential to ensure that our users are performing their job activities at designated locations and fulfilling their work responsibilities.",
                                "Order and Visit Data: When pre-sellers visit clients and take orders, we collect information related to these visits and orders, including the date and time of the visit, the client's details, and the specifics of the orders placed.",
                            ],
                        },
                        {
                            title: "Use of Information",
                            description:
                                "The information we collect is used in various ways, including:",
                            points: [
                                "To facilitate the creation and management of user accounts.",
                                "To enable pre-sellers to conduct visits, create, and manage client profiles.",
                                "To improve and personalize the user experience within the Application.",
                                "To communicate with users regarding their account or any services provided by the Application.",
                                "To detect, prevent, and address technical issues.",
                                "To enable more efficient management of client visits by providing both user and client location data.",
                                "To verify the location and activity of advisors or users, thus ensuring operational integrity and regulatory compliance.",
                            ],
                        },
                        {
                            title: "Sharing of Information",
                            description:
                                "We do not sell, trade, or rent users' personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers for the purposes outlined above.",
                        },
                        {
                            title: "Security",
                            description:
                                "The security of your Personal Information is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.",
                        },
                        {
                            title: "Changes to This Privacy Policy",
                            description:
                                "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.",
                        },
                        {
                            title: "Contact Us",
                            description:
                                "If you have any questions about this Privacy Policy, please contact us.",
                            additionalInfo:
                                "By using the Application, you signify your acceptance of this Privacy Policy. If you do not agree to this policy, please do not use our Application. Your continued use of the Application following the posting of changes to this policy will be deemed your acceptance of those changes.",
                        },
                    ],
                },
                location: {
                    title: "Location",
                    content: [
                        {
                            title: "Information Collection",
                            description:
                                "By using our application, we collect background location information from mobile devices assigned to each sales advisor of the company. This information includes precise real-time location data, even when the application is running in the background. We do not collect or store location information from devices not associated with an authorized advisor of the company.",
                        },
                        {
                            title: "Use of Information",
                            description:
                                "The background location information is solely used for monitoring and supervising the activities of the company's sales advisors. This information is utilized to:",
                            points: [
                                "Facilitate real-time tracking of the location of sales advisors while they conduct their work activities.",
                                "Enable company supervisors to verify the routes taken by advisors and analyze their compliance with designated geofences.",
                                "Improve sales process efficiency and productivity by optimizing routes and task assignments.",
                                "Certain advisors deliver products and it is necessary for the advisor's security to know their current location.",
                                "The advisors carry out self-sales and it is necessary to maintain the security of the products as well as the advisors.",
                            ],
                        },
                        {
                            title: "Sharing of Information",
                            description:
                                "The background location information collected by our application is shared only with authorized supervisors and administrators of the company. This information is not sold, rented, or shared with third parties unaffiliated with the company, except when necessary to comply with the law or protect our legal rights.",
                        },
                        {
                            title: "Information Security",
                            description:
                                "We are committed to safeguarding the security and confidentiality of the location information collected by our application. We implement appropriate technical and organizational measures to protect this information against unauthorized access, disclosure, or modification.",
                        },
                        {
                            title: "User Consent",
                            description:
                                "By using our application, company sales advisors provide explicit consent for the collection and use of their background location information for the purposes described in this Privacy Policy.",
                        },
                    ],
                },
            },
        };

        return companyData[code || ""] ?? null;
    }
}
