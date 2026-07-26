import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { fetchMenu } from "../features/menu/menuSlice";
import Navbar from "../components/layout/Navbar";
import MenuItemCard from "../components/menu/MenuItemCard";

const Home = () => {
    const dispatch = useDispatch();
    const { menu, loading, error } = useSelector((state) => state.menu);
    const { search } = useSelector(
        state => state.filter
    );


    //calling fetchMenu api and this useeffect will only run when dispatch is being hit so added in dependency
    useEffect(() => {
        console.log("api called using dispatch...");
        dispatch(fetchMenu());
    }, [dispatch]);

    if (loading) {
        console.log("loading...");
        return <h2>Loading...</h2>
    }
    if (error) {
        console.log("loading stopped - error occured...");
        return <h2>{error}</h2>
    }


    const filteredMenu = menu.filter((menuItem) => {
        return menuItem.name.toLowerCase().includes(search.toLowerCase())
    });

    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            <div className="max-w-7xl mx-auto p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">                {
                    filteredMenu.map((menuItem) =>
                        <MenuItemCard
                            key={menuItem.id}
                            menuItem={menuItem} />

                    )
                }
                </div>
            </div>
        </div>
    )
}

export default Home