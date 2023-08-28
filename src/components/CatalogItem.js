import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export const CatalogItem = ({
    _id,
    title,
    imageUrl
}) => {
    const { user } = useContext(AuthContext);

    return (
        <div className="meme">
            <div className="card">
                <div className="info">
                    <p className="meme-title">{title}</p>
                    <img className="meme-image" alt="meme-img" src={imageUrl} />
                </div>
                {user.accessToken
                    ?
                    <div id="data-buttons">
                        <Link className="button" to={`/details/${_id}`}>
                            Details
                        </Link>
                    </div>
                    :
                    null
                }
            </div>
        </div>
    );
}