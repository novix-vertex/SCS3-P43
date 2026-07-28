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
        <div className="flex gap-4 p-4 mb-4 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg transition-all duration-300 hover:bg-white/20 hover:scale-[1.02]">
            <img
                src={cartItem.image}
                alt={cartItem.name}
                className="w-24 h-24 rounded-2xl object-cover border border-white/20 shadow-md"
            />
            <div className="flex-1">
                <h3 className="text-lg font-bold text-white">
                    {cartItem.name}
                </h3>

                <p className="text-sm text-white/60">
                    {cartItem.category}
                </p>

                <p className="mt-2 text-lg font-bold text-amber-300">
                    ${cartItem.price}
                </p>
                <div className="flex items-center gap-3 mt-4">

                    <button
                        onClick={handleDecreaseQuantity}
                        className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white/30 transition cursor-pointer"
                    >
                        <FiMinus size={14} />
                    </button>

                    <span className="font-bold text-white text-lg">
                        {cartItem.quantity}
                    </span>

                    <button
                        onClick={handleIncreaseQuantity}
                        className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white/30 transition cursor-pointer"
                    >
                        <FiPlus size={14} />
                    </button>

                </div>
                <div className="flex justify-between mt-5">

                    <span className="text-white/70">
                        Item Total
                    </span>

                    <span className="font-bold text-amber-300">
                        ${itemTotal}
                    </span>

                </div>


                <button
                    onClick={handleRemoveFromCart}
                    className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-500/70 border border-red-400/20 text-red-200 hover:bg-red-500/30 transition cursor-pointer"
                >
                    <FiTrash2 /> Remove
                </button>

            </div>

        </div>

    );

}

export default CartItem;