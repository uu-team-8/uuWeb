import type { FC } from "react";
import styled from "@emotion/styled";
import Toast from "./toast";
import { useToastContext } from "../context/toast";

const ToastRenderer: FC = () => {
    const { toast, setToast } = useToastContext();

    return (
        <>
        {toast ?
        <Wrapper>
            <Toast {...toast} />
        </Wrapper>

            :

        null

        }
        </>
    );
}


const Wrapper = styled.div`
    position: fixed;
    transform: translateX(-50%);
    z-index: 10;
    top: 0;
    left: 50%;
    
    min-width: 400px;
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export default ToastRenderer;