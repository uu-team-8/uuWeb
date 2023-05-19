import type { FC } from "react";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Link } from "wouter";

import LeftPanelItem from "./left-panel-item";
import Spacer from "./spacer";
import LogoutButton from "./logout-button";

import logo from "../assets/logo.svg";
import logoText from "../assets/logo-text.svg";

interface LeftPanelProps {
    children: JSX.Element | JSX.Element[]
}

export interface Session {
    id: number;
    token: string;
    name: string;
    surname: string;
}

const LeftPanel: FC<LeftPanelProps> = ({ children }) => {
    const [expanded, setExpanded] = useState(false);
    const [userSess, setUserSess] = useState<Session[]>([]);

    function getUser() {
        const sessionString = localStorage.getItem("session");
        if (!sessionString) {
            return null;
        }

        return setUserSess([JSON.parse(sessionString)]);
    }

    useEffect(() => {
        getUser();
    }, []);

    return (
        <LeftPanelWrapper expanded={expanded}>
            <Link href="/">
                <Header expanded={expanded}>
                    <img src={expanded ? logoText : logo} alt="logo-text" />
                </Header>
            </Link>
            <LeftPanelDivider />
            {children}
            <Spacer />
            <ExpandButton onClick={() => setExpanded(!expanded)} expanded={expanded}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="m480 756 160-160H320l160 160ZM200 936q-33 0-56.5-23.5T120 856V296q0-33 23.5-56.5T200 216h560q33 0 56.5 23.5T840 296v560q0 33-23.5 56.5T760 936H200Zm560-520V296H200v120h560Zm-560 80v360h560V496H200Zm0-80V296v120Z" /></svg>
            </ExpandButton>
            <LeftPanelDivider />
            {userSess[0] == null ?
                <LeftPanelItem icon={<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M222 801q63-40 124.5-60.5T480 720q72 0 134 20.5T739 801q44-54 62.5-109T820 576q0-145-97.5-242.5T480 236q-145 0-242.5 97.5T140 576q0 61 19 116t63 109Zm257.814-195Q422 606 382.5 566.314q-39.5-39.686-39.5-97.5t39.686-97.314q39.686-39.5 97.5-39.5t97.314 39.686q39.5 39.686 39.5 97.5T577.314 566.5q-39.686 39.5-97.5 39.5Zm-.219 370q-83.146 0-156.275-31.5t-127.225-86Q142 804 111 731.159 80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.5q-54 54.5-127.129 86T479.595 976Z" /></svg>} label="Přihlásit se" href="/prihlaseni" large />
                :
                <>
                    {userSess.map((user) =>
                        <LeftPanelItem icon={<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.1 35.25C13.2 33.9167 15.275 32.9083 17.325 32.225C19.375 31.5417 21.6 31.2 24 31.2C26.4 31.2 28.6333 31.5417 30.7 32.225C32.7667 32.9083 34.85 33.9167 36.95 35.25C38.4167 33.45 39.4583 31.6333 40.075 29.8C40.6917 27.9667 41 26.0333 41 24C41 19.1667 39.375 15.125 36.125 11.875C32.875 8.625 28.8333 7 24 7C19.1667 7 15.125 8.625 11.875 11.875C8.625 15.125 7 19.1667 7 24C7 26.0333 7.31667 27.9667 7.95 29.8C8.58333 31.6333 9.63333 33.45 11.1 35.25ZM23.9907 25.5C22.0636 25.5 20.4417 24.8386 19.125 23.5157C17.8083 22.1928 17.15 20.5678 17.15 18.6407C17.15 16.7136 17.8114 15.0917 19.1343 13.775C20.4572 12.4583 22.0822 11.8 24.0093 11.8C25.9364 11.8 27.5583 12.4614 28.875 13.7843C30.1917 15.1072 30.85 16.7322 30.85 18.6593C30.85 20.5864 30.1886 22.2083 28.8657 23.525C27.5428 24.8417 25.9178 25.5 23.9907 25.5ZM23.9798 44C21.2082 44 18.6036 43.475 16.166 42.425C13.7284 41.375 11.608 39.9417 9.80475 38.125C8.00158 36.3083 6.58333 34.186 5.55 31.758C4.51667 29.33 4 26.7356 4 23.975C4 21.2144 4.525 18.6201 5.575 16.1921C6.625 13.764 8.05833 11.65 9.875 9.85C11.6917 8.05 13.814 6.625 16.2421 5.575C18.6701 4.525 21.2644 4 24.025 4C26.7856 4 29.38 4.525 31.808 5.575C34.236 6.625 36.35 8.05 38.15 9.85C39.95 11.65 41.375 13.7667 42.425 16.2C43.475 18.6333 44 21.2289 44 23.9867C44 26.7445 43.475 29.3362 42.425 31.7617C41.375 34.1872 39.95 36.3083 38.15 38.125C36.35 39.9417 34.2312 41.375 31.7935 42.425C29.3559 43.475 26.7513 44 23.9798 44Z" fill="#1DB954" />
                        </svg>
                        } label={user.name + " " + user.surname} href={`/profil/${user.id}`} large />
                    )}
                    <LeftPanelDivider />
                    <LogoutButton expanded={expanded} />
                </>
            }
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
    user-select: none;
    transition: all 1s;

    p {
        display: ${p => !p.expanded ? "none" : "block"};
    }
`

const Header = styled("div") <{ expanded: boolean }>`
    width: 228px;
    height: 81px;
    display: flex;
    align-items: center;
    cursor: pointer;

    > img {
        margin-left: 24px;
    }
`

const ExpandButton = styled("div") <{ expanded: boolean }>`
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

const LeftPanelDivider = styled("div")`
    width: 228px;
    height: 1px;
    margin: 8px 0px;
    background-color: ${p => p.theme.gray.gray25};
`

export default LeftPanel;