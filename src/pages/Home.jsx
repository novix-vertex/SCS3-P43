import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { fetchMenu } from "../features/menu/menuSlice";

const Home = () => {
    const dispatch = useDispatch();
    const {menu,loading,error} = useSelector((state)=>state.menu);
  
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

    return (
        <div>
            {
                menu.map((menuItem) => {
                    return <div key={menuItem.id}>
                        <img src={menuItem.image} alt="item image" className="h-50 w-50"/>
                        <h2>{menuItem.name}</h2>
                        <h4>{menuItem.price}</h4>
                        <h4>{menuItem.category}</h4>
                        <p>{menuItem.description}</p>
                    </div>

                })
            }
        </div>
    )
}

export default Home