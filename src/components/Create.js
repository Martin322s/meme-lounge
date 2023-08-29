import { useContext, useState } from "react";
import * as memeService from '../services/memeService';
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Error } from "./Error/Error";

export const Create = () => {
    const { user } = useContext(AuthContext);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const [data, setData] = useState({
        title: '',
        description: '',
        imageUrl: ''
    });

    const changeHandler = (e) => {
        setData(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    }

    const submitHandler = (e, values) => {
        e.preventDefault();

        if (!Object.values(values).some(x => x === '')) {
            memeService.createMeme(values, user.accessToken)
                .then(() => navigate('/catalog'));
        } else {
            setError(true);
        }
    }

    setTimeout(() => {
        setData(false);
    }, 3000);

    return (
        <section id="create-meme">
            {error && <Error text="All fields must be filled correctly!" />}
            <form id="create-form" onSubmit={(e) => submitHandler(e, data)}>
                <div className="container">
                    <h1>Create Meme</h1>
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        type="text"
                        placeholder="Enter Title"
                        name="title"
                        value={data.title}
                        onChange={(e) => changeHandler(e)}
                    />
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        placeholder="Enter Description"
                        name="description"
                        value={data.description}
                        onChange={(e) => changeHandler(e)}
                    />
                    <label htmlFor="imageUrl">Meme Image</label>
                    <input
                        id="imageUrl"
                        type="text"
                        placeholder="Enter meme ImageUrl"
                        name="imageUrl"
                        value={data.imageUrl}
                        onChange={(e) => changeHandler(e)}
                    />
                    <input
                        type="submit"
                        className="registerbtn button"
                        defaultValue="Create Meme"
                    />
                </div>
            </form>
        </section>
    );
};