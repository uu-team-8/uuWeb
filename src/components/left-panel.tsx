import type { FC } from "react";
import styled from "@emotion/styled";
import { Link, useLocation } from "wouter";

const LeftPanel = styled("div") <{ expanded: boolean }>`
    min-width: ${p => p.expanded ? "228px" : "72px"};
    height: 100vh;
    background-color: ${p => p.theme.gray.gray10};
`

interface LeftPanelItemProps {
    icon: string
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
                    <img src={icon} alt="icon" />
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
`

const Content = styled("div") <{ selected: boolean }>`
    display: flex;
    align-items: center;
    color: ${p => p.selected ? p.theme.UI.white : p.theme.gray.gray75};

    > img {
        width: 24px;
        height: 24px;
    }
`

const SelectedIndicator = styled("div")`
    width: 3px;
    height: 32px;
    background-color: ${p => p.theme.brand.aqua};
`

export default LeftPanel;