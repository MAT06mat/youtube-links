import { Link } from "react-router";
import "../styles/NotFound.scss";

const NotFound = () => {
    return (
        <div className="not-found-container">
            <div className="decor decor-1"></div>
            <div className="decor decor-2"></div>
            <div className="decor decor-3"></div>

            <div className="broken-player">
                <div className="title-area">
                    <h1
                        className="gradient-text glitch-wrapper"
                        data-text="404"
                    >
                        404
                    </h1>
                </div>

                <div className="message-area">
                    <p className="error-message">
                        OUPS ! CETTE VIDÉO S'EST PERDUE...
                    </p>
                    <p className="sub-message">
                        Le lien est introuvable ou n'existe plus. Dans tous les
                        cas, rien à voir ici.
                    </p>
                </div>

                <div className="action-area">
                    <Link to="/" className="back-button gradient-button">
                        <svg viewBox="0 0 24 24" width="18" height="18">
                            <path
                                fill="currentColor"
                                d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
                            />
                        </svg>
                        Retourner à l'accueil
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
