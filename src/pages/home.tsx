import type { FC } from "react";
import { Link } from "wouter";

import SpinningSchnitzel from "../components/spinning-schnitzel";

const Home: FC = () => {
    return (
        <>
            <p>Home</p>
            <Link href="/prihlaseni">
                <button type="button">
                    prihlaseni
                </button>
            </Link>
            <Link href="/registrace">
                <button type="button">
                    registrace
                </button>
            </Link>
            <SpinningSchnitzel />
        </>
    )
}

export default Home;