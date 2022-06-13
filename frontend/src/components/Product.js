import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";

function Product(props) {
  const { product } = props;
  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className='card-img-top' alt={product.name} />
      </Link>

      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating
          rating={product.rating}
          numberOfReviews={product.numberOfReviews}
        />
        <Card.Text>{product.price} RON</Card.Text>
        <Button>Adaugă în coș!</Button>
      </Card.Body>
    </Card>
  );
}
export default Product;
