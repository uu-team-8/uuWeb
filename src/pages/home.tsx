import type { FC } from "react";
import { Link } from "wouter";
import styled from "@emotion/styled";

const Home: FC = () => {
    return (
        <>
            <StyledHeader>
                <p>David</p>
            </StyledHeader>
            <>
                <h1>Dashboard</h1>
            </>
        </> 
    )
}

const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
`


export default Home;