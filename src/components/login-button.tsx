import type { FC } from "react";
import styled from "@emotion/styled";
import { useLocation } from "wouter";

interface ButtonProps {
    expanded: boolean
}

const LoginButton: FC<ButtonProps> = ({ expanded }) => {
  const [location, setLocation] = useLocation();

    return (
      expanded ? 
      <StyledButton onClick={() => setLocation("/prihlaseni")}>Přihlásit se</StyledButton>  
      :
      <Space/>
    )
}

const Space = styled("div")`
    height: 40px;
    width: 100px;
    margin: 10px 0px 10px 10px;
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
    width: 100px;
    margin: 10px 0px 10px 10px;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  &:active {
    opacity: 0.6;
  }
`

export default LoginButton;