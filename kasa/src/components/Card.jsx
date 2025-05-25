import { Link } from 'react-router-dom'

export function Card({title, cover, id}) {
  return <>
    <Link to={"/details/" + id}>
      <article className={"card"}>
        <img src={cover} alt={title} loading={"lazy"}/>
        <div className="overlay"/>
        <p>{title}</p>
      </article>
    </Link>
  </>
}