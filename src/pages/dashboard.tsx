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
            <CardContainer>
                <Card>
                    <CardTitle>Teplota</CardTitle>
                </Card>

                <Card>
                    <CardTitle>Vlhkost</CardTitle>
                </Card>
            </CardContainer>
        </Container> 
    )
}

const Container = styled.div`
    width: 100%;
    min-height: 100%;
    background-color: ${p => p.theme.gray.gray10};
`

const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    height: 58px;
    width: 100%;                                 
    padding: 20px 70px;   
`

const UserName = styled.p`
    font-weight: 300;
    font-size: 20px;
    margin-left: auto;
    color: ${p => p.theme.UI.white};
`

const DashboardTitle = styled.h1`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 200;
    font-size: 39px;
    color: ${p => p.theme.UI.white};
`
const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

const Card = styled.div`
    width: 479px;
    height: 378px;
    padding: 15px;
    border-radius: 5px;
    margin-top: 200px;
    background-color: ${p => p.theme.gray.grey800};
`
const CardTitle = styled.h2`
    color: ${p => p.theme.UI.white};
`
export default Home;