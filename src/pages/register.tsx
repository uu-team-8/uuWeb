import type { FC } from "react";
import type { Response } from "../types";

import styled from "@emotion/styled";
import { useState, FormEvent, useEffect } from "react";
import { useLocation, Link } from "wouter";

import Input from "../components/input";
import Button from "../components/button";
import Toast, { useToast, ToastState } from "../components/toast";

import { SendData, GENERAL_ERROR_MESSAGE } from "../network";

const Register: FC = () => {
    const [userName, setUserName] = useState("");
    const [userSurName, setSurUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userPasswordCheck, setUserPasswordCheck] = useState("");
    const [errorMess, setErrorMess] = useState("");
    const [location, setLocation] = useLocation();
    const toast = useToast();

    async function sendRegInfo(e: FormEvent) {
        e.preventDefault();

        if (userName == "" || userSurName == "" || userPassword == "" || userPasswordCheck == "" || userEmail == "") {
            setErrorMess("Vyplňte všechna pole");
            return;
        }
        if (userPassword != userPasswordCheck) {
            setErrorMess("Hesla se neshodují");
            return;
        }

        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const emailValid = emailRegex.test(userEmail);
        if (!emailValid) {
            setErrorMess("Neplatný email");
            return;
        }

        const passwordRegex = /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
        const passwordStrenght = passwordRegex.test(userPassword);
        if (!passwordStrenght) {
            setErrorMess("Heslo musí obsahovat nejméně 8 znaků, jedno velké písmeno, jedno malé písmeno, jedno číslo a jeden speciální znak!")
            return
        }
        ;

        try {
            const response = await SendData("/register", { name: userName + userSurName, email: userEmail, password: userPassword });

            const res: Response = await response.json();
            if (!res.success) {
                setErrorMess(res.message ?? GENERAL_ERROR_MESSAGE);
                return;
            }

            toast({ text: "Účet byl vytvořen.", buttonText: "OK", state: ToastState.SUCCESS, lifetime: 5 });
            setLocation("/prihlaseni");
        } catch (e) {
            console.log(e);
        }
    };

    function EmailVal(email: string) {
        setUserEmail(email);
    };

    function Password(password: string) {
        setUserPassword(password);
    };

    function PasswordCheck(passwordCheck: string) {
        setUserPasswordCheck(passwordCheck);
    };

    function Name(name: string) {
        setUserName(name);
    };

    function SurName(surName: string) {
        setSurUserName(surName);
    };

    return (
        <Container>
            <RegistrationForm onSubmit={sendRegInfo}>
                <RegistrationFormTitle>Registrace</RegistrationFormTitle>

                <Input InputPlaceholder="Jméno" InputType="text" InputValue={Name} />
                <Input InputPlaceholder="Příjmení" InputType="text" InputValue={SurName} />
                <Input InputPlaceholder="Email" InputType="email" InputValue={EmailVal} />
                <Input InputPlaceholder="Heslo" InputType="password" InputValue={Password} />
                <Input InputPlaceholder="Heslo znovu" InputType="password" InputValue={PasswordCheck} />

                <ErrorMess>{errorMess}</ErrorMess>

                <Button title="Registrace" />
            </RegistrationForm>
            <UserAction>
                <StyledP>
                    Máte již účet?
                    <Link href="/prihlaseni"><Log>Přihlašte se</Log></Link>
                </StyledP>
                <StyledP>
                    Bohužel nic neuvidíte, ale chcete se vrátit
                    <Link href="/">
                        <Reg>
                            úvodní stránku
                        </Reg>
                    </Link>
                </StyledP>
            </UserAction>
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

const RegistrationFormTitle = styled("h1")`
  color: ${p => p.theme.UI.white};
  margin-top: 150px;
  margin-bottom: 32px;
  font-weight: 300;
  font-size: 40px;
  text-align: center;
  line-height: 35px;
`

const RegistrationForm = styled("form")`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const ErrorMess = styled("p")`
  margin-top: 20px;
  max-width: 402px;
  color: #EF0107;
`

const UserAction = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 26px;
  margin-bottom: 100px;
`

const Reg = styled("a")`
  color: #1376C0;
  text-decoration: none;
  cursor: pointer;
  margin-left: 3px;
`

const StyledP = styled("p")`
  color: ${p => p.theme.UI.white};
`

const Log = styled("a")`
  color: #1376C0;
  text-decoration: none;
  cursor: pointer;
  margin-left: 3px;
`

export default Register;