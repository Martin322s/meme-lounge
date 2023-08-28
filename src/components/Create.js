import { useState } from "react";

export const Create = () => {
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
        console.log(values);
    }

    return (
        <section id="create-meme">
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