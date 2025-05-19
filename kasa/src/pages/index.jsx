import {Link} from "react-router-dom";

export function Home() {
    return <>
        <h2>Contenu de la page d'accueil</h2>
        <section>
            <p>Chez vous, partout et ailleurs</p>
        </section>
        <section>
            <article>
                <Link to="/details/azerty">Titre de la location "azerty"</Link>
            </article>
        </section>
    </>;
}