import { Link } from "react-router-dom";
import debugging from './images/2.png';
import * as memeService from '../services/memeService';
import { useEffect, useState } from "react";

export const Catalog = () => {
    const [memes, setMemes] = useState([]);

    useEffect(() => {
        memeService.getAll()
            .then(memes => setMemes(memes));
    }, []);

    console.log(memes);

    return (
        <section id="meme-feed">
            <h1>All Memes</h1>
            <div id="memes">
                {/* Display : All memes in database ( If any ) */}
                <div className="meme">
                    <div className="card">
                        <div className="info">
                            <p className="meme-title">Debugging</p>
                            <img className="meme-image" alt="meme-img" src={debugging} />
                        </div>
                        <div id="data-buttons">
                            <Link className="button" to="/">
                                Details
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Display : If there are no memes in database */}
                <p className="no-memes">No memes in database.</p>
            </div>
        </section>
    );
};