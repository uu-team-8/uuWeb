// @ts-nocheck
import type { FC } from "react";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";

import { Session } from "../components/left-panel";

const Humidity: FC = () => {


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
            <Title>Vlhkost</Title>
            {!userSess[0] ?
                <TextContainer>
                    <p>Pro zobrazení dat se musíte přihlásit !</p>
                </TextContainer>

                :
                <p>Zatim nemame :(</p>

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

export default Humidity;