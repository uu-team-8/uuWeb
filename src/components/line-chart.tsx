import type { FC } from "react";
import { useEffect, useRef } from "react";

import styled from "@emotion/styled";

import { Chart } from "chart.js";

interface LineChartProps {
    data: any
}

const LineChart: FC<LineChartProps> = ({ data }) => {
    let canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (!canvasRef) return;
        const ctx = canvasRef!.current!.getContext("2d");
        canvasRef = new Chart(ctx, {
            type: 'line',
            data: data,
            options: {
                scales: {
                    y: {
                        stacked: true
                    }
                }
            }
        });
    }, [])

    return (
        <Wrapper>
            <canvas ref={canvasRef} />
        </Wrapper>
    )
}

const Wrapper = styled("div")`

`

export default LineChart;