import {Collapse} from "../components/Collapse.jsx";

export function About() {
    return <>
        <main className="about">
            <section className="hero">
                <img src={"./images/about_hero.png"} alt={"landscape"}/>
            </section>
            <section className="content">
                <Collapse title={"Fiabilité"} open={false}>
                    Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
                </Collapse>
                <Collapse title={"Respect"} open={false}>
                    La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                </Collapse>
                <Collapse title={"Service"} open={false}>
                    La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.
                </Collapse>
                <Collapse title={"Sécurité"} open={false}>
                    La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                </Collapse>
            </section>
        </main>
    </>;

}