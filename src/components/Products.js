import Product from './Product'

// const Products = ({ tasks, onDelete }) => {
const Products = ({ products }) => {
    return(
        <>
            {products.map((product)=>(

        <Product key={product.id} product={product} />
            ))}
        </>
    )
}

export default Products