import { useReducer } from "react";
import { Link } from "react-router-dom";
import { initialState, reducer } from "./data/data";

export const Login = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    return (
        <section id="login">
            <form id="login-form">
                <div className="container">
                    <h1>Login</h1>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        placeholder="Enter Email"
                        name="email"
                        type="text"
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter Password"
                        name="password"
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