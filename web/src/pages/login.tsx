import type { FC } from "react";
import { Link } from "wouter";

const Login: FC = () => {
    return (
        <>
            <p>Přihlášení</p>
            <Link href="/">
                <button type="button">
                    Home
                </button>
            </Link>
            <Link href="/Registrace">
                <button type="button">
                    registrace
                </button>
            </Link>
        </>
    )
}

export default Login;