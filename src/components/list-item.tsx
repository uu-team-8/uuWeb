import type { FC } from "react";
import styled from "@emotion/styled";

interface ListItemProps {
    image: string
    label: string
}

const ListItem: FC<ListItemProps> = ({ image, label }) => {
    return (
        <Wrapper>
            <img src={image} alt="list-item-image" />
            <p>{label}</p>
        </Wrapper>
    )
}

const Wrapper = styled("div")`
    display: flex;
    align-items: center;
    padding: 14px 16px;

    > img {
        width: 32px;
        height: 32px;
        border-radius: 99px;
    }

    > p {
        font-size: 16px;
        padding-left: 16px;
    }
`

export default ListItem;