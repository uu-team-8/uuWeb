import type { FC } from "react";
import styled from "@emotion/styled";

interface ListItemHeaderProps {
    title: string
}

const ListItemHeader: FC<ListItemHeaderProps> = ({ title }) => {
    return (
        <Wrapper>
            <h3>{title}</h3>
        </Wrapper>
    )
}

const Wrapper = styled("div")`
    font-size: 24px;
    padding: 16px;
    border-bottom: 1px solid ${p => p.theme.UI.white};
`

export default ListItemHeader;