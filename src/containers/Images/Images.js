import React from "react";
import Image from "./Image/Image";

const Images = (props) => {
    return (
        <ul className="images">
            {
                Object
                    .keys(props.images)
                    .map(key => <Image key={key} index={key} addLike={props.addLike} details={props.images[key]} />)
            }
        </ul>
    )
};

export default Images;