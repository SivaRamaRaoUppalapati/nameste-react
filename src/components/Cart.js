import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../Utils/cartSlice";

const Cart =()=>{

    const CartItems = useSelector(store=>store.cart.items)

    const dispatch= useDispatch();
    const handleClearCart= ()=>{
        dispatch(clearCart());
    }
    return(
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold" ></h1>
            <div className="w-6/12 m-auto">
                <button className="p-2 m-2 rounded-lg bg-black text-white"
                onClick={handleClearCart}
                >Clear Cart</button>
                <ItemList items={CartItems}/>
            </div>
        </div>
    )
}

export default Cart;
