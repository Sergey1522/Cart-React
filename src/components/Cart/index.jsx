import CartFooter from "../CartFooter";
import CartHeader from "../CartHeader";
import Products from "../Products";
import data from "../../data";
import { useState } from "react";
import { useEffect } from "react";

const Cart = () => {
  const [cart, setCart] = useState(data);

  const [total, setTotal] = useState({
    price: cart.reduce((prev, cur) => {
      return prev + cur.price;
    }, 0),
    count: cart.reduce((prev, cur) => {
      return prev + cur.count;
    }, 0),
  });

  useEffect(() => {
    setTotal({
      price: cart.reduce((prev, cur) => {
        return prev + cur.priceTotal;
      }, 0),
      count: cart.reduce((prev, cur) => {
        return prev + cur.count;
      }, 0),
    });
  }, [cart]);

  const productDelete = (id) => {
    setCart((cart) => {
      return cart.filter((product) => {
        return product.id !== id;
      });
    });
  };

  const increaseProduct = (id) => {
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: ++product.count,
            priceTotal: product.count * product.price,
          };
        }
        return product;
      });
    });
  };
  const decreaseProduct = (id) => {
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          const newCount = product.count - 1 > 1 ? product.count - 1 : 1;
          return {
            ...product,
            count: newCount,
            priceTotal: newCount * product.price,
          };
        }
        return product;
      });
    });
  };

  const changeValue = (id, value) => {
    setCart((cart) =>
      cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: value,
            priceTotal: value * product.price,
          };
        }
        return product;
      })
    );
  };

  const products = cart.map((product) => {
    return (
      <Products
        product={product}
        key={product.id}
        productDelete={productDelete}
        increaseProduct={increaseProduct}
        decreaseProduct={decreaseProduct}
        changeValue={changeValue}
      />
    );
  });

  return (
    <section className="cart">
      <CartHeader />
      {products}
      <CartFooter total={total} />
    </section>
  );
};

export default Cart;
