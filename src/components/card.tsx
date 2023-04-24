// @ts-nocheck
import type { FC } from "react";
import styled from "@emotion/styled";

interface CardProps {
    title: string
}

const Card: FC<CardProps> = ({ title }) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <Divider />
        </Wrapper>
    )
}

const Wrapper = styled("div")`
    min-width: 479px;
    min-height: 378px;
    position: relative;
    padding: 16px;
    border-radius: 4px;
    background-color: ${p => p.theme.gray.gray800};
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12);
`

const Title = styled("h2")`
    color: ${p => p.theme.UI.white};
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.25px;
`

const Divider = styled("div")`
    width: 100%;
    height: 1px;
    background-color: ${p => p.theme.gray.gray700};
    position: absolute;
    top: 64px;
    left: 0px;
`

export default Card;