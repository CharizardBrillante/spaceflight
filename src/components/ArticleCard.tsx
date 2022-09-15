import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

interface ArticleCardProps {
    id: number,
    imgUrl: string,
    title: string,
    text: string
}

const ArticleCard = ({id, imgUrl, title, text}:ArticleCardProps) => {

    const navigate = useNavigate();
    return (
        <Card className="article-card box-shadow">
            <Card.Img variant="top" src={imgUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
                <Button className="article-button box-shadow" onClick={()=>{navigate(`/details/${id}`)}}>Read</Button>
            </Card.Body>
        </Card>
    )
}

export default ArticleCard;