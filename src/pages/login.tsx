import type { FC } from "react";
import styled from "@emotion/styled";
import { useState, FormEvent } from "react";
import { useLocation, Link } from "wouter";

import Input from "../components/input";
import Button from "../components/button";

interface data {
    success: boolean
    message: string
    token: string
    name: string
    surname: string
}

const Login: FC = () => {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [location, setLocation] = useLocation();
    const [errorMess, setErrorMess] = useState("");
    const [emailVal, setEmailVal] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    async function sendLogInfo(e: FormEvent) {
        e.preventDefault();
        setIsLoading(true);
        if (userPassword == "" || userEmail == "") {
            setErrorMess("Vyplňte všechna pole");
            setIsLoading(false);
            return;
        } else if (!emailVal) {
            setErrorMess("Neplatný email");
            setIsLoading(false);
            return;
        };

        try {
            const response = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email: userEmail, password: userPassword })
            });

            const data: data = await response.json();
            if (!data.success) {
                setErrorMess(data.message);
            }

            localStorage.setItem("session", JSON.stringify(data.token));

            setLocation("/");
        } catch (e) {
            setErrorMess("Nastala neočekávaná chyba, prosím zkuste se přihlásit znovu");
        } finally {
            setIsLoading(false);
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
            {isLoading && <p>Loading...</p>}
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