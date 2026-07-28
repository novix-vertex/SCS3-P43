import CartSidebar from "../cart/CartSidebar";
import Navbar from "./Navbar";

const CommonLayout = ({ children }) => {
    return (
        <div className="bg-[url('https://i.pinimg.com/736x/a0/7e/87/a07e87a7c12bdc9c234a2eb0cd2f8657.jpg')] bg-cover bg-center min-h-screen">
            <Navbar />

            {children}

            <CartSidebar />
        </div>
    );
};

export default CommonLayout;