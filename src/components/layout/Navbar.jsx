import { useDispatch } from "react-redux";
import { search } from "../../features/filter/filterSlice";
function Navbar() {

    const dispatch = useDispatch();

    const handleSearch = (e) => {
        dispatch(search(e.target.value));
    }
    
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4">

                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-orange-500">
                        ☕ Campus Cafe
                    </h1>

                    <div className="flex items-center gap-4">
                        <button className="bg-orange-500 py-0.5 px-2 text-white rounded cursor-pointer">Cart</button>
                        <button className="bg-orange-500 py-0.5 px-2 text-white rounded cursor-pointer">Theme</button>
                    </div>
                </div>


                <div className="mt-5 flex flex-col md:flex-row gap-4">
                    <input
                        type="text"
                        placeholder="Search food item..."
                        className="flex-1 border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400"
                        onChange={handleSearch}
                    />
                    <select className="border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400">
                        <option>All Categories</option>
                        <option>Burger</option>
                        <option>Pizza</option>
                        <option>Wrap</option>
                        <option>Momos</option>
                        <option>Sandwich</option>
                        <option>Salad</option>
                        <option>Desert</option>
                        <option>Beverage</option>
                        <option>Snacks</option>
                    </select>
                    <div className="flex rounded-lg overflow-hidden border">
                        <button className="px-4 py-2 bg-orange-500 text-white">
                            Customer
                        </button>
                        <button className="px-4 py-2 bg-gray-100">
                            Admin
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;