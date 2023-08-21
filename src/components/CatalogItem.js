import { Link } from 'react-router-dom';

export const CatalogItem = ({
    _id,
    title,
    imageUrl
}) => {
    return (
        <div className="meme">
            <div className="card">
                <div className="info">
                    <p className="meme-title">{title}</p>
                    <img className="meme-image" alt="meme-img" src={imageUrl} />
                </div>
                <div id="data-buttons">
                    <Link className="button" to={`/details/${_id}`}>
                        Details
                    </Link>
                </div>
            </div>
        </div>
    );
}