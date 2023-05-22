import  styled  from "@emotion/styled";

interface ModalProps {  
    title: string;
    text: string;
    buttonText: string;
    isOpen: boolean;
    OnClose: () => void;
    OnClick: () => void;
}

export const Modal = ({title, text, buttonText, isOpen, OnClose, OnClick }: ModalProps) => {

    return(
        <>
        {isOpen ?   
            <ModalContainer>
                <ModalOverlay/>
                <ModalBox>
                <ModalTitle>{title}</ModalTitle>
                <ModalDescription>{text}</ModalDescription>
                    <ButtonContainer>
                    <CancelButton onClick={() => OnClose()}>Zrušit</CancelButton>
                    <CloseButton onClick={() => OnClick()} >{buttonText}</CloseButton>
                    </ButtonContainer>
                </ModalBox>
            </ModalContainer>

         :   

            null
        }
        </>
    )

};

const ModalContainer = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    z-index: 10;
`
  
  const ModalOverlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 100% 0;
    background-color: rgba(0, 0, 0, .8);
`
  
  const ModalBox = styled.div`  
    position: relative;
    min-width: 350px;
    min-height: 174px;
    padding: 20px 40px;
    background: white;
    border-radius: 14px;
    @media (max-width: 420px) {
        min-width: 300px;
    }
    @media (max-width: 280px) {
        min-width: 250px;
    }
`
  
const ModalTitle = styled.h1`
    font-style: normal;
    font-size: 24px;
    line-height: 24px;
    text-align: center;
    color: black;
    font-weight: bold;
`

const ModalDescription = styled.h2`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 18px;
    text-align: center;
    color: black;
    margin: 10px 0 27px 0;
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const CloseButton = styled.button`
  display: flex;
  text-align: center;
  justify-content: center;
  padding: 15px;
  margin-left: 50px;
  width: 142px;
  min-height: 42px;
  background: white;
  border-radius: 14px;
  font-weight: 300;
  font-size: 16px;
  line-height: 18px;
  border: 1px solid darkred;
  color: darkred;

  &:hover {
    background: darkred;
    border: 1px solid darkred;
    cursor: pointer;
    color: white;
  }

  &:active {
    opacity: 0.8;
  }
`

const CancelButton = styled(CloseButton)`
  background: #FFFFFF;
  color: black;
  margin: 0;
  border: 1px solid black;

  &:hover {
    background: black;
    border: 1px solid black;
    color: white;
    cursor: pointer;
  }
`
