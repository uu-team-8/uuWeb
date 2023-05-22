import type { FC } from "react";
import styled from "@emotion/styled";

import { useAuth } from "../auth";

import Icon from "../assets/icons/logout.svg";

interface ButtonProps {
  expanded: boolean
}

const LogoutButton: FC<ButtonProps> = ({ expanded }) => {
  const [loggedUser, logout] = useAuth();
  console.log(logout);

  return (
    expanded ?
      <StyledButton onClick={logout}>Odhlásit se</StyledButton>
      :
      <LogoutIcon src={Icon} onClick={logout} />
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