// @ts-nocheck
import type { FC } from "react";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";

import Card from "../components/card";

const Home: FC = () => {
    const [userSess, setUserSess] = useState<Session[]>([]);

    function getUser() {
        const sessionString = localStorage.getItem("session");
        if (!sessionString) {
            return null;
        }

        return setUserSess([JSON.parse(sessionString)]);
    }

    useEffect(() => {
        getUser();
    }, []);

    return (
        <Wrapper>
            <Title>Dashboard</Title>
            {!userSess[0] ? <p>Pro zobrazení dat se musíte přihlásit</p> :
                <CardContainer>
                    <iframe src="https://grafana.uu.vojtechpetrasek.com/d-solo/xRpNuj1Vk/uu-team-8?orgId=1&from=1677020400000&to=1677078000000&panelId=2" width="40%" height="300" frameborder="0"></iframe>
                    <iframe src="https://grafana.uu.vojtechpetrasek.com/d-solo/xRpNuj1Vk/uu-team-8?orgId=1&from=1677020400000&to=1677078000000&panelId=4" width="40%" height="300" frameborder="0"></iframe>
                </CardContainer>
            }
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
    font-weight: 700;
    font-size: 130px;
    line-height: 26px;
    letter-spacing: -0.25px;
    text-align: center;
    margin-top: 120px;
    text-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);
`

const CardContainer = styled("div")`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 160px;
`

export default Home;