import type { FC } from "react";
import styled from "@emotion/styled";

const Temperature: FC = () => {
    return (
        <Wrapper>
            <Title>Teplota</Title>
            <GraphContainer>
                <iframe src="https://grafana.uu.vojtechpetrasek.com/d-solo/xRpNuj1Vk/uu-team-8?orgId=1&from=1677020400000&to=1677078000000&panelId=2" width="70%" height="400"></iframe>
            </GraphContainer>
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

export default Temperature;