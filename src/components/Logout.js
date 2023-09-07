import { memo, useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import * as userService from '../services/authService';
import { Navigate } from "react-router-dom";

export const Logout = memo(() => {
    const { user, logoutUser } = useContext(AuthContext);

    useEffect(() => {
        if (user?.accessToken) {
            userService.logoutUser(user?.accessToken)
                .then((res) => {
                    console.log(res);
                    logoutUser();
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }, [user.accessToken, logoutUser]);

    return <Navigate to="/" />
});