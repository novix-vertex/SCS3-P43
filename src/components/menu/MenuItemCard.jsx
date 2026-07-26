const MenuItemCard = ({ menuItem }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <img src={menuItem.image} alt={menuItem.name} className="h-50 w-50" />
            <h2>{menuItem.name}</h2>
            <h4>{menuItem.price}</h4>
            <h4>{menuItem.category}</h4>
            <p>{menuItem.description}</p>
        </div>
    )
}

export default MenuItemCard