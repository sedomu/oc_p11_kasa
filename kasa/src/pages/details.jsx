import {useParams} from "react-router-dom";
import {Carrousel} from '../components/Carrousel.jsx'

export function Details() {
    const {id} = useParams();
    const pictures = [
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"
    ]

    return <>
        <main className={"details"}>
            <Carrousel pictures={pictures}/>
        <h2>Contenu de la page Details {id}</h2>
        </main>
    </>;
}