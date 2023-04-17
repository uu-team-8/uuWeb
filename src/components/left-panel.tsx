import type { FC } from "react";
import { useState } from "react";
import styled from "@emotion/styled";

const LeftPanel: FC = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Wrapper expanded={expanded}>

        </Wrapper>
    )
}

const Wrapper = styled("div") <{ expanded: boolean }>`
    width: ${p => p.expanded ? "228px" : "72px"};
    height: 100vh;
    background-color: ${p => p.theme.gray.gray10};
`

export default LeftPanel;