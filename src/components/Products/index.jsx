import ButtonDelete from "../ButtonDelete";
import Count from "../Count";
import "./style.scss";

const Products = ({
  product,
  productDelete,
  increaseProduct,
  decreaseProduct,
  changeValue,
}) => {
  const { img, title, priceTotal, count, id } = product;

  const priceFormatted = new Intl.NumberFormat();
  return (
    <section className="product">
      <div className="product__img">
        <img src={`img/Product/${img}`} alt={title} />
      </div>
      <div className="product__title">{title}</div>
      <div className="product__count">
        <Count
          count={count}
          increaseProduct={increaseProduct}
          decreaseProduct={decreaseProduct}
          changeValue={changeValue}
          id={id}
        />
      </div>
      <div className="product__price">
        {priceFormatted.format(priceTotal)} руб.
      </div>
      <div className="product__controls">
        <ButtonDelete productDelete={productDelete} id={id} />
      </div>
    </section>
  );
};

export default Products;
