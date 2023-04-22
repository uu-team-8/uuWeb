import type { FC } from "react";
import { useState } from "react";
import styled from "@emotion/styled";
import { Link, useLocation } from "wouter";

interface LeftPanelProps {
    children: JSX.Element | JSX.Element[]
}

const LeftPanel: FC<LeftPanelProps> = ({ children }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <LeftPanelWrapper expanded={expanded}>
            {children}
            <ExpandButton onClick={() => setExpanded(!expanded)}></ExpandButton>
        </LeftPanelWrapper>
    )
}

const LeftPanelWrapper = styled("div") <{ expanded: boolean }>`
    min-width: ${p => p.expanded ? "228px" : "72px"};
    max-width: ${p => p.expanded ? "228px" : "72px"};
    height: 100vh;
    background-color: ${p => p.theme.gray.gray10};
    overflow: hidden;

    p {
        display: ${p => !p.expanded ? "none" : "block"};
    }
`

const ExpandButton = styled("div")`
    width: 22px;
    height: 24px;
    background-color: ${p => p.theme.gray.gray25};
`

interface LeftPanelItemProps {
    icon: JSX.Element
    label: string
    href: string
}

export const LeftPanelItem: FC<LeftPanelItemProps> = ({ icon, label, href }) => {
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

export default LeftPanel;