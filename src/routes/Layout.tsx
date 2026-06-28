import { Link, Outlet, useMatch } from "react-router";
import ThemeButton from "../components/ThemeButton";

function Layout() {
    const isHomePage = useMatch("/") !== null;

    return (
        <>
            <div className="banner-container">
                <img src="banniere.jpg" alt="Bannière" />
            </div>
            <header>
                <h2>
                    <Link className="title" to={"/"}>
                        Productions studieuses
                    </Link>
                </h2>
                <ThemeButton />
            </header>
            <section>
                <Outlet />
            </section>
            <footer>
                {isHomePage ? (
                    <div>
                        <Link to={"/annonces"}>Voir la page d'annonces</Link>
                    </div>
                ) : (
                    <div>
                        <Link to={"/"}>Retour</Link>
                    </div>
                )}
                <div>
                    Site par{" "}
                    <a href="https://github.com/mat06mat" target="_blank">
                        MAT06mat
                    </a>
                </div>
            </footer>
        </>
    );
}

export default Layout;
