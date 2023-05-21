import type { FC } from "react";
import styled from "@emotion/styled";
import { useState, FormEvent } from "react";
import { useLocation, Link } from "wouter";

import Input from "../components/input";
import Button from "../components/button";
import { useToast, ToastState } from "../components/toast";

interface Response {
    success: boolean,
    message: string
}

const Register: FC = () => {
    const [userName, setUserName] = useState("");
    const [userSurName, setSurUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userPasswordCheck, setUserPasswordCheck] = useState("");
    const [errorMess, setErrorMess] = useState("");
    const [location, setLocation] = useLocation();
    const [emailVal, setEmailVal] = useState(true);
    const [passwordStrenght, setPasswordStrenght] = useState(true);
    const toast = useToast();

    async function sendRegInfo(e: FormEvent) {
        e.preventDefault();

        if (userName == "" || userSurName == "" || userPassword == "" || userPasswordCheck == "" || userEmail == "") {
            setErrorMess("Vyplňte všechna pole");
            return;
        } else if (userPassword != userPasswordCheck) {
            setErrorMess("Hesla se neshodují");
            return;
        } else if (!emailVal) {
            setErrorMess("Neplatný email");
            return;
        } else if (!passwordStrenght) {
            setErrorMess("Heslo musí obsahovat nejméně 8 znaků, jedno velké písmeno, jedno malé písmeno, jedno číslo a jeden speciální znak!")
            return
        };

        try {
            const response = await fetch("http://localhost:3000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name: userName, surname: userSurName, email: userEmail, password: userPassword })
            });

            const res: Response = await response.json();
            if (!res.success) {
                setErrorMess(res.message);
                return;
            }

            toast({ text: "Účet byl vytvořen.", buttonText: "OK", state: ToastState.SUCCESS, lifetime: 5 });
            setLocation("/prihlaseni");
        } catch (e) {
            console.log(e);
        }
    };

    function EmailVal(Email: string) {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const EmailValid = regex.test(Email);
        setEmailVal(EmailValid);
        setUserEmail(Email);
    };

    function Password(Password: string) {
        const regex = /(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
        const PasswordStrenght = regex.test(Password);
        setPasswordStrenght(PasswordStrenght);
        setUserPassword(Password);
    };

    function PasswordCheck(PasswordCheck: string) {
        setUserPasswordCheck(PasswordCheck);
    };

    function Name(Name: string) {
        setUserName(Name);
    };

    function SurName(SurName: string) {
        setSurUserName(SurName);
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
    align-items: center;
    margin-top: 26px;
    margin-bottom: 100px;
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