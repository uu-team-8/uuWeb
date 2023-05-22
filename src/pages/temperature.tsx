import type { FC } from "react";
import styled from "@emotion/styled";

import { useAuth } from "../auth";

const Temperature: FC = () => {
    const [loggedUser] = useAuth();

    return (
        <Wrapper>
            <Title>Teplota</Title>
            {!loggedUser ?

                <TextContainer>
                    <p>Pro zobrazení dat se musíte přihlásit !</p>
                </TextContainer>

                :
                <GraphContainer>
                    <iframe src="https://grafana.uu.vojtechpetrasek.com/d-solo/xRpNuj1Vk/uu-team-8?orgId=1&from=1684744655503&to=1684766255503&panelId=18" width="450" height="200" frameborder="0"></iframe>
                </GraphContainer>
            }
        </Wrapper>
    )
}

const Wrapper = styled("div")`
    width: 100%;
    height: 100%;
`

const Title = styled("h1")`
    color: ${p => p.theme.UI.white};
    font-weight: 700;
    font-size: 130px;
    line-height: 26px;
    letter-spacing: -0.25px;
    text-align: center;
    margin-top: 120px;
    text-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);

    @media (max-width: 420px) {
        font-size: 55px;
    }
    @media (max-width: 280px) {
        font-size: 40px;
    }
`

const GraphContainer = styled("div")`
    display: flex;
    flex-direction: column;
    margin-top: 160px;
    width: 100%;
    display: flex;
    align-items: center;

    > iframe {
        border: 0px;
    }
`
const TextContainer = styled("div")`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 160px;
`

export default Temperature;