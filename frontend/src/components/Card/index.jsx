import React from "react";
import styles from "./Card.module.scss";
import source from "../../../static/2.jpeg";
import cart from "/src/assets/cart.png";

export default function OneProductCard() {
  const product = {
    image: "/static/2.jpeg",
    name: "название цветка тут ",
    qty: 2,
    price: 999,
  };

  const handleOrder = () => {
    // здесь должен быть код для добавления товара в корзину или другие действия
    console.log("Заказан продукт:", product);
  };

  return (
    <div className={styles.card}>
      <img className={styles.media} src={source} alt="Product" />
      <div className={styles.card_content}>
        <div className={styles.product_name}>
          <div>{product.name}</div>
          <div className={styles.qty}> В наличии: {product.qty}</div>
        </div>
        <div className={styles.priceBlock}>
          <div className={styles.price}>{product.price} ₽</div>
          <button onClick={handleOrder}>
            <img src={cart} className={styles.cart} />
          </button>
        </div>
      </div>
    </div>
  );
}
