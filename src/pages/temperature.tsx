import type { FC } from "react";
import { useState } from "react";
import styled from "@emotion/styled";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import LineChart from "../components/line-chart";

import { useAuth } from "../auth";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom' as const,
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: { "January": 1000 },
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: { "February": 1000 },
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

const Temperature: FC = () => {
    const [loggedUser] = useAuth();
    const [chartData, setChartData] = useState();

    return (
        <Wrapper>
            <H1>Teplota</H1>
            {!loggedUser ?

                <TextContainer>
                    <p>Pro zobrazení dat se musíte přihlásit !</p>
                </TextContainer>

                :

                <GraphContainer>
                    <Line options={options} data={data} />
                </GraphContainer>
            }
        </Wrapper>
    )
}

const Wrapper = styled("div")`
    width: 100%;
    height: 100%;
`

const H1 = styled("h1")`
    color: ${p => p.theme.UI.white};
    font-weight: 700;
    font-size: 130px;
    line-height: 26px;
    letter-spacing: -0.25px;
    text-align: center;
    margin-top: 120px;
    text-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);

    @media (max-width: 420px) {
        font-size: 55px;
    }
    @media (max-width: 280px) {
        font-size: 40px;
    }
`

const GraphContainer = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 80px;
`

const TextContainer = styled("div")`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 160px;
`

export default Temperature;