import type { FC } from "react";
import styled from "@emotion/styled";

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
  position: relative;
  overflow: hidden;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  &:active {
    opacity: 0.6;
  }
`;

const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  &::before {
    content: "";
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid white;
    border-top-color: transparent;
    animation: spin 1s infinite linear;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
export default Button;