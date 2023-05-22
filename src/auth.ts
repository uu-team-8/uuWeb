import { useState } from "react";
import { SendData, GENERAL_ERROR_MESSAGE } from "./network";
import { useUserContext } from "./context/user";

import type { LoggedUser } from "./types";

export function emergencyLogout() {
    localStorage.removeItem("auth");
    location.replace("/");
}

export function loadUserFromLocalStorage(): LoggedUser | null {
    try {
        const userFromLocalStorage = localStorage.getItem("auth");
        if (!userFromLocalStorage) {
            return null;
        }

        return JSON.parse(userFromLocalStorage);
    } catch (e) {
        console.error(e);
        return null;
    }
}

export function useAuthBase(): [
    LoggedUser | null,
    (newUser: LoggedUser) => void,
    () => void
] {
    const [loggedUser, setLoggedUser] = useState<LoggedUser | null>(
        loadUserFromLocalStorage()
    );

    function login(user: LoggedUser) {
        console.log(user);
        localStorage.setItem("auth", JSON.stringify(user.token));
        setLoggedUser(user);
    }

    async function logout() {
        try {
            await SendData("/logout", {}, loggedUser?.token, "POST");
            location.replace("/");
            localStorage.removeItem("auth");
            localStorage.removeItem("className");
            setLoggedUser(null);
        } catch (e) {
            alert(GENERAL_ERROR_MESSAGE);
        }
    }

    return [loggedUser, login, logout];
}

export function useAuth(): [LoggedUser, () => void] {
    const auth = useUserContext();

    return [auth.user!, auth.logout];
}
