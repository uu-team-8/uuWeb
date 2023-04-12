import type { FC } from "react";
import { Link } from "wouter";

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
        </>
    )
}

export default Home;