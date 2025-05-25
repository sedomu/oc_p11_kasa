import { Card } from '../components/Card.jsx'
import { useFetch } from "../hooks/useFetch.js";

export function Home() {
    const [loading, logements, error] = useFetch("/data/logements.json");

    if (error) {
        console.log("An error has been returned by useFetch : " + error);
    }

    return <>
        <main className={"index"}>
            <section className="hero">
                <img src={"/images/index_hero.png"} alt={"landscape"}/>
                <div className="text">
                    <h1>Chez vous, partout et ailleurs</h1>
                </div>
            </section>

            <section className="housing">
                { loading && <p>Chargement...</p> }
                {logements && logements.map(logement => (
                  <Card key={logement.id} title={logement.title} cover={logement.cover} id={logement.id}/>
                ))}
            </section>
        </main>
    </>;
}