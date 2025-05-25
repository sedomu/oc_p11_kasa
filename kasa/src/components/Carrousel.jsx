import { useState } from 'react'

export function Carrousel({ pictures }) {

  // Just for dev
  pictures = [
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
  ]

  const [currentPicture, setCurrentPicture] = useState(0)
  const countPictures = pictures.length;

  const handleNextPicture = () => {
    if (currentPicture === countPictures - 1) {
      setCurrentPicture(0);
    } else {
      setCurrentPicture(currentPicture + 1);
    }
  }

  const handlePreviousPicture = () => {
    if (currentPicture === 0) {
      setCurrentPicture(countPictures - 1);
    } else {
      setCurrentPicture(currentPicture - 1);
    }
  }

  return <>
    <section className={"carrousel"}>
      <img className={"cover-image"} src={pictures[currentPicture]} alt={"picture"}/>
      {countPictures > 1 && <>
        <div className={"arrow-hitbox previous"} onClick={handlePreviousPicture}>
          <img className={"arrow-previous"} src={"/images/arrowCarrousel_left.svg"} alt={"previous"}/>
        </div>
        <div className={"arrow-hitbox next"} onClick={handleNextPicture}>
          <img className={"arrow-next"} onClick={handleNextPicture} src={"/images/arrowCarrousel_left.svg"} alt={"next"}/>
        </div>
        <div className={"counter"}>
          <p>{currentPicture + 1}/{countPictures}</p>
        </div>
      </>
      }

    </section>
  </>
}