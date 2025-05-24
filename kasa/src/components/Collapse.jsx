import accordion_arrow_closed from "../assets/images/accordion-arrow_closed.svg";
import { useEffect, useRef, useState } from 'react'

export function Collapse({title, open, children}) {
    const [descriptionVisible, setDescriptionVisible] = useState(open)

    const toggleDescription = () => {
        setDescriptionVisible(!descriptionVisible);
    }

    const pRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        if (descriptionVisible){
            const contentHeight = pRef.current.scrollHeight + 24 + 16;
            contentRef.current.style.height = contentHeight + "px"
            contentRef.current.style.transition = 'height 300ms 0ms ease-out'
            pRef.current.style.transform = "translateY(0%)";
            pRef.current.style.opacity = "1";
            pRef.current.style.transition = "opacity 350ms 150ms ease-out , transform 300ms 100ms ease-out"
        } else {
            contentRef.current.style.height = '0px'
            contentRef.current.style.transition = 'height 300ms 250ms ease-out'
            pRef.current.style.transform = "translateY(-200%)";
            pRef.current.style.opacity = "0";
            pRef.current.style.transition = "opacity 350ms 0ms ease-out, transform 300ms 150ms ease-out"
        }
    }, [descriptionVisible])

    return <>
        <article className={"collapse " + (descriptionVisible ? "open" : "closed")}>
            <div className="title" onClick={toggleDescription}>
                <p>{title}</p>
                <img src={accordion_arrow_closed} alt={"icon"}/>
            </div>
            <div className="content" ref={contentRef}>
                <div className={"wrapper"}>
                    <p ref={pRef}>{children}</p>
                </div>
            </div>
        </article>
    </>
}