import CartSidebar from "../cart/CartSidebar";
import Navbar from "./Navbar";

const CommonLayout = ({ children }) => {
    return (
        <div className="bg-[url('https://i.pinimg.com/736x/d1/75/9d/d1759d09c421c4faf1b743a64fdbd977.jpg')] bg-cover bg-center min-h-screen">
            <Navbar />

            {children}

            <CartSidebar />
        </div>
    );
};

export default CommonLayout;