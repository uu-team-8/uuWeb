import type { FC } from "react";
import { Link } from "wouter";
import styled from "@emotion/styled";

const Home: FC = () => {
    return (
        <Container>
            <StyledHeader>
                <UserName>David</UserName>
            </StyledHeader>
            <>
                <DashboardTitle>Dashboard</DashboardTitle>
            </>

            <Card>

            </Card>

            <Card>

            </Card>
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
const UserName = styled.p`
    color: ${p => p.theme.UI.white};
`

const DashboardTitle = styled.h1`
    color: ${p => p.theme.UI.white};
`
const Card = styled.div`
    width: 479px;
    height: 378px;
    background-color: ${p => p.theme.UI.gray20};
`
export default Home;