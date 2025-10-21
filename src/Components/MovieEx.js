import React from "react";



const MovieEx = (props)=>{

    return (
        <div className="movie">
            <figure>
                <img src={props.path} alt="" />

                <figcaption>
                    <h2>{props.title}</h2>
                    <p>{props.cat}</p>

                </figcaption>
            </figure>

        </div>
    )


}
export default MovieEx