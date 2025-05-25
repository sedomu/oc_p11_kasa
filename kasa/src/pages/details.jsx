import {useParams} from "react-router-dom";
import {Carrousel} from '../components/Carrousel.jsx'

export function Details() {
    const {id} = useParams();

    return <>
        <main className={"details"}>
            <Carrousel/>
        <h2>Contenu de la page Details {id}</h2>
        </main>
    </>;
}