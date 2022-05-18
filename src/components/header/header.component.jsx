import React, { useEffect, useState } from 'react'
import { Articles, Categories } from '../../data/articlesData';
import { nanoid } from 'nanoid';
import "./header.styles.scss";
import ArticleCategory from '../arcitcle-category/arcitcle-category.component';

const Header = () => {

    const [articles, setArticles] = useState(Articles)
    const [categories, setCategories] = useState(Categories)
    const [articlesInCategory, setArticlesInCategory] = useState([])



    useEffect(() => {
        if (articlesInCategory.length > 0) return
        const arcticles = [];
        categories.forEach(category => {
            let arctileList = [];
            articles.forEach(arcticle => {
                if (arcticle.category === category) arctileList.push(arcticle.title)
            })
            arcticles.push({
                category: category,
                articles: arctileList,
            })
        })
        setArticlesInCategory(arcticles)
        console.log(articlesInCategory)
    }, [])


    return (
        <div className='header'>
            <div className='header-menu'>
                <div className='category-container'>
                    {articlesInCategory.map((data) => (
                        <ArticleCategory key={nanoid()} data={data} />
                    ))}
                </div>

            </div>

        </div>
    )
}

export default Header