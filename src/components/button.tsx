import type { FC } from "react";
import styled from "@emotion/styled";

interface ButtonProps {
    title: string
}

const Button: FC<ButtonProps> = ({ title }) => {


    return (
        <StyledButton>{title}</StyledButton>  
    )
}

const StyledButton = styled("button")`
    margin-top: 40px;
    text-align: center;
    color: white;
    font-weight: 300;
    font-size: 20px;
    border-radius: 15px;
    border-color: transparent;
    background-color: black;
    height: 54px;
    width: 402px;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  &:active {
    opacity: 0.6;
  }
`

export default Button;