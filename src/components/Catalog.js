import * as memeService from '../services/memeService';
import { useEffect, useState } from "react";
import { CatalogItem } from "./CatalogItem";

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
                {memes.length > 0
                    ?
                    memes.map(x => <CatalogItem key={x._id} {...x} />)
                    :
                    <p className="no-memes">No memes in database.</p>
                }
            </div>
        </section>
    );
};