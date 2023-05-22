import  { useState, type FC } from "react";
import styled from "@emotion/styled";

import { useAuth } from "../auth";
import { Modal } from "./modal";

import Icon from "../assets/icons/logout.svg";

interface ButtonProps {
  expanded: boolean
}

const LogoutButton: FC<ButtonProps> = ({ expanded }) => {
  const [loggedUser, logout] = useAuth();
  const[isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal= () => setIsModalOpen(!isModalOpen)

  return (
    <>
    {expanded ?
      <>
        <StyledButton onClick={toggleModal}>Odhlásit se</StyledButton>
        <Modal title={ "Odhlášení"} text={"Opravdu se chcete odhlásit?"} buttonText={"Odhlásit"}  isOpen={isModalOpen} OnClose={toggleModal} OnClick={logout}/>
      </>

      :
      
      <>
        <LogoutIcon src={Icon} onClick={toggleModal} />
        <Modal title={ "Odhlášení"} text={"Opravdu se chcete odhlásit?"} buttonText={"Odhlásit"}  isOpen={isModalOpen} OnClose={toggleModal} OnClick={logout}/>
      </>
    } 
   </>
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