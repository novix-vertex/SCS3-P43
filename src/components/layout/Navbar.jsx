import { useDispatch, useSelector } from "react-redux";
import { searchByText, filterByCategory } from "../../features/filter/filterSlice";
import { toggleCart } from "../../features/ui/uiSlice";

import { useEffect, useState } from "react";
function Navbar() {

    const [searchText, setSearchText] = useState("");

    const { cartItems } = useSelector((state) => state.cart);

    const dispatch = useDispatch();

    const handleSearch = (e) => {
        setSearchText(e.target.value);
    }

    const handleFilter = (e) => {
        dispatch(filterByCategory(e.target.value));
    }
    const handleToggleCart = () => {
        dispatch(toggleCart())
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
        <header className="bg-white/15 backdrop-blur-xl border-bottom border-white/20 shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4">

                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-amber-300/70 drop-shadow-sm">
                        <span className="text-amber-300/70">☕︎</span> Campus Cafe
                    </h1>

                    <div className="flex items-center gap-4">
                        <button className="relative h-11 w-11 rounded-full text-white bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-xl hover:bg-white/30 transition cursor-pointer" onClick={handleToggleCart}>🛒<span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">{cartItems.reduce((total, item) => {
                            total += item.quantity;
                            return total;
                        }, 0)}</span></button>
                    </div>
                </div>


                <div className="mt-5 flex flex-col md:flex-row gap-4">
                    <input
                        type="text"
                        placeholder="Search food item..."
                        className="flex-1 bg-white/20 border border-white/20 backdrop-blur-md text-white placehoder:text-white/60 rounded-lg px-4 py-2 outline-none focus:border-amber-300"
                        onChange={handleSearch}
                    />
                    <select className="rounded-xl bg-white/30 border border-white/20 backdrop-blur-md px-4 py-2 text-black-70 outline-none focus:border-amber-300"
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

                </div>
            </div>
        </header>
    );
}

export default Navbar;