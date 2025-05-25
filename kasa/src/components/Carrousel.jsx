import { useEffect, useState } from 'react'

export function Carrousel({ pictures }) {

  // Just for dev
  pictures = [
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"
  ]

  const [currentPicture, setCurrentPicture] = useState(0)
  const [formerPicture, setFormerPicture] = useState(0)
  const [direction, setDirection] = useState(null)

  // Preload pictures
  useEffect(() => {
    pictures.forEach(picture => {
      const img = new Image();
      img.src = picture;
    })
  }, [])

  const countPictures = pictures.length;

  const handleNextPicture = () => {
    setFormerPicture(currentPicture);
    setDirection("right");

    if (currentPicture === countPictures - 1) {
      setCurrentPicture(0);
    } else {
      setCurrentPicture(currentPicture + 1);
    }
  }

  const handlePreviousPicture = () => {
    setFormerPicture(currentPicture);
    setDirection("left");

    if (currentPicture === 0) {
      setCurrentPicture(countPictures - 1);
    } else {
      setCurrentPicture(currentPicture - 1);
    }
  }

  return <>
    <section className={"carrousel"}>

      {countPictures > 1 && <>
        <div className={"image-wrapper"}>
          <img key={"former" + formerPicture} className={"cover-image former-from-" + direction} src={pictures[formerPicture]} alt={"picture"}/>
          <img key={"current" + currentPicture} className={"cover-image current-from-" + direction} src={pictures[currentPicture]} alt={"picture"}/>
        </div>
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

      {countPictures === 1 && <>
        <div className={"image-wrapper"}>
          <img className={"cover-image"} src={pictures[currentPicture]} alt={"picture"}/>
        </div>
      </>
      }

    </section>
  </>
}