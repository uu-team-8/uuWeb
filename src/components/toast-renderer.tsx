import type { FC } from "react";
import { useContext } from "react";
import styled from "@emotion/styled";
import Toast from "./toast";
import { useToastContext } from "../context/toast";

const ToastRenderer: FC = () => {
    const { toasts, setToasts } = useToastContext();

    return (
        <Wrapper>
            {toasts.map((toast, index) => (
                <Toast {...toast} />
            ))}
        </Wrapper>
    );
}


const Wrapper = styled.div`
    position: fixed;
    transform: translateX(-50%);
    z-index: 10;
    top: 0;
    
    width: 400px;
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export default ToastRenderer;