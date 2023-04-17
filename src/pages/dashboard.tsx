import type { FC } from "react";
import { Link } from "wouter";
import styled from "@emotion/styled";

const Home: FC = () => {
    return (
        <Container>
            <StyledHeader>
                <p>David</p>
            </StyledHeader>
            <>
                <h1>Dashboard</h1>
            </>
        </Container> 
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${p => p.theme.UI.gray10};
`

const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    width: 100%;
`


export default Home;