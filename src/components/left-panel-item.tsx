// @ts-nocheck
import type { FC } from "react";
import styled from "@emotion/styled";
import { Link, useLocation } from "wouter";

interface LeftPanelItemProps {
    icon: JSX.Element
    label: string
    href: string
    large?: boolean
}

const LeftPanelItem: FC<LeftPanelItemProps> = ({ icon, label, href, large }) => {
    const [location] = useLocation();

    return (
        <Link href={href}>
            <Wrapper large={large}>
                <Content selected={location == href} large={large}>
                    {icon}
                    <p>{label}</p>
                </Content>
            </Wrapper>
        </Link>
    )
}

const Wrapper = styled("div") <{ large?: boolean }>`
    width: 228px;
    height: ${p => p.large ? "64px" : "48px"};
    padding: 8px 0px;
    cursor: pointer;
    display: flex;
    align-items: center;

    svg {
        width: ${p => p.large ? "36px" : "24px"};
        height: ${p => p.large ? "36px" : "24px"};
    }

    &:hover {
        background-color: ${p => p.theme.gray.gray15};
    }

    &:active {
        background-color: ${p => p.theme.gray.gray20};
    }
`

const SelectedIndicator = styled("div")`
    width: 3px;
    height: 32px;
`

const Content = styled("div") <{ selected: boolean, large?: boolean }>`
    display: flex;
    align-items: center;
    color: ${p => p.selected ? p.theme.UI.white : p.theme.gray.gray75};

    > div {
        background-color: ${p => p.selected ? p.theme.brand.aqua : "transparent"};
    }

    > svg {
        fill: ${p => p.selected ? p.theme.UI.white : p.theme.gray.gray75};
        margin-left: ${p => p.large ? "15px" : "21px"};
    }

    > p {
        margin-left: 6px;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
    }
`

export default LeftPanelItem;