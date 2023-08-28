import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as memeService from '../services/memeService';
import { AuthContext } from "../contexts/AuthContext";

export const Details = () => {
    const { user } = useContext(AuthContext);
    const { memeId } = useParams();
    const [meme, setMeme] = useState({});

    useEffect(() => {
        memeService.getOne(memeId)
            .then(meme => {
                setMeme(meme);
            })
    }, [memeId]);

    return (
        <section id="meme-details">
            <h1>Meme Title: {meme.title}</h1>
            <div className="meme-details">
                <div className="meme-img">
                    <img alt="meme-alt" src={meme.imageUrl} />
                </div>
                <div className="meme-description">
                    <h2>Meme Description</h2>
                    <p>
                        {meme.description}
                    </p>
                    {user._id === meme._ownerId
                        ?
                        <>
                            <Link className="button warning" to={`/edit/${meme._id}`}>
                                Edit
                            </Link>
                            <button className="button danger">Delete</button>
                        </>
                        :
                        null
                    }
                </div>
            </div>
        </section>
    );
};