import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../features/ui/uiSlice";
import CartItem from "./CartItem";

function CartSidebar() {
  const { isCartOpen } = useSelector((state) => state.ui);
  const { cartItems } = useSelector((state) => state.cart);

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity),0);
  const deliveryFee = subtotal > 0 ? 40 : 0;
  const grandTotal = subtotal + deliveryFee;

  const dispatch = useDispatch();

  if (!isCartOpen) return null;

  const handleToggleCart = () => {
    dispatch(toggleCart());
  }

  return (

    <div className="fixed top-0 right-0 h-screen w-96 bg-white shadow-xl flex flex-col z-50">

      <div className="flex justify-between items-center p-5 border-b">
        <h2 className="text-2xl font-bold">Your Cart</h2>
        <button className="text-xl" onClick={handleToggleCart}>✕</button>
      </div>
      <div className="flex-1 overflow-y-auto p-5">

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">Your cart is empty</p>
        ) : (
          cartItems.map((cartItem) => (
            <CartItem
              key={cartItem.id}
              cartItem={cartItem}
            />
          ))
        )}


      </div>

      <div className="border-t p-5">
        <div className="flex justify-between mb-4">
          <div className="w-full space-y-2">

            <div className="flex justify-between">

              <span>Items</span>

              <span>{totalItems}</span>

            </div>

            <div className="flex justify-between">

              <span>Subtotal</span>

              <span>${subtotal}</span>

            </div>

            <div className="flex justify-between">

              <span>Delivery</span>

              <span>${deliveryFee}</span>

            </div>

            <div className="border-t pt-2 flex justify-between font-bold text-lg">

              <span>Total</span>

              <span>${grandTotal}</span>

            </div>

          </div>
        </div>
        <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600">Checkout</button>
      </div>

    </div>
  );
}

export default CartSidebar;