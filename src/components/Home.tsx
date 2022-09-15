import { useEffect, useState } from "react";
import { Article } from '../types/Article';
import ArticleCard from "./ArticleCard";

const Home = () => {

    const [articles, setArticles] = useState<Article[]>([]);


    useEffect(() => getArticles(), []);

    const getArticles = () => {
        fetch('https://api.spaceflightnewsapi.net/v3/articles')
        .then(res=>res.json())
        .then(res=>setArticles(res))
        .catch(err=>console.error(err));
    }

    console.log(articles)
    return (
        <div className="home">
            <div className="articles-container">
                {articles.map(article => (
                    <ArticleCard
                        key={article.id}
                        id={article.id}
                        imgUrl={article.imageUrl}
                        title={article.title}
                        text={article.summary}
                        />
                ))}
            </div>
        </div>
    )
}

export default Home;