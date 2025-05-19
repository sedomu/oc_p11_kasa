import {useParams} from "react-router-dom";

export function Details() {
    const {id} = useParams();

    return <>
        <h2>Contenu de la page Details {id}</h2>
    </>;
}