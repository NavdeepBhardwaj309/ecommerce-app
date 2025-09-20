import {useEffect, useState} from 'react';
import '../CSS/Home.css';
import { Link } from "react-router-dom";
import {getAllProducts} from "../services/ProductsService"
import { useProducts } from '../context/ProductContext';
const Home=()=>{
    const[products,setProducts]=useState([])
    const{setProductsList} =useProducts();
    useEffect(()=>{
     getAllProducts()
      .then(data=>{
        setProductsList(data);
        setProducts(data)
      })
      .catch(err=>console.log("error from products service",err));
     
    },[])


    return (
    <div className="container">
      <h1>E-Commerce Store</h1>
      <div className="grid">
        {products.length>0&&products.map((p) => (
          <div key={p.id} className="card">
            <img src={p.image} alt={p.name} />
            <h2 className="">{p.name}</h2>
            <p>₹{p.price}</p>
            {/* <button className="button">Add to Cart</button> */}
            <button className='button'>
            <Link className='link' to={`/product/${p.id}`} >
              View Product
            </Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
    
}
export default Home;