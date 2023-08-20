import { Link } from "react-router-dom";

export const Navigation = () => {
    return (
        <nav>
            <Link to="/">All Memes</Link>

            <div class="user">
                <Link to="/">Create Meme</Link>
                <div class="profile">
                    <span>Welcome, {'email'}</span>
                    <Link to="/">My Profile</Link>
                    <Link to="/">Logout</Link>
                </div>
            </div>

            <div class="guest">
                <div class="profile">
                    <Link to="/">Login</Link>
                    <Link to="/">Register</Link>
                </div>
                <Link class="active" to="/">Home Page</Link>
            </div>
        </nav>
    );
};