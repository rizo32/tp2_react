import { useParams } from 'react-router-dom';
import Product from './Product';

const ProductDetail = ({ products, onDelete }) => {
  const { id } = useParams();

  const product = products.find((p) => p.id === parseInt(id));

  return <Product product={product} onDelete={ onDelete } />;
};

export default ProductDetail;