import type { FC } from "react";
import { Link } from "wouter";

const Register: FC = () => {
    return (
        <>
            <p>Registrace</p>
            <Link href="/">
                <button type="button">
                    Home
                </button>
            </Link>
            <Link href="/prihlaseni">
                <button type="button">
                    Přihlášení
                </button>
            </Link>
        </>
    )
}

export default Register;