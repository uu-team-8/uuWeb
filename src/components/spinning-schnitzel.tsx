import type { FC } from "react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

import schnitzel from "../assets/images/schnitzel.jpg";

const SpinningSchintzel: FC = () => {
    return (
        <Wrapper>
            <img src={schnitzel} alt="schnitzel" />
        </Wrapper>
    )
}

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`

const Wrapper = styled.div`
    > img {
        animation: ${rotate} 5s infinite;
    }
`

export default SpinningSchintzel;