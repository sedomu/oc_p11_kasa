import {useParams} from "react-router-dom";
import {Carrousel} from '../components/Carrousel.jsx'
import { useFetch } from '../hooks/useFetch.js'
import {Rating} from '../components/Rating.jsx'
import { Collapse } from '../components/Collapse.jsx'
import { NotFound } from './404.jsx'

export function Details() {
    const {id} = useParams();
    const [loading, logement, error] = useFetch("/data/logements.json", id);

    if (error) { console.log("An error has been returned by useFetch : " + error) }

    if (logement === undefined) {
        return <NotFound/>
    }

    return <>
        <main className={"details"}>
            {loading && <p>Chargement...</p>}
            {logement && <>
                <Carrousel pictures={logement.pictures}/>
                <section className={"content"}>
                    <div className={"general-information"}>
                        <div className={"title"}>
                            <div className={"text"}>
                                <h1>{logement.title}</h1>
                                <p>{logement.location}</p>
                            </div>
                            <div className={"tags"}>
                                <ul>
                                    {logement.tags.map(tag => <li key={tag}>{tag}</li>)}
                                </ul>
                            </div>

                        </div>
                        <div className={"host"}>
                            <div className={"host-profile"}>
                                <p className={"host-profile-name"}>{logement.host.name.replace(" ", "\n")}</p>
                                <img className={"host-profile-picture"} src={logement.host.picture} alt={"profile"}/>
                            </div>
                            <Rating>{logement.rating}</Rating>
                        </div>
                    </div>
                    <div className={"detailed-information"}>
                        <Collapse title={"Description"} open={false}>{logement.description}</Collapse>
                        <Collapse title={"Équipements"} open={false}>{logement.equipments}</Collapse>
                    </div>
                </section>


            </>}
        </main>
    </>;
}

// {
//     "id": "c67ab8a7",
//   "title": "Appartement cosy",
//   "cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
//   "pictures": [
//     "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
//     "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
//     "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
//     "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
//     "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"
// ],
//   "description": "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement.",
//   "host": {
//     "name": "Nathalie Jean",
//       "picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg"
// },
//     "rating": "5",
//   "location": "Ile de France - Paris 17e",
//   "equipments": [
//     "Équipements de base",
//     "Micro-Ondes",
//     "Douche italienne",
//     "Frigo",
//     "WIFI"
// ],
//   "tags": [
//     "Batignolle",
//     "Montmartre"
// ]
// },