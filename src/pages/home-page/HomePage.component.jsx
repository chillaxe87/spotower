import React, { useEffect, useReducer, useState } from "react";
import Arcticle from "../../components/arcticle/arcticle.component";
import { Articles } from '../../data/articlesData';
import "./home-page.styles.scss";

const HomePage = () => {

    const [articles, setArticles] = useState(Articles)

    return (
        <div className="container">
            {articles.map(arcticle => (
                <Arcticle key={arcticle.id} data={arcticle} />
            ))}


        </div>

    )
}
export default HomePage