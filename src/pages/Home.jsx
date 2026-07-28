import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { fetchMenu } from "../features/menu/menuSlice";
import Navbar from "../components/layout/Navbar";
import CartSidebar from "../components/cart/CartSidebar";
import MenuItemList from "../components/menu/MenuItemList";
import StateCard from "../components/layout/StateCard";
import CommonLayout from "../components/layout/CommonLayout";

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
        return (
            <CommonLayout>
                <StateCard
                    icon={
                        <div className="w-12 h-12 mx-auto border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
                    }
                    title="Loading..."
                    message="Preparing your menu."
                />
            </CommonLayout>
        );
    }
    if (error) {

        return (
            <CommonLayout>
                <StateCard
                    icon="⚠️"
                    title="Something went wrong"
                    message="Unable to fetch menu items."
                >
                    <button
                        onClick={() => dispatch(fetchMenu())}
                        className="mt-6 px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white transition"
                    >
                        Try Again
                    </button>
                </StateCard>
            </CommonLayout>

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
            <CommonLayout>
                <StateCard
                    icon="🔍"
                    title="No Menu Items Found"
                    message="Try another search or category."
                />
            </CommonLayout>
        );
    }

    return (
        <CommonLayout>
            <MenuItemList filteredMenu={filteredMenu} />
        </CommonLayout>
    )
}

export default Home