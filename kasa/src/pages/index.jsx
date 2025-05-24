import {Link} from "react-router-dom";
import index_hero from '../assets/images/index_hero.png'
import { Card } from '../components/Card.jsx'

export function Home() {
    return <>
        <main className={"index"}>
            <section className="hero">
                <img src={index_hero} alt={"landscape"}/>
                <div className="text">
                    <h1>Chez vous, partout et ailleurs</h1>
                </div>
            </section>

            <section className="housing">
                <Card title={"Appartement cosy"} cover={"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"}/>
                <Card title={"Appartement cosy"} cover={"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"}/>
                <Card title={"Appartement cosy"} cover={"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"}/>
                <Card title={"Appartement cosy"} cover={"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"}/>
                <Card title={"Appartement cosy"} cover={"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"}/>
                <Card title={"Appartement cosy"} cover={"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"}/>
                <Card title={"Appartement cosy"} cover={"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"}/>
                <Card title={"Appartement cosy"} cover={"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"}/>
                <Card title={"Appartement cosy"} cover={"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"}/>
            </section>

            <h2>Contenu de la page d'accueil</h2>
            <section>
                <p>Chez vous, partout et ailleurs</p>
            </section>
            <section>
                <article>
                    <Link to="/details/azerty">Titre de la location "azerty"</Link>
                </article>
            </section>
        </main>
    </>;
}