import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import "./arcticle-category.styles.scss";
import { NavLink } from "react-router-dom";

const ArticleCategory = (props) => {

    const [category, setCategory] = useState('')
    const [arcticles, setArcticles] = useState([])
    const [displayOn, setDisplayOn] = useState(false)


    useEffect(() => {
        setArcticles(props.data.articles)
        setCategory(props.data.category)
    }, [])


    const onClickDisplay = () => {
        setDisplayOn(!displayOn)
    }

    return (
        <div className="mini-container">
            <div className='category-title' onClick={onClickDisplay}>
                <span className='orange'>{category}</span>
                <span className={displayOn ? 'arrow-orange up' : 'arrow-orange down'}></span>
            </div>
            {displayOn &&
                <div className='category-articles'>
                    {arcticles.map(arcticle => (
                        <span key={nanoid()}><NavLink to={arcticle}> {arcticle}</NavLink></span>
                    ))}
                </div>
            }

        </div>
    )
}

export default ArticleCategory