import { SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CardComponent } from "../../components/card/CardComponent";
import { Policy } from "../../util/interface/policy";
import { AssetsService } from "../../service/assets-service";
import { useNavigate } from "react-router-dom";
import { ImageUrl, PentaUrl } from "../../util/constants/const";

export const PoliciesComponent = () => {
    const navigate = useNavigate();

    const [policies, setPolicies] = useState<Policy[]>([]);

    useEffect(() => {
        setPolicies(AssetsService.getPolicies());
    }, []);

    const goToPolicyPage = (appCode: string) => navigate(`/policies/${appCode}`);

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "35px",
                padding: "25px",
            }}
        >
            <SimpleGrid columns={[1, null, 2, 3, 4]} spacing="50px">
                {policies &&
                    policies.map((item, i) => {
                        return (
                            <>
                                <CardComponent
                                    key={i}
                                    title={item.title}
                                    url={item.url != null ? item.url : PentaUrl}
                                    body={item.body}
                                    onClick={() => goToPolicyPage(item.path)}
                                />
                            </>
                        );
                    })}
            </SimpleGrid>
        </div>
    );
};
