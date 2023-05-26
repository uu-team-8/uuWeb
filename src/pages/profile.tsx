import type { FC } from "react";

import styled from "@emotion/styled";

import ListItemHeader from "../components/list-item-header";
import ListItem from "../components/list-item";




const Profile: FC = () => {
    return (
        <Wrapper>
            <Top>
                <img src="https://thumbs.dreamstime.com/b/positive-business-guy-smiling-crossing-hands-standing-studio-confident-businessman-white-background-isolated-166659589.jpg" alt="profile-image" />
                <h3>Vojtěch Novotný</h3>
                <p>Unicorn University</p>
            </Top>

            <ListItemsWrapper>
                <ListItemHeader title="Gateways" />
                <ListItem image="https://thumbs.dreamstime.com/b/positive-business-guy-smiling-crossing-hands-standing-studio-confident-businessman-white-background-isolated-166659589.jpg" label="Arduino, pracovna" />
                <ListItem image="https://thumbs.dreamstime.com/b/positive-business-guy-smiling-crossing-hands-standing-studio-confident-businessman-white-background-isolated-166659589.jpg" label="Arduino, pracovna" />
                <ListItem image="https://thumbs.dreamstime.com/b/positive-business-guy-smiling-crossing-hands-standing-studio-confident-businessman-white-background-isolated-166659589.jpg" label="Arduino, pracovna" />
            </ListItemsWrapper>

            <ListItemsWrapper>
                <ListItemHeader title="Zaměstnanci" />
                <ListItem image="https://thumbs.dreamstime.com/b/positive-business-guy-smiling-crossing-hands-standing-studio-confident-businessman-white-background-isolated-166659589.jpg" label="Arduino, pracovna" />
                <ListItem image="https://thumbs.dreamstime.com/b/positive-business-guy-smiling-crossing-hands-standing-studio-confident-businessman-white-background-isolated-166659589.jpg" label="Arduino, pracovna" />
                <ListItem image="https://thumbs.dreamstime.com/b/positive-business-guy-smiling-crossing-hands-standing-studio-confident-businessman-white-background-isolated-166659589.jpg" label="Arduino, pracovna" />
            </ListItemsWrapper>
        </Wrapper>
    )
}

const Wrapper = styled("div")`
    width: 100%;
    min-height: 100%;
    padding: 80px 80px;
`

const Top = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: center;

    > img {
        width: 160px;
        height: 160px;
        object-fit: cover;
        border-radius: 99px;
    }

    > h3 {
        font-size: 24px;
        padding: 8px 0px;
    }

    > p {
        font-size: 14px;
        color: ${p => p.theme.gray.gray75};
    }
`

const ListItemsWrapper = styled("div")`
    background-color: ${p => p.theme.gray.gray800};
    border-radius: 4px;
    margin-top: 32px;
    margin-bottom: 32px;
`

export default Profile;