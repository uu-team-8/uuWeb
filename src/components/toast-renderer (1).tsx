import { Component, For, useContext } from "solid-js";
import { styled } from "solid-styled-components";
import { BreakPoints } from "@apparently/confio-shared/style-variables";
import Toast from "./toast";
import { ToastContext } from "../context/toast";

interface ToastRendererProps {
    offset?: string
}

const ToastRenderer: Component<ToastRendererProps> = (props) => {
    const [toasts, _] = useContext(ToastContext)!;

    return (
        <Wrapper offset={props.offset ?? "0px"}>
            <For each={Object.keys(toasts)}>
                {toastKey => <Toast {...toasts[toastKey]} />}
            </For>
        </Wrapper>
    );
}

const Wrapper = styled("div") <{ offset: string }>`
    position: fixed;
    left: calc(50% + ${p => p.offset});
    transform: translateX(-50%);
    z-index: 10;
    top: 0;
    
    width: 400px;
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media only screen and (max-width: ${BreakPoints.mobile}) {
        width: 100%;
        padding: 0px 48px;
        left: 50%;
    }        
`;

export default ToastRenderer;