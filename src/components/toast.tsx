import type { FC } from "react";
import styled from "@emotion/styled";

import error from "../assets/icons/error.svg";
import success from "../assets/icons/success.svg";

import { useToastContext } from "../context/toast";

export enum ToastState {
    ERROR,
    SUCCESS
  }

export interface ToastProps {
    id: string;
    text: string;
    buttonText: string;
    state: ToastState;
    onClose: () => void;
}

export interface ToastInvokerProps {
    text: string;
    buttonText: string;
    state: ToastState;
    lifetime: number;
}

export function useToast() {
    const {toasts, setToasts} = useToastContext();

    return ({ text, buttonText= "Ok", state, lifetime = 3.5 }: ToastInvokerProps) => {

        let uniqueId = Date.now().toString(36) + Math.random().toString(36).substring(2);

        function remove() {
            setToasts(toasts.filter((toast) => !(toast.id === uniqueId)
            )
          );
        };

        if (lifetime > 0) { setTimeout(() => remove(), lifetime * 1000) };

        setToasts([...toasts, {id: uniqueId, text: text, buttonText: buttonText, state: state, onClose: () => remove()}]);
    };
};

const Toast: FC<ToastProps> = ({ text, buttonText, state, onClose }) => {

    return (
        <Wrapper>
            <ColloredDiv state={state == ToastState.ERROR}/>
            <img src={state == ToastState.ERROR ? error : success} alt="ICON"/>
            <StyledParagraph>{text}</StyledParagraph>
            <StyledButton onClick={() => onClose()}>{buttonText}</StyledButton>
        </Wrapper>
    )
}

export default Toast;


const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 400px;
    height: 62px;
    background: #4D4D4D;
    border-radius: 6px;
`

const ColloredDiv = styled.div <{ state: boolean }>`
    background-color: ${p => p.state ? "#EB5545" : "#68BD64"};
    width: 6px;
    height: 62px;   
`

const StyledButton = styled.button`
    padding: 8px 16px;
    gap: 8px;
    width: 87px;
    height: 40px;
    border: 2px solid rgba(255, 255, 255, 0.16);
    border-radius: 40px;
`

const StyledParagraph = styled.p`
    width: 215px;
    height: 22px;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #FFFFFF;
`