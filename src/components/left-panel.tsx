import type { FC } from "react";
import { useState } from "react";
import styled from "@emotion/styled";

import accountCircleIcon from "../assets/icons/account-circle.svg";

interface LeftPanelProps {
    children: JSX.Element | JSX.Element[]
}

const LeftPanel: FC<LeftPanelProps> = ({ children }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <LeftPanelWrapper expanded={expanded}>
            {children}
            <Footer>
                <img src={accountCircleIcon} alt="profile-picture" />
                <p>Vojtěch Novotný</p>
            </Footer>
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

const Footer = styled("div")`
    width: 224px;
    height: 64px;
    display: flex;
`

const ExpandButton = styled("div")`
    width: 22px;
    height: 24px;
    background-color: ${p => p.theme.gray.gray25};
`

export default LeftPanel;