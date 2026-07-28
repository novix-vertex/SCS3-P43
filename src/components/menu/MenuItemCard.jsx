import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../../features/cart/cartSlice"
import toast from "react-hot-toast";

const MenuItemCard = ({ menuItem }) => {

    const dispatch = useDispatch();

    const { cartItems } = useSelector((state) => state.cart);
    const isItemAdded = cartItems.some((item) => item.id === menuItem.id)

    const handleAddToCart = () => {
        if (isItemAdded || !menuItem.available) return;

        dispatch(addToCart(menuItem));
        toast.success(`${menuItem.name} is added to the cart successfully.`);
    }
    return (
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 overflow-hidden shadow-2xl hover:shadow-2xl hover:-translate-y-2 hover:border-white/40 transition-all duration-200 ease-linear">

            <img src={menuItem.image} alt={menuItem.name} className="w-full h-80 object-cover rounded-t-3xl" />
            <div className="p-5">

                <div className="flex justify-between items-start">

                    <div>

                        <h2 className="text-xl font-bold text-amber-300">
                            {menuItem.name}
                        </h2>

                        <p className="text-sm text-white/80 mt-1">
                            {menuItem.category}
                        </p>

                    </div>

                    <span
                        className={`text-xs px-3 py-1 rounded-full 
                            ${menuItem.available
                                ? "bg-white/20 backdrop-blur-md border border-white/20 text-white"
                                : "bg-red-900/70 backdrop-blur-md border border-white/20 text-white"
                            }`}>
                        {menuItem.available ? "Available" : "Out of Stock"}
                    </span>

                </div>

                <p className="text-amber-300/80 mt-4 text-sm">
                    {menuItem.description}
                </p>

                <div className="flex justify-between items-center mt-5">
                    <h3 className="text-2xl font-bold text-amber-300">
                        ${menuItem.price}
                    </h3>
                </div>


                <div className="grid grid-cols-1 mt-6">

                    <button
                        disabled={!menuItem.available || isItemAdded}
                        onClick={handleAddToCart}
                        className={`w-full rounded-lg py-2 text-sm transition-all duration-200 ease-linear
                        ${!menuItem.available ?
                                "bg-red-900/70 backdrop-blur-md border border-white/20 text-white cursor-not-allowed" :
                                (isItemAdded ?
                                    "bg-green-900/70 backdrop-blur-md border border-white/20 text-white cursor-not-allowed" :
                                    "bg-amber-300/20 backdrop-blur-md border border-white/20 text-white hover:bg-white/30 active:scale-[0.97] cursor-pointer")
                            }`}>
                        {!menuItem.available
                            ? "Out of Stock"
                            : isItemAdded
                                ? "✓ Added"
                                : "Add to Cart"}
                    </button>

                </div>

            </div>
        </div>
    )
}

export default MenuItemCard

