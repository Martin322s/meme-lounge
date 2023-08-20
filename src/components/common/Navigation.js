import { Link } from "react-router-dom";

export const Navigation = () => {
    return (
        <nav>
            <Link to="/">All Memes</Link>

            <div className="user">
                <Link to="/">Create Meme</Link>
                <div className="profile">
                    <span>Welcome, {'email'}</span>
                    <Link to="/">My Profile</Link>
                    <Link to="/">Logout</Link>
                </div>
            </div>

            <div className="guest">
                <div className="profile">
                    <Link to="/">Login</Link>
                    <Link to="/">Register</Link>
                </div>
                <Link className="active" to="/">Home Page</Link>
            </div>
        </nav>
    );
};