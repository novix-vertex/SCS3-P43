import { useDispatch } from "react-redux";
import { searchByText, filterByCategory } from "../../features/filter/filterSlice";
import { useEffect, useState } from "react";
function Navbar() {

    const [searchText, setSearchText] = useState("");

    const dispatch = useDispatch();

    const handleSearch = (e) => {
        setSearchText(e.target.value);
    }

    const handleFilter = (e) => {
        dispatch(filterByCategory(e.target.value));
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(searchByText(searchText));
        }, 700);

        return (() => {
            clearTimeout(timer);
        });
    }, [searchText, dispatch]);

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
                    <select className="border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400"
                        onChange={handleFilter}>
                        <option value="all">All Categories</option>
                        <option value="burger">Burger</option>
                        <option value="pizza">Pizza</option>
                        <option value="wrap">Wrap</option>
                        <option value="momos">Momos</option>
                        <option value="sandwich">Sandwich</option>
                        <option value="salad">Salad</option>
                        <option value="dessert">Dessert</option>
                        <option value="beverage">Beverage</option>
                        <option value="snacks">Snacks</option>
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