import type { FC } from "react";
import { useState } from "react";
import styled from "@emotion/styled";
import LeftPanelItem from "./left-panel-item";
import Spacer from "./spacer";

interface LeftPanelProps {
    children: JSX.Element | JSX.Element[]
}

const LeftPanel: FC<LeftPanelProps> = ({ children }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <LeftPanelWrapper expanded={expanded}>
            {children}
            <Spacer />
            <LeftPanelItem icon={<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M222 801q63-40 124.5-60.5T480 720q72 0 134 20.5T739 801q44-54 62.5-109T820 576q0-145-97.5-242.5T480 236q-145 0-242.5 97.5T140 576q0 61 19 116t63 109Zm257.814-195Q422 606 382.5 566.314q-39.5-39.686-39.5-97.5t39.686-97.314q39.686-39.5 97.5-39.5t97.314 39.686q39.5 39.686 39.5 97.5T577.314 566.5q-39.686 39.5-97.5 39.5Zm-.219 370q-83.146 0-156.275-31.5t-127.225-86Q142 804 111 731.159 80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.5q-54 54.5-127.129 86T479.595 976Z" /></svg>} label="Vojtěch Novotný" href="/profil" large />
        </LeftPanelWrapper>
    )
}

const LeftPanelWrapper = styled("div") <{ expanded: boolean }>`
    min-width: ${p => p.expanded ? "228px" : "72px"};
    max-width: ${p => p.expanded ? "228px" : "72px"};
    height: 100vh;
    background-color: ${p => p.theme.gray.gray10};
    overflow: hidden;
    display: flex;
    flex-direction: column;

    p {
        display: ${p => !p.expanded ? "none" : "block"};
    }
`

const ExpandButton = styled("div") <{ expanded: boolean }>`
    width: 22px;
    height: 24px;
    background-color: ${p => p.theme.gray.gray25};
`

export default LeftPanel;