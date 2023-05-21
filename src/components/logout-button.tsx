import type { FC } from "react";
import styled from "@emotion/styled";
import { useLocation } from "wouter";
import { useState, useEffect } from "react";

import Icon from "../assets/icons/logout.svg";

import { Session } from "../components/left-panel";

interface ButtonProps {
    expanded: boolean
}

const LogoutButton: FC<ButtonProps> = ({ expanded }) => {
  const [location, setLocation] = useLocation();
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

  async function Logout (token: string) {
    localStorage.clear();

    try {    
      const response = await fetch("http://localhost:3000/logout", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({ token: token })
      });

      setLocation("/prihlaseni")

      } catch (e) {
      console.log(e);
  }
  };

    return (
      expanded ? 
      <StyledButton onClick={() => Logout(userSess[0].token)}>Odhlásit se</StyledButton>  
      :
      <LogoutIcon  src={Icon} onClick={() => Logout(userSess[0].token)}/>
    )
}

const LogoutIcon = styled("img")`
    height: 40px;
    width: 50px;
    margin: 10px 0px 10px 10px;
    cursor: pointer;

    &:hover{
      opacity: 0.8;
  }
    &:active {
      opacity: 0.6;
  }
`
const StyledButton = styled("button")`
    text-align: center;
    color: white;
    font-weight: 300;
    font-size: 15px;
    border-radius: 15px;
    border-color: transparent;
    background-color: black;  
    height: 40px;
    max-width: 100%;
    margin: 10px 10px 10px 10px;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  &:active {
    opacity: 0.6;
  }
`

export default LogoutButton;