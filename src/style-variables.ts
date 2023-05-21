import { css } from "@emotion/react";

export const GlobalStyles = css`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Helvetica";
        font-style: normal;
    }

    html,body {
        width: 100%;
        height: 100%;
        color: #FFFFFF;
        background-color: #333333;
    }
`
export const Theme = {
    UI: {
        black: "#000000",
        white: "#FFFFFF",
        red: "#E22134",
        orange: "#FF9800",
        yellow: "#FFED51",
        green: "#1DB954",
        blue: "#2E77D0",
    },
    gray: {
        gray10: "#181818",
        gray15: "#282828",
        gray20: "#333333",
        gray25: "#404040",
        gray40: "#616161",
        gray45: "#757575",
        gray60: "#9E9E9E",
        gray75: "#BDBDBD",
        gray85: "#D9D9D9",
        gray90: "#EEEEEE",
        gray95: "#F8F8F8",
        gray700: "#616161",
        gray800: "#424242",
    },
    brand: {
        aqua: "#9BF0E1",
        darkAqua: "#69DDC7",
        pink: "#F037A5",
        yellow: "#FDFB9F",
        blue: "#388AED",
    }
}