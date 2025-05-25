import { useEffect, useState } from 'react'

export function Carrousel({ pictures }) {

  const [currentPicture, setCurrentPicture] = useState(0)
  const [formerPicture, setFormerPicture] = useState(0)
  const [direction, setDirection] = useState(null)
  const [autoplay, setAutoplay] = useState(true)

  // Preload pictures
  useEffect(() => {
    pictures.forEach(picture => {
      const img = new Image();
      img.src = picture;
    })
  }, [])

  // Défilement automatique
  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        handleNextPicture()
      }, 3000)

      return () => clearInterval(interval);
    }
  }, [currentPicture]);


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
        <div className={"arrow-hitbox previous"} onClick={() => {handlePreviousPicture(); setAutoplay(false)}}>
          <img className={"arrow-previous"} src={"/images/arrowCarrousel_left.svg"} alt={"previous"}/>
        </div>
        <div className={"arrow-hitbox next"} onClick={() => {handleNextPicture(); setAutoplay(false)}}>
          <img className={"arrow-next"} src={"/images/arrowCarrousel_left.svg"} alt={"next"}/>
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