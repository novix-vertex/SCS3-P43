import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../../features/cart/cartSlice";
import toast from "react-hot-toast";
import { FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";
function CartItem({ cartItem }) {
    const itemTotal = cartItem.price * cartItem.quantity;

    const dispatch = useDispatch();

    const handleIncreaseQuantity = () => {
        dispatch(increaseQuantity(cartItem.id));
    }

    const handleDecreaseQuantity = () => {
        dispatch(decreaseQuantity(cartItem.id));
    }

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(cartItem.id));
        toast.success(`${cartItem.name} is removed from the cart successfully.`);
    }
    return (
        <div className="flex gap-4 border-b border-gray-200 py-5 transition hover:bg-gray-50">
            <img
                src={cartItem.image}
                alt={cartItem.name}
                className="w-24 h-24 rounded-xl object-cover"
            />
            <div className="flex-1">
                <h3 className="text-lg font-semibold">
                    {cartItem.name}
                </h3>

                <p className="text-sm text-gray-500">
                    {cartItem.category}
                </p>

                <p className="mt-2 text-[#6F4E37] font-bold">
                    ${cartItem.price}
                </p>
                <div className="flex items-center gap-3 mt-4">

                    <button
                        onClick={handleDecreaseQuantity}
                        className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-[#5B3A29] hover:text-white cursor-pointer"
                    >
                        <FiMinus size={14} />
                    </button>

                    <span className="font-semibold">
                        {cartItem.quantity}
                    </span>

                    <button
                        onClick={handleIncreaseQuantity}
                        className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-[#5B3A29] hover:text-white cursor-pointer"
                    >
                        <FiPlus size={14} />
                    </button>

                </div>
                <div className="flex justify-between mt-5">

                    <span className="text-gray-500">
                        Item Total
                    </span>

                    <span className="font-bold text-[#6F4E37]">
                        ${itemTotal}
                    </span>

                </div>


                <button
                    onClick={handleRemoveFromCart}
                    className="text-red-500 hover:text-red-700 flex items-center gap-2 cursor-pointer"
                >
                    <FiTrash2 /> Remove
                </button>

            </div>

        </div>

    );

}

export default CartItem;