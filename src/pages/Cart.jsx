import { useCart } from "../context/CartContext";
import { FaTrash } from "react-icons/fa";
const Cart=()=>{
const{cart, removefromCart,addToCart} =useCart();

    return (
        <div>
            <h1>My Cart</h1>
            {cart.length===0?(
                <p>No items in cart</p>
            ):(
             <ul>
               { cart.map((item)=>(
                <li key={item.id} >
                    <img src={item.img}/>
                    <span>item.name</span>
                    <button onClick={()=>reduceQuantity(item.Quantity)}>
                    <faTrash/>
                    </button>
                    <p>{item.Quantity}</p>
                    <button onClick={()=>addToCart(item)}>+</button>
                    <button onClick={()=>removefromCart(item.id)}>
                       Remove
                    </button>
                </li>
               ))}
             </ul>   
            )}
        </div>
    )
}
export default Cart;