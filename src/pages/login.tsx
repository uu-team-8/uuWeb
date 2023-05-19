// @ts-nocheck
import styled from "@emotion/styled";
import type { FC } from "react";
import { useState, FormEvent } from "react";
import { useLocation, Link } from "wouter";

import Input from "../components/input";
import Button from "../components/button";


const Login: FC = () => {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [location, setLocation] = useLocation();
    const [errorMess, setErrorMess] = useState("");
    const [emailVal, setEmailVal] = useState(true);

    async function sendLogInfo(e: FormEvent) {
        e.preventDefault();
        if (userPassword == "" || userEmail == "") {
            setErrorMess("Vyplňte všechna pole")
            return
        } else if (!emailVal) {
            setErrorMess("Neplatný email")
            return
        };

        try {
            const response = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email: userEmail, password: userPassword })
            });
            const user = await response.json();
            localStorage.setItem("session", JSON.stringify(user));
        
            if (!user) {
                setErrorMess("Neplatný email nebo heslo");
                return;
            }

            setLocation("/");
        } catch (e) {
            setErrorMess(e);
        }
    };

    function OnChange(Email: string) {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const EmailValid = regex.test(Email);
        setEmailVal(EmailValid)
        setUserEmail(Email)
    };

    function Password(Password: string) {
        setUserPassword(Password)
    };

    return (
        <Container>

            <StyledSection>
                <LoginForm onSubmit={sendLogInfo}>
                    <LoginFormTitle>Přihlásit se</LoginFormTitle>

                    <Input InputPlaceholder="Email" InputType="email" InputValue={OnChange} />
                    <Input InputPlaceholder="Heslo" InputType="password" InputValue={Password} />

                    <ErrorMess>{errorMess}</ErrorMess>

                    <Button title="Přihlásit se" />

                </LoginForm>

            </StyledSection>

            <UserActions>
                <StyledP>
                    Nemáte účet?
                    <Link href="/registrace">
                        <Reg>
                            Vytvořte si ho
                        </Reg>
                    </Link>
                </StyledP>
            </UserActions>

        </Container>
    )
}

const Container = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    background-color: ${p => p.theme.gray.gray20};
`

const StyledSection = styled("section")`
    display: flex;
    flex-direction: column;
`

const LoginForm = styled("form")`
    display: flex;
    align-items: center;
    flex-direction: column;
`

const LoginFormTitle = styled("h1")`
    color: ${p => p.theme.UI.white};
    margin-top: 104px;
    margin-bottom: 26px;
    font-weight: 300;
    font-size: 40px;
    text-align: center;
    line-height: 35px;
`
const StyledP = styled("p")`
    color: ${p => p.theme.UI.white};
`

const UserActions = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 24px;
`

const Reg = styled("a")`
    color: #1376C0;
    text-decoration: none;
    cursor: pointer;
    margin-left: 3px;
`

const ErrorMess = styled("p")`
    margin-top: 10px;
    color: red;
`


export default Login;