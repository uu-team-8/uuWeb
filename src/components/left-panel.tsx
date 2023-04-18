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
    min-width: ${p => p.expanded ? "228px" : "72px"};
    height: 100vh;
    background-color: ${p => p.theme.gray.gray10};
`

const LeftPanelItem: FC = () => {
    return (
        <ItemWrapper>

        </ItemWrapper>
    )
}

const ItemWrapper = styled("div")`
    width: 224px;
    height: 48px;
`

export default LeftPanel;