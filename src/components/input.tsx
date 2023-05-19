import type { FC } from "react";
import styled from "@emotion/styled";
import { useState } from "react";

import eye from "../assets/icons/eye.svg";
import offeye from "../assets/icons/offeye.svg";

interface InputProps {
    InputPlaceholder: string
    InputType: string
    InputValue: (arg: string) => void
}

const Input: FC<InputProps> = ({ InputPlaceholder, InputType, InputValue }) => {
    const [passwordShown, setPasswordShown] = useState(false);
    const [inputValue, setInputValue] = useState("");

    function TogglePassword() {
        setPasswordShown(!passwordShown);
    };

    return (
    <>
    {  InputType == "password"    ?       
        <PassContainer>
            <StyledInput type={passwordShown ? "text" : InputType} placeholder={InputPlaceholder} value={inputValue} onChange={e => {setInputValue(e.target.value), InputValue(e.target.value)} } />
            <PassRev src={passwordShown ? offeye : eye } alt="oko" onClick={() => TogglePassword()} />
        </PassContainer>

                :

                <PassContainer>
                    <StyledInput type={InputType} placeholder={InputPlaceholder} value={inputValue} onChange={e => { setInputValue(e.target.value), InputValue(e.target.value) }} />
                </PassContainer>
            }
        </>
    )
}

const StyledInput = styled("input")`
    margin-top: 14px;
    border-radius: 10px;
    border-color: transparent;
    background-color: #F5F5F5;
    font-size: 18px;
    line-height: 22px;
    height: 54px;
    width: 402px;
    padding-left: 16px;
    padding-right: 16px;
    outline: none;
`

const PassContainer = styled("div")`
    position: relative;
`

const PassRev = styled("img")`
    position: absolute; 
    top: 45%; 
    left: 93%;
    transform: translateX(-50%);
    cursor: pointer;

    &:hover{
      opacity: 0.8;
  }
    &:active {
      opacity: 0.6;
  }
`

export default Input;