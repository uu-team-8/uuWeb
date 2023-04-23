import type { FC } from "react";
import styled from "@emotion/styled";
import { Link, useLocation } from "wouter";

interface LeftPanelItemProps {
    icon: JSX.Element
    label: string
    href: string
}

const LeftPanelItem: FC<LeftPanelItemProps> = ({ icon, label, href }) => {
    const [location] = useLocation();

    return (
        <Link href={href}>
            <Wrapper>
                <Content selected={location == href}>
                    <SelectedIndicator />
                    {icon}
                    <p>{label}</p>
                </Content>
            </Wrapper>
        </Link>
    )
}

const Wrapper = styled("div")`
    width: 224px;
    height: 48px;
    padding: 8px 0px;
    cursor: pointer;
`

const SelectedIndicator = styled("div")`
    width: 3px;
    height: 32px;
`

const Content = styled("div") <{ selected: boolean }>`
    display: flex;
    align-items: center;
    color: ${p => p.selected ? p.theme.UI.white : p.theme.gray.gray75};

    > div {
        background-color: ${p => p.selected ? p.theme.brand.aqua : "transparent"};
    }

    > svg {
        width: 24px;
        height: 24px;
        fill: ${p => p.selected ? p.theme.UI.white : p.theme.gray.gray75};
        margin-left: 21px;
    }

    > p {
        margin-left: 6px;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
    }
`

export default LeftPanelItem;