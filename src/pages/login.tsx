import type { FC } from "react";
import type { Response, LoggedUser } from "../types";

import styled from "@emotion/styled";
import { useState, FormEvent } from "react";
import { useLocation, Link } from "wouter";

import Input from "../components/input";
import Button from "../components/button";
import { ToastState, useToast } from "../components/toast";

import { SendData } from "../network";

interface LoginResponse extends Response {
    user: LoggedUser
}

interface LoginProps {
    login: (newUser: LoggedUser) => void
}

const Login: FC<LoginProps> = ({ login }) => {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [location, setLocation] = useLocation();
    const [errorMess, setErrorMess] = useState("");
    const [emailVal, setEmailVal] = useState(true);
    const [isLoading, setIsLoading] = useState(false)
    const toast = useToast()

    async function sendLogInfo(e: FormEvent) {
        e.preventDefault();
        setIsLoading(true)
        if (userPassword == "" || userEmail == "") {
            toast({ text: "Vyplňte všechna pole", buttonText: "OK", state: ToastState.ERROR, lifetime: 5 });
            setIsLoading(false)
            return;
        } else if (!emailVal) {
            toast({ text: "Neplatný email", buttonText: "OK", state: ToastState.ERROR, lifetime: 5 });
            setIsLoading(false)
            return;
        };

        try {
            const response = await SendData("/login", { email: userEmail, password: userPassword });

            const data: LoginResponse = await response.json();
            console.log(data);
            if (!data.success && data.message) {
                toast({ text: data.message, buttonText: "OK", state: ToastState.ERROR, lifetime: 5 });
            }

            login(data.user);
            setLocation("/");
            toast({ text: "Byl jste úspěšně přihlášen", buttonText: "OK", state: ToastState.SUCCESS, lifetime: 5 });
        } catch (e) {
            toast({ text: "Nastala neočekávaná chyba", buttonText: "OK", state: ToastState.ERROR, lifetime: 5 });
        } finally {
            setIsLoading(false)
        }
    };

    function onEmailChange(Email: string) {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const EmailValid = regex.test(Email);
        setEmailVal(EmailValid)
        setUserEmail(Email)
    };

    function onPasswordChange(Password: string) {
        setUserPassword(Password)
    };

    return (
        <Container>

            <StyledSection>
                <LoginForm onSubmit={sendLogInfo}>
                    <LoginFormTitle>Přihlásit se</LoginFormTitle>

                    <Input InputPlaceholder="Email" InputType="email" InputValue={onEmailChange} />
                    <Input InputPlaceholder="Heslo" InputType="password" InputValue={onPasswordChange} />

                    <ErrorMess>{errorMess}</ErrorMess>

                    <Button isLoading={isLoading} title="Přihlásit se" />

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
                <StyledP>
                    Bohužel nic neuvidíte, ale chcete se vrátit
                    <Link href="/">
                        <Reg>
                            úvodní stránku
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
    padding-top: 15px;
    @media (max-width: 420px) {
        width: 300px;
    }
    @media (max-width: 280px) {
        width: 250px;
    }
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