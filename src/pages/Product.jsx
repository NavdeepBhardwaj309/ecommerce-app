// import products from '../data/Products';
import { useParams, useNavigation, Link } from 'react-router-dom';
import {useCart}  from '../context/CartContext';
import { useProducts } from '../context/ProductContext';
import '../CSS/Product.css';
const Product=()=>{
  const {id}=useParams();
  const{addToCart}=useCart();
  const{products}=useProducts();
//   const navigation=useNavigation();
console.log("products",products);
   const product=products.find((p) => p.id === parseInt(id));
   if (!product) return <h2>Product not found</h2>;
    return (
        <div className='container'>
            <div className='card'>
            <img  src={product.img} alt={product.name}/>
            <h1>{product.name}</h1>
            <p>${product.price}</p>
            <button className='button'onClick={()=>addToCart(product)}>  Add to Cart  </button>
            <div>
            <button className='button' onClick={()=>addToCart(product)}>
                <Link className='link' to={`/Cart`}>Buy Now</Link>
            </button>
            </div>
            </div>
        </div>
    )
}
export default Product;