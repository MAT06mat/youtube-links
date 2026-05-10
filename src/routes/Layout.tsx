import { Outlet } from "react-router";
import ThemeButton from "../components/ThemeButton";

function Layout() {
    return (
        <>
            <div className="banner-container">
                <img src="banniere.jpg" alt="Bannière" />
            </div>
            <header>
                <h2>Productions studieuses</h2>
                <ThemeButton />
            </header>
            <section>
                <Outlet />
            </section>
            <footer>
                Site par{" "}
                <a href="https://github.com/mat06mat" target="_blank">
                    MAT06mat
                </a>
            </footer>
        </>
    );
}

export default Layout;
