import "../styles/Contact.scss";

function Contact() {
    const announcementHTML = (
        <>
            <h3>PROCHAINEMENT</h3>
            <h4>L'OMNI est de retour!</h4>
            <img
                src="https://i.postimg.cc/L6b7MtFV/OMNI.png"
                alt="L'OMNI vous salue"
            />
            <p>Chanson originale + clip prévu d'ici la fin de la semaine</p>
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
                        href="mailto:contactstudieux@gmail.com"
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
