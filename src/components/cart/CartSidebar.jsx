import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../features/ui/uiSlice";
import { clearCart } from "../../features/cart/cartSlice";
import CartItem from "./CartItem";
import toast from "react-hot-toast";
import { MdClear } from "react-icons/md";

function CartSidebar() {
  const { isCartOpen } = useSelector((state) => state.ui);
  const { cartItems } = useSelector((state) => state.cart);

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const deliveryFee = subtotal > 0 ? 40 : 0;
  const grandTotal = subtotal + deliveryFee;

  const dispatch = useDispatch();

  const handleToggleCart = () => {
    dispatch(toggleCart());
  }

  const handleClearCart = () => {
    dispatch(clearCart());
    toast.success("Cart Cleared");
  }

  return (

    <div className={`fixed top-0 right-0 z-50 h-screen w-96 bg-white/15 backdrop-blur-2xl border-l border-white/20 shadow-2xl flex flex-col transition-transform duration-500 ease-in-out
        ${isCartOpen
        ? "translate-x-0"
        : "translate-x-full"
      }
    `}>

      <div className="flex justify-between items-center border-b border-white/20 p-5">

        <h2 className="text-2xl font-bold text-white">
          Your Cart
        </h2>

        <div className="flex gap-3">
          <button
            disabled={cartItems.length === 0}
            onClick={handleClearCart}
            className={`px-3 py-1 rounded-lg transition cursor-pointer text-sm ${cartItems.length === 0
              ? "bg-white/10 text-white/40 cursor-not-allowed"
              : "bg-red-500/70 text-red-200 hover:bg-red-500/30"
              }`}>
            Clear All
          </button>

          <button className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white/30 transition cursor-pointer" onClick={handleToggleCart}>
            <MdClear size={24} />
          </button>
        </div>

      </div>

      <div className="flex-1 overflow-y-auto p-5 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-white/10 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/20">

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center px-6">

            <div className="text-7xl mb-5">
              🛒
            </div>

            <h2 className="text-2xl font-bold text-white">
              Your Cart is Empty
            </h2>

            <p className="text-white/70 mt-3">
              Add your favorite item to get started.
            </p>

          </div>
        ) : (
          cartItems.map((cartItem) => (
            <CartItem
              key={cartItem.id}
              cartItem={cartItem}
            />
          ))
        )}


      </div>

      {cartItems.length > 0 && (
        <div className="border-t border-white/20 p-5">
          <div className="flex justify-between mb-4">
            <div className="w-full space-y-2">

              <div className="flex justify-between text-white/80">

                <span>Items</span>

                <span>{totalItems}</span>

              </div>

              <div className="flex justify-between text-amber-300">

                <span>Subtotal</span>

                <span>${subtotal}</span>

              </div>

              <div className="flex justify-between text-white/80">

                <span>Delivery</span>

                <span>${deliveryFee}</span>

              </div>

              <div className="border-t border-white/20 pt-2 flex justify-between font-bold text-lg text-amber-300">

                <span>Total</span>

                <span>${grandTotal}</span>

              </div>

            </div>
          </div>
        </div>
      )};
    </div>
  );
}

export default CartSidebar;