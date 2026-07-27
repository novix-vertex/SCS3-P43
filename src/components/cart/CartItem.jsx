import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../../features/cart/cartSlice";

function CartItem({ cartItem }) {
    const subtotal = cartItem.price * cartItem.quantity;

    const dispatch = useDispatch();

    const handleIncreaseQuantity = () => {
        dispatch(increaseQuantity(cartItem.id));
    }

    const handleDecreaseQuantity = () => {
        dispatch(decreaseQuantity(cartItem.id));
    }

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(cartItem.id));
    }
    return (

        <div className="flex gap-4 border-b py-4">
            <img
                src={cartItem.image}
                alt={cartItem.name}
                className="w-20 h-20 rounded-lg object-cover"
            />
            <div className="flex-1">
                <h3 className="font-semibold">
                    {cartItem.name}
                </h3>
                <p className="text-sm text-gray-500">
                    {cartItem.category}
                </p>
                <p className="font-bold text-orange-500 mt-2">
                    ${cartItem.price}
                </p>
                <div className="flex items-center gap-3 mt-3">
                    <button onClick={handleDecreaseQuantity}>-</button>
                    <span>{cartItem.quantity}</span>
                    <button onClick={handleIncreaseQuantity}>+</button>
                </div>
                <div className="w-full space-y-2">
                    <div className="flex justify-between font-bold text-orange-500">
                        <span>Price</span>
                        <span>{subtotal}</span>
                    </div>
                </div>


                <button onClick={handleRemoveFromCart} className="text-white mt-3 bg-red-500 py-0.5 px-3 rounded">
                    Remove
                </button>

            </div>

        </div>

    );

}

export default CartItem;