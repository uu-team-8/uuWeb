import type { FC } from "react";
import styled from "@emotion/styled";

import Card from "../components/card";

const Home: FC = () => {
    return (
        <Wrapper>
            <Title>Dashboard</Title>
            <CardContainer>
                <Card title="Teplota" />
                <Card title="Vlhkost" />
            </CardContainer>
        </Wrapper>
    )
}

const Wrapper = styled("div")`
    width: 100%;
    min-height: 100%;
    background-color: ${p => p.theme.gray.gray20};
`

const Title = styled("h1")`
    color: ${p => p.theme.UI.white};
    font-family: "Helvetica";
    font-style: normal;
    font-weight: 700;
    font-size: 130px;
    line-height: 26px;
    letter-spacing: -0.25px;
    text-align: center;
    margin-top: 120px;
`

const CardContainer = styled("div")`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 160px;
`

export default Home;