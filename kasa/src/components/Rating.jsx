export function Rating({children}) {
  let schema = [false, false, false, false, false]

  for (let i = 0; i < children; i++) {
    schema[i] = true;
  }

  return <div className={"rating"}>
    {schema.map((star, index) => <img key={index} src={star ? "/images/filled-star_icon.svg" : "/images/empty-star_icon.svg"} alt={"star"}/>)}
  </div>
}