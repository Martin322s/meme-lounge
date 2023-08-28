import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import * as userService from '../services/authService';
import { Navigate } from "react-router-dom";

export const Logout = () => {
    const { user, logoutUser } = useContext(AuthContext);

    useEffect(() => {
        userService.logoutUser(user.accessToken);
        logoutUser();
    }, [user.accessToken, logoutUser]);

    return <Navigate to="/" />
};