import MenuItemCard from "./MenuItemCard"

const MenuItemList = ({ filteredMenu }) => {
    return (
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
    )
}

export default MenuItemList