import type {FC, FormEvent} from "react";
import styled from "@emotion/styled";

import {useAuth} from "../auth";
import Input from "../components/input";
import Button from "../components/button";
import {useState} from "react";
import {ToastState, useToast} from "../components/toast";
import {SendData} from "../network";

const CreateGateway: FC = () => {
    const [loggedUser] = useAuth();
    const [isLoading, setIsLoading] = useState(false)
    const [gtwId, setGtwId] = useState("")
    const [gtwName, setGtwName] = useState("")
    const toast = useToast()

    async function sendGTWInfo(e: FormEvent) {
        e.preventDefault()
        setIsLoading(true)
        if (gtwName == "" || gtwId == "") {
            toast({text: "Vyplňte všechna pole", buttonText: "OK", state: ToastState.ERROR, lifetime: 5});
            setIsLoading(false)
            return;
        };
    }

    function onIdChange(gtwId: string) {
        setGtwId(gtwId)
    }

    function onNameChange(gtwName: string) {
        setGtwName(gtwName)
    }

    return (
        <Wrapper>
            {!loggedUser ?

                <TextContainer>
                    <p>Pro přidání nové gateway se musíte přihlásit !</p>
                </TextContainer>

                :
                <StyledSection>
                    <GatewayForm onSubmit={sendGTWInfo}>
                        <GatewayFormTitle>Přidat Gateway</GatewayFormTitle>
                        <Input InputPlaceholder="Klíč Gatewaye" InputType="text" InputValue={onIdChange}/>
                        <Input InputPlaceholder="Jmeno Gatewaye" InputType="text" InputValue={onNameChange}/>

                        <Button isLoading={isLoading} title="Přidat"/>

                    </GatewayForm>
                </StyledSection>
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

const TextContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 160px;
`

const StyledSection = styled("section")`
  display: flex;
  flex-direction: column;
`

const GatewayForm = styled("form")`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const GatewayFormTitle = styled("h1")`
  color: ${p => p.theme.UI.white};
  margin-top: 104px;
  margin-bottom: 26px;
  font-weight: 300;
  font-size: 40px;
  text-align: center;
  line-height: 35px;
`
const ErrorMess = styled("p")`
  margin-top: 10px;
  color: red;
`

export default CreateGateway;