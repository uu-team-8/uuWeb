import  { type FC, useState } from "react";
import  styled  from "@emotion/styled";
import { keyframes } from "@emotion/react";

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
    const {toast, setToast} = useToastContext();
    const [lifeTimeID, setLifeTimeID] = useState(0)

    return ({ text, buttonText= "Ok", state, lifetime = 5 }: ToastInvokerProps) => {
        let uniqueId = Date.now().toString(36) + Math.random().toString(36).substring(2);

        function remove() {
            setToast(null)
        };    
        
        if (lifetime > 0) {
            clearTimeout(lifeTimeID)
            const timeOutID = setTimeout(() => remove(), lifetime * 1000) 
            setLifeTimeID(timeOutID)
        };
        
        setToast({id: uniqueId, text: text, buttonText: buttonText, state: state, onClose: () => remove()});
    };
};

const Toast: FC<ToastProps> = ({ text, buttonText, state, onClose }) => {

    return (
        <Wrapper>
            <ColloredDiv state={state == ToastState.ERROR}/>
            <Icon src={state == ToastState.ERROR ? error : success} alt="ICON"/>
            <StyledParagraph>{text}</StyledParagraph>
            <StyledButton onClick={() => onClose()}>{buttonText}</StyledButton>
        </Wrapper>
    )
}

export default Toast;

const slideDown = keyframes`
 0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  } 
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    padding-left: 1px;
    width: 400px;
    min-height: 62px;
    background: #4D4D4D;
    border-radius: 6px;
    animation: ${slideDown} 0.5s ease;
`

const ColloredDiv = styled.div <{ state: boolean }>`
    position: fixed;
    background-color: ${p => p.state ? "#EB5545" : "#68BD64"};
    width: 6px;
    min-height: 100%;
    border-radius: 8px;
`

const Icon = styled.img`
    margin-left: 15px;
`

const StyledButton = styled.button`
    padding: 8px 16px;
    gap: 8px;
    width: 87px;
    height: 40px;
    background: #606060;
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.16);
    border-radius: 40px;
    margin-left: 80px;
`

const StyledParagraph = styled.p`
    width: 150px;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #FFFFFF;
    margin-left: 20px;
    padding: 20px 0px 20px 0px;
`