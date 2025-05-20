import accordion_arrow_closed from "../assets/images/accordion-arrow_closed.svg";

function toggleOpenning(e) {
    e.target.closest("div").parentElement.classList[1] === "open" ? e.target.closest("div").parentElement.classList.replace("open", "closed") : e.target.closest("div").parentElement.classList.replace("closed", "open");
}

export function Accordion({title, children}) {
    return <>
        <article className="accordion closed">
            <div className="title" onClick={toggleOpenning}>
                <p>{title}</p>
                <img src={accordion_arrow_closed} alt={"icon"}/>
            </div>
            <div className="content">
                {children}
            </div>
        </article>
    </>
}