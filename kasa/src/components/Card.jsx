import { Link } from 'react-router-dom'

export function Card({cover, title}) {
  return <>
    <Link to={"/details/azerty"}>
      <article className={"card"}>
        <img src={cover} alt={title}/>
        <div className="overlay"/>
        <p>Titre de la location Titre de la location</p>
      </article>
    </Link>
  </>
}