import { useContext, useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
import { initialState, reducer } from "./data/data";
import { changeHandler } from "../../utils/handleChangeEvent";
import * as userService from '../../services/authService';
import { AuthContext } from "../../contexts/AuthContext";

export const Login = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { loginUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const submitHandler = (ev, data) => {
        ev.preventDefault();

        if (Object.values(data).some(x => x === '')) {
            alert('All fields must be filled correctly!');
        } else {
            userService.loginUser(data)
                .then(result => {
                    loginUser(result);
                    navigate('/', { replace: true });
                });
        }
    };

    return (
        <section id="login">
            <form id="login-form" onSubmit={(ev) => submitHandler(ev, state)}>
                <div className="container">
                    <h1>Login</h1>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        placeholder="Enter Email"
                        name="email"
                        type="text"
                        value={state.email}
                        onChange={(ev) => changeHandler(ev, dispatch)}
                        autoComplete="email"
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        value={state.password}
                        onChange={(ev) => changeHandler(ev, dispatch)}
                        autoComplete="password"
                    />
                    <input
                        type="submit"
                        className="registerbtn button"
                        defaultValue="Login"
                    />
                    <div className="container signin">
                        <p>
                            Dont have an account? <Link to="/register">Sign up</Link>.
                        </p>
                    </div>
                </div>
            </form>
        </section>
    );
};