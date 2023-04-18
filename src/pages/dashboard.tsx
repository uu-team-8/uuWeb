import type { FC } from "react";
import styled from "@emotion/styled";

const Home: FC = () => {
    return (
        <Wrapper>
            <Title>Dashboard</Title>
            <CardContainer>
                <Card>
                    <CardTitle>Teplota</CardTitle>
                    <Divider />
                </Card>

                <Card>
                    <CardTitle>Vlhkost</CardTitle>
                    <Divider />
                </Card>
            </CardContainer>
        </Wrapper>
    )
}

const Wrapper = styled("div")`
    width: 100%;
    min-height: 100%;
    background-color: ${p => p.theme.gray.gray20};
`

const Title = styled("h1")`
    color: ${p => p.theme.UI.white};
    font-family: "Helvetica";
    font-style: normal;
    font-weight: 700;
    font-size: 130px;
    line-height: 26px;
    letter-spacing: -0.25px;
    text-align: center;
    margin-top: 120px;
`

const CardContainer = styled("div")`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 160px;
`

const Card = styled("div")`
    min-width: 479px;
    min-height: 378px;
    position: relative;
    padding: 16px;
    border-radius: 4px;
    background-color: ${p => p.theme.gray.gray800};
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12);
`

const CardTitle = styled("h2")`
    color: ${p => p.theme.UI.white};
    font-family: "Helvetica";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.25px;
`

const Divider = styled("div")`
    width: 100%;
    height: 1px;
    background-color: ${p => p.theme.gray.gray700};
    position: absolute;
    top: 64px;
    left: 0px;
`

export default Home;