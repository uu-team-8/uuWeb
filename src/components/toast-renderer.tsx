import type { FC } from "react";
import { useContext } from "react";
import styled from "@emotion/styled";
import Toast from "./toast";
import { useToastContext } from "./toast-context";


const ToastRenderer: FC = () => {
    const {toasts, setToasts} = useToastContext();

    return (
        <div>
        {toasts.map((toast, index) => (
            <Toast {...toast}/>
        ))}
        </div>
      );
    }

export default ToastRenderer;