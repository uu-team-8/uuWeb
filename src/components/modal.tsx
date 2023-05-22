import  styled  from "@emotion/styled";

interface ModalProps {  
    title: string;
    text: string;
    isOpen: boolean;
    onClose: () => void;
    
}

export const Modal = ({title, text, isOpen, onClose, }: ModalProps) => {


    return(
        <>
        {isOpen ?   
        <ModalContainer>
            <ModalOverlay/>
            <ModalBox>
            <ModalTitle>{title}</ModalTitle>
            <ModalDescription>{text}</ModalDescription>
                <ButtonContainer>
                <CancelButton onClick={() => onClose()}>Zrušit</CancelButton>
                <CloseButton>Zahodit změny</CloseButton>
                </ButtonContainer>
            </ModalBox>
        </ModalContainer>

         :   

        null
        }
        </>
    )

};

const ModalContainer = styled("div")`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    z-index: +1;
`;
  
  const ModalOverlay = styled("div")`
    position: absolute;
    display: flex;
    flex-direction: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 100% 0%;
    background-color: rgba(0, 0, 0, .8);
`;
  
  const ModalBox = styled("div")`
    position: relative;
    width: 350px;
    height: 174px;
    padding: 26px;
    margin-bottom: 10%;
    background: #E3E3E3;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08), 0px 4px 20px rgba(0, 0, 0, 0.12);
    border-radius: 14px;
`;
  
const ModalTitle = styled("h1")`
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #0F0E12;
`;

const ModalDescription = styled("p")`
    font-weight: 300;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    color: #7F7F7F;
`;

const ButtonContainer = styled("div")`
    display: flex;
    flex-direction: row;
`;

const CloseButton = styled("button")`
    display: flex;
    text-align: center;
    justify-content: center;
    flex-direction: center;
    padding: 12px;
    width: 142px;
    height: 42px;
    background: #DE3C30;
    border-radius: 8px;
    margin-left: 14px;
    font-weight: 300;
    font-size: 16px;
    line-height: 18px;
`;

const CancelButton = styled(CloseButton)`
    background: #FFFFFF; 
    color: #0F0E12;
`;
