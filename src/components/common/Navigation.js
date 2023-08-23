import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export const Navigation = () => {
    const { user } = useContext(AuthContext);

    return (
        <nav>
            <Link to="/catalog">All Memes</Link>

            {user?.accessToken
                ?
                <>
                    <div className="user">
                        <Link to="/create-meme">Create Meme</Link>
                        <div className="profile">
                            <span>Welcome, {user?.email}</span>
                            <Link to="/profile">My Profile</Link>
                            <Link to="/logout">Logout</Link>
                        </div>
                    </div>
                </>
                :
                <>
                    <div className="guest">
                        <div className="profile">
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </div>
                        <Link className="active" to="/">Home Page</Link>
                    </div>
                </>
            }
        </nav>
    );
};