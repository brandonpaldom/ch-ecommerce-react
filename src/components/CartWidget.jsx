import ShoppingCartIcon from '../assets/icons/shopping-cart.svg';

function CartWidget() {
  return (
    <div className="flex items-center gap-2">
      <img src={ShoppingCartIcon} alt="" />
      <span>0</span>
    </div>
  );
}

export default CartWidget;
