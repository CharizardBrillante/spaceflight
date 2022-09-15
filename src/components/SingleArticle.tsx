import { Card, Button} from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Article } from '../types/Article';

const SingleArticle = () => {
    const [article, setArticle] = useState<Article | null>(null)

    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getArticle()
    }, [])

    const getArticle = () => {
        fetch(`https://api.spaceflightnewsapi.net/v3/articles/${params.articleId}`)
        .then(res=>res.json())
        .then((res)=>{
            console.log(res);
            setArticle(res);
        })
        .catch((error) => {console.log(error)});
    }
    return (
        <>
        {article && 
            <Card className="article-card box-shadow">
                <Card.Img variant="top" src={article.imageUrl} />
                <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Text>
                        <p>{article.summary}</p>
                        <small>{article.publishedAt}</small>
                    </Card.Text>
                    <Button className="article-button box-shadow" onClick={()=>navigate('/')}>Return to Home</Button>
                    <a className="soure-anchor-button btn box-shadow" href={article.url} target="_blank" rel="noreferrer">
                        Read the entire article
                    </a>
                </Card.Body>
            </Card>
        }
        </>
    )
}

export default SingleArticle;