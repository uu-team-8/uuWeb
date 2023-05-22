import type { FC } from "react";
import styled from "@emotion/styled";
import spinnerImage from "../assets/images/spinner.png"

interface ButtonProps {
    title: string
    isLoading: boolean
}

const Button: FC<ButtonProps> = ({ title, isLoading }) => {

    return (
        <StyledButton isLoading={isLoading}>
            {isLoading ? <Spinner /> : title}
        </StyledButton>
    )
}

const StyledButton = styled.button<{ isLoading: boolean }>`
  border-color: transparent;
  position: relative;
  overflow: hidden;
  text-align: center;

  color: white;
  background-color: black;

  font-weight: 300;
  font-size: 20px;

  border-radius: 15px;
  margin-top: 40px;
  height: 54px;
  width: 402px;

  @media (max-width: 420px) {
    width: 300px;
  }
  @media (max-width: 280px) {
    width: 250px;
  }
  

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  &:active {
    opacity: 0.6;
  }
`;

const Spinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;

  &::before {
    content: "";
    width: 30px;
    height: 30px;
    border-radius: 50%;
    
    border: 2px solid white;
    border-top-color: transparent;
    background-image: url(${spinnerImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    animation: spin 1s infinite linear;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
export default Button;