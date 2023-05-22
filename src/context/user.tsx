import type { FC } from "react";
import type { LoggedUser } from "../types";
import createGenericContext from "./create-generic-context";

interface UserContextProps {
    user: LoggedUser | null
    logout: () => void
}

interface UserProviderProps {
    user: LoggedUser | null
    logout: () => void
    children: JSX.Element | JSX.Element[]
}

const [useUserContext, UserContext] = createGenericContext<UserContextProps>();

const UserProvider: FC<UserProviderProps> = ({ user, logout, children }) => {
    return (
        <UserContext value={{ user, logout }}>
            {children}
        </UserContext>
    );
};

export { useUserContext, UserProvider };
