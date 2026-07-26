import { useDispatch } from "react-redux"
import { addToCart } from "../../features/cart/cartSlice"

const MenuItemCard = ({ menuItem }) => {

    const dispatch = useDispatch();

    const handleAddToCart = (menuItem) => {
        dispatch(addToCart(menuItem));
    }
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer">
            <img src={menuItem.image} alt={menuItem.name} className="w-full h-52 object-cover" />
            <div className="p-5">

                <div className="flex justify-between items-start">

                    <div>

                        <h2 className="text-xl font-bold">
                            {menuItem.name}
                        </h2>

                        <p className="text-sm text-gray-500 mt-1">
                            {menuItem.category}
                        </p>

                    </div>

                    <span
                        className={`text-xs px-3 py-1 rounded-full 
                            ${menuItem.available
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }`}>
                        {menuItem.available ? "Available" : "Out of Stock"}
                    </span>

                </div>

                <p className="text-gray-600 mt-4 text-sm">
                    {menuItem.description}
                </p>

                <div className="flex justify-between items-center mt-5">
                    <h3 className="text-2xl font-bold text-orange-500">
                        ₹{menuItem.price}
                    </h3>
                </div>


                <div className="grid grid-cols-2 gap-2 mt-6">

                    <button disabled={!menuItem.available} className={`text-white rounded-lg py-2 text-sm cursor-pointer ${menuItem.available ? "bg-orange-500 hover:bg-orange:600" : "bg-gray-400 cursor-not-allowed"}`}
                        onClick={() => { handleAddToCart(menuItem) }}>
                        {menuItem.available ? "Add to Cart" : "Out of Stock"}
                    </button>

                    <button className="bg-red-500 hover:bg-red-600 text-white rounded-lg py-2 text-sm cursor-pointer">
                        Remove
                    </button>

                </div>

            </div>
        </div>
    )
}

export default MenuItemCard

