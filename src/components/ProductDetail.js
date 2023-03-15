import { useParams, useNavigate } from 'react-router-dom';
import Product from './Product';

const ProductDetail = ({ products, onDelete }) => {
  const { id } = useParams();
  const navigate = useNavigate();


  const handleProductDeleted = (id) => {
    onDelete(id);
    navigate('/products');
  }

  

  const product = products.find((p) => p.id === parseInt(id));

  return <Product product={product} onDelete={ handleProductDeleted } />;
};

export default ProductDetail;