import { createContext } from "react";
import { useStorage } from "../hooks/useStorage";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [auth, setAuth] = useStorage('session', {});
    const loginUser = (data) => setAuth(data);
    const logoutUser = () => setAuth({});

    return (
        <AuthContext.Provider value={{ user: auth, loginUser, logoutUser }}>
            {children}
        </AuthContext.Provider>
    );
};