import ItemList from "../components/ItemList";
import { LinksList } from "../assets/LinksList";
import { Link } from "react-router";

function Home() {
    return (
        <>
            <ItemList list={LinksList} />
            <div className="annonce-link">
                Saviez vous que vous pouvez consulter toutes les annonces de la
                chaîne sur la page <Link to="/annonces">annonces</Link> ?
            </div>
        </>
    );
}

export default Home;
