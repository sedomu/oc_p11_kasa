import { Card } from '../components/Card.jsx'
import { useEffect, useState } from "react";

export function Home() {
    const [logements, setLogements] = useState([])

    useEffect(() => {
        fetch("/data/logements.json")
            .then(response => response.json())
            .then(data => setLogements(data));
    }, []);

    return <>
        <main className={"index"}>
            <section className="hero">
                <img src={"/images/index_hero.png"} alt={"landscape"}/>
                <div className="text">
                    <h1>Chez vous, partout et ailleurs</h1>
                </div>
            </section>

            <section className="housing">
                {logements && logements.map(logement => (
                  <Card title={logement.title} cover={logement.cover} id={logement.id}/>
                ))}
            </section>
        </main>
    </>;
}