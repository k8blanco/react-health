import React from "react";
import "./styles.scss";

function TimeLineCard(props) {
    
    return (
<div>
        <div className="vl"></div>

    <article className="timeline">
        
        <section className="timeline__section ">
                    <article className="timeline">
                        <nav className="timeline__nav ">
                            <ul >
                                <li>
                                {props.renderImage(props.type)}

                                    <span className="milestone">{props.type}</span>
                                    
                                    <span>{props.date}</span>
                                    <span> By {props.writtenBy}</span>
                                </li>
                            </ul>
                        </nav>

                        <div className="media-body wrapper">
                            {props.note}
                        </div>
                    </article>
        </section>
    </article>
 
</div>

    )
}

export default TimeLineCard;