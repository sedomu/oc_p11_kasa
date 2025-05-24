import { Link } from 'react-router-dom'

export function Card({title, cover, id}) {
  return <>
    <Link to={"/details/" + id}>
      <article className={"card"}>
        <img src={cover} alt={title}/>
        <div className="overlay"/>
        <p>{title}</p>
      </article>
    </Link>
  </>
}