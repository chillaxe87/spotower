import React, { useEffect, useReducer, useState } from "react";
import "./article-page.styles.scss";
import { Articles } from '../../data/articlesData';
import { useParams } from "react-router-dom";

const ArticlePage = () => {

    const params = useParams()
    const [info, setInfo] = useState({})

    useEffect(() => {
        const arcticle = Articles.filter(item => item.title === params.id)
        console.log(arcticle)
        setInfo(arcticle[0])
    }, [])


    return (
        <div className="container-arcticle">
            <h1>{info.title}</h1>
            <h2>{info.content}</h2>
        </div>

    )
}
export default ArticlePage