import { useReducer } from "react";
import { Link } from "react-router-dom";
import { initialState, reducer } from "./data/data";
import { changeHandler } from "../../utils/handleChangeEvent";

export const Register = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const submitHandler = (ev, data) => {
        ev.preventDefault();

        console.log(data);
    };

    return (
        <section id="register">
            <form id="register-form" onSubmit={(ev) => submitHandler(ev, state)}>
                <div className="container">
                    <h1>Register</h1>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        placeholder="Enter Username"
                        name="username"
                        autoComplete="username"
                        value={state.username}
                        onChange={(ev) => changeHandler(ev, dispatch)}
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="text"
                        placeholder="Enter Email"
                        name="email"
                        autoComplete="email"
                        value={state.email}
                        onChange={(ev) => changeHandler(ev, dispatch)}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        autoComplete="new-password"
                        value={state.password}
                        onChange={(ev) => changeHandler(ev, dispatch)}
                    />
                    <label htmlFor="repeatPass">Repeat Password</label>
                    <input
                        id="repeatPass"
                        type="password"
                        placeholder="Repeat Password"
                        name="repeatPass"
                        autoComplete="rePass"
                        value={state.repeatPass}
                        onChange={(ev) => changeHandler(ev, dispatch)}
                    />
                    <div className="gender">
                        <input
                            type="radio"
                            name="gender"
                            id="female"
                            value="female"
                            onChange={(ev) => changeHandler(ev, dispatch)}
                            />
                        <label htmlFor="female">Female</label>
                        <input
                            type="radio"
                            name="gender"
                            id="male"
                            defaultChecked="male"
                            value="male"
                            onChange={(ev) => changeHandler(ev, dispatch)}
                        />
                        <label htmlFor="male">Male</label>
                    </div>
                    <input
                        type="submit"
                        className="registerbtn button"
                        defaultValue="Register"
                    />
                    <div className="container signin">
                        <p>
                            Already have an account? <Link to="/login">Sign in</Link>.
                        </p>
                    </div>
                </div>
            </form>
        </section>
    );
};