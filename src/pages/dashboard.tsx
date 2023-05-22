import type { FC } from "react";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";

import { Session } from "../components/left-panel";


import { useToast, ToastState} from "../components/toast";


const Home: FC = () => {
    const [userSess, setUserSess] = useState<Session[]>([]);
    const toast = useToast();



    function getUser() {
        const sessionString = localStorage.getItem("session");
        if (!sessionString) {
            return null;
        }

        return setUserSess([JSON.parse(sessionString)]);
    }

    useEffect(() => {
        getUser(); 
        toast({ text: "Účet byl vytvořen.", buttonText: "OK", state: ToastState.SUCCESS, lifetime: 5 })
    }, []);

    return (
        <Wrapper>
            <Title>Dashboard</Title>
            {!userSess[0] ?

                <TextContainer>
                    <p>Pro zobrazení dat se musíte přihlásit !</p>
                </TextContainer>

                :
                <p>adw</p>
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

const TextContainer = styled(CardContainer)`
    justify-content: center;
`

export default Home;