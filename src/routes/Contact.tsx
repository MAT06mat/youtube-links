import "../styles/Contact.scss";

function Contact() {
    const announcementHTML = (
        <>
            <h3>Hello world</h3>
            <img
                src="https://t4.ftcdn.net/jpg/07/06/13/07/240_F_706130754_j2EzHYPxplkK3wAzLkuo5kJgTOLaRyJU.jpg"
                alt="Chat"
            />
            <p>Bienvenue sur l'espace d'annonces !</p>
        </>
    );

    const hasAnnouncement = true;

    return (
        <div className="contact-container">
            <div className="glass-card announcement-card">
                <h2 className="announce-gradient-text">Annonces</h2>

                <div className="announcement-zone">
                    {hasAnnouncement ? (
                        <div className="html-content">{announcementHTML}</div>
                    ) : (
                        <p className="fallback-text">
                            Aucune annonce pour le moment...
                        </p>
                    )}
                </div>
            </div>

            <div className="glass-card info-card">
                <h3>Me contacter</h3>
                <div className="contact-links">
                    <a
                        href="mailto:votre-email@exemple.com"
                        className="contact-item"
                    >
                        Mail : contactstudieux@gmail.com
                    </a>
                    <a
                        href="https://youtube.com/@babastudieux510"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-item"
                    >
                        Youtube : @babastudieux510
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
