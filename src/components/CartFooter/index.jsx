import "./style.scss";

const CartFooter = ({ total }) => {
  const { count, price } = total;

  const priceFormatted = new Intl.NumberFormat();
  return (
    <footer className="cart-footer">
      <div className="cart-footer__count">{count} ед.</div>
      <div className="cart-footer__price">
        {priceFormatted.format(price)} руб.
      </div>
    </footer>
  );
};

export default CartFooter;
