import styled from "@emotion/styled";
import type { FC } from "react";
import { useState, FormEvent } from "react";
import { useLocation, Link } from "wouter";

import  Input  from "../components/input";
import Button from "../components/button";


const Register: FC = () => {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userPasswordCheck, setUserPasswordCheck] = useState("");
    const [errorMess, setErrorMess] = useState("");
    const [location, setLocation] = useLocation();
    const [emailVal, setEmailVal] = useState(true);

    async function sendRegInfo(e: FormEvent){
        e.preventDefault();
    
        if (userName == "" || userPassword == "" || userPasswordCheck == "" || userEmail == "") {
            setErrorMess("Vyplňte všechna pole")
            return
        } else if (userPassword != userPasswordCheck) {
            setErrorMess("Hesla se neshodují")
            return
        } else if (!emailVal) {
            setErrorMess("Neplatný email")
            return
        };
    
    
        const response = await fetch("http://localhost:3000/register", {
          method: "POST",
        body: JSON.stringify({name: userName, email: userEmail, password: userPassword })
        });
        const Validation = await response.json();
        if (!Validation) {
            setErrorMess("Email je již používán")
            return
        } else {
            setLocation("/prihlaseni")
        };
      };

    function EmailVal (Email: string) {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const EmailValid = regex.test(Email);
        setEmailVal(EmailValid)
        setUserEmail(Email)
    };

    function Password(Password: string) {
        setUserPassword(Password)
    };

    function PasswordCheck(PasswordCheck: string) {
        setUserPasswordCheck(PasswordCheck)
    };

    function Name(Name: string) {
        setUserName(Name)
    };

    return (
  
     <Container>   
        <RegistrationForm onSubmit={sendRegInfo}>
        <RegistrationFormTitle>Registrace</RegistrationFormTitle>

        <Input InputPlaceholder="Jméno" InputType="text" InputValue={Name} />
        <Input InputPlaceholder="Email" InputType="email" InputValue={EmailVal} />
        <Input InputPlaceholder="Heslo" InputType="password" InputValue={Password} />
        <Input InputPlaceholder="Heslo znovu" InputType="password" InputValue={PasswordCheck} />

        <ErrorMess>{errorMess}</ErrorMess>

        <Button title="Registrace"/>
    
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

const RegistrationFormTitle = styled("h1") `
    color: ${p => p.theme.UI.white};
    margin-top: 80px;
    margin-bottom: 32px;
    font-weight: 300;
    font-size: 30px;
    text-align: center;
    line-height: 35px;
`

const RegistrationForm = styled("form") `
    display: flex;
    align-items: center;
    flex-direction: column;
`

const ErrorMess = styled("p")`
    margin-top: 10px;
    color: red;
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