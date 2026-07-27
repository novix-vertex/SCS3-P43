import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { fetchMenu } from "../features/menu/menuSlice";
import Navbar from "../components/layout/Navbar";
import CartSidebar from "../components/cart/CartSidebar";
import MenuItemList from "../components/menu/MenuItemList";

const Home = () => {
    const dispatch = useDispatch();
    const { menu, loading, error } = useSelector((state) => state.menu);
    const { search, category } = useSelector(
        state => state.filter
    );


    //calling fetchMenu api and this useeffect will only run when dispatch is being hit so added in dependency
    useEffect(() => {
        dispatch(fetchMenu());
    }, [dispatch]);

    if (loading) {
        return <h2>Loading...</h2>
    }
    if (error) {

        return (
            <div className="text-center py-20">
                <div className="text-7xl">⚠️</div>

                <h2 className="text-2xl font-bold mt-5">
                    Something went wrong
                </h2>

                <p className="text-gray-500 mt-3">
                    Unable to fetch menu items.
                </p>

                <button
                    onClick={() => dispatch(fetchMenu())}
                    className="mt-5 bg-orange-500 text-white px-6 py-2 rounded-lg"
                >
                    Try Again
                </button>

            </div >

        )

    }


    const filteredMenu = menu.filter((menuItem) => {
        const itemName = menuItem.name.toLowerCase();
        const itemCategory = menuItem.category.toLowerCase();

        const searchFilter = search === "" || itemName.includes(search.toLowerCase());
        const categoryFilter = category === "all" || itemCategory === category.toLowerCase();

        return searchFilter && categoryFilter;
    });

    if (filteredMenu.length === 0) {
        return (
            <div className="bg-gray-100 min-h-screen">
                <Navbar />

                <div className="min-h-100 flex flex-col items-center justify-center">

                    <div className="text-5xl">🔍</div>

                    <h2 className="text-2xl font-bold mt-5">
                        No Menu Items Found
                    </h2>

                    <p className="text-gray-500 mt-3">
                        Try another search  
                    </p>

                </div>

                <CartSidebar />
            </div>
        );
    }

    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            <MenuItemList filteredMenu={filteredMenu} />
            <CartSidebar />
        </div>
    )
}

export default Home