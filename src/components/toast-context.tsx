import type { FC, Dispatch, SetStateAction} from "react";
import { useState } from "react";
import createGenericContext from "./create-generic-context";

import { ToastProps } from "./toast";

interface ToastContextProps {
    toasts: ToastProps[];
    setToasts: Dispatch<SetStateAction<ToastProps[]>>
}

interface ToastProviderProps{
    children: JSX.Element | JSX.Element[]
}

const [useToastContext, ToastContext] = createGenericContext<ToastContextProps>();

const ToastProvider: FC<ToastProviderProps> = (props) => {
    const [toasts, setToasts] = useState<ToastProps[]>([])

    return (
        <ToastContext value={{toasts: toasts, setToasts: setToasts}}>
            {props.children}
        </ToastContext>
    );
};

export { useToastContext , ToastProvider };


