import type { FC } from "react";
import styled from "@emotion/styled";

interface ListItemHeaderProps {
    title: string
    onClick: () => void
}

const ListItemHeader: FC<ListItemHeaderProps> = ({ title, onClick }) => {
    return (
        <Wrapper>
            <h3>{title}</h3>
            <AddButton onClick={onClick}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="m480 756 160-160H320l160 160ZM200 936q-33 0-56.5-23.5T120 856V296q0-33 23.5-56.5T200 216h560q33 0 56.5 23.5T840 296v560q0 33-23.5 56.5T760 936H200Zm560-520V296H200v120h560Zm-560 80v360h560V496H200Zm0-80V296v120Z" /></svg>
            </AddButton>
        </Wrapper>
    )
}

const Wrapper = styled("div")`
    font-size: 24px;
    padding: 16px;
    border-bottom: 1px solid ${p => p.theme.UI.white};
`

const AddButton = styled("div")`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin-left: 16px;
    cursor: pointer;

    > svg {
        fill: ${p => p.theme.gray.gray75};
        transform: rotate(${p => p.expanded ? "90deg" : "-90deg"});
    }
    
    &:hover {
        background-color: ${p => p.theme.gray.gray15};
    }

    &:active {
        background-color: ${p => p.theme.gray.gray20};
    }
`

export default ListItemHeader;