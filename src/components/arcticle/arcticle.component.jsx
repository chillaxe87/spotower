import "./arcticle.styles.scss";
import React, { useState } from "react";

const Arcticle = (props) => {
    const [arcticle, setArcticle] = useState(props.data)

    return (
        <div className="arcticle-container">
            <h1>{arcticle.title}</h1>
            <h2>{arcticle.content}</h2>
        </div>
    )
}
export default Arcticle