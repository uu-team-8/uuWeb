import { useState } from "react";
import { SendData, GENERAL_ERROR_MESSAGE } from "./network";

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

interface LoggedUser {
    id: number
    name: string
    token: string
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
        localStorage.setItem("auth", JSON.stringify(user));
        setLoggedUser(user);
    }

    async function logout() {
        try {
            await SendData("/auth/logout", {}, loggedUser?.token, "POST");
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