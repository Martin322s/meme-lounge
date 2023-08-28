import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import * as userService from '../services/authService';
import { Navigate } from "react-router-dom";

export const Logout = () => {
    const { user, userLogout } = useContext(AuthContext);

    useEffect(() => {
        userService.logoutUser(user.accessToken)
            .then(() => userLogout())
    }, [user.accessToken, userLogout]);

    return <Navigate to="/" />
};