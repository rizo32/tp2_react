import Product from './Product'

// const Products = ({ tasks, onDelete }) => {
const Products = ({ products, onDelete }) => {
    return(
        <>
            {products.map((product)=>(

        <Product key={product.id} product={product} onDelete={ onDelete } />
            ))}
        </>
    )
}

export default Products