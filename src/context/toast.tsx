import type { FC, Dispatch, SetStateAction } from "react";
import { useState } from "react";
import createGenericContext from "./create-generic-context";

import { ToastProps, ToastState } from "../components/toast";

interface ToastContextProps {
    toast: ToastProps | null;
    setToast: Dispatch<SetStateAction<ToastProps | null>>
}

interface ToastProviderProps {
    children: JSX.Element | JSX.Element[]
}

const [useToastContext, ToastContext] = createGenericContext<ToastContextProps>();

const ToastProvider: FC<ToastProviderProps> = (props) => {
        const [toast, setToast] = useState<ToastProps | null>(null)

    return (
        <ToastContext value={{ toast: toast, setToast: setToast }}>
            {props.children}
        </ToastContext>
    );
};

export { useToastContext, ToastProvider };
