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
        return <h2>{error}</h2>
    }


    const filteredMenu = menu.filter((menuItem) => {
        const itemName = menuItem.name.toLowerCase();
        const itemCategory = menuItem.category.toLowerCase();

        const searchFilter = search === "" || itemName.includes(search.toLowerCase());
        const categoryFilter = category === "all" || itemCategory === category.toLowerCase();

        return searchFilter && categoryFilter;
    });

    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            <MenuItemList filteredMenu={filteredMenu} />
            <CartSidebar />
        </div>
    )
}

export default Home