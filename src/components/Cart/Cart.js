import Modal from '../UI/Modal';
import styles from "./Cart.module.css";

const Cart = (props) => {

  const cartItems = <ul className={styles['cart-items']}>{[{id: 'c1', name: 'Sushi', amount: 2, price: 12.99}].map(item => <li>{item.name}</li>)}</ul>;

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={styles.total}>
          <span>Total Amount</span>
          <span>35.62</span>
      </div>
      <div className={styles.actions}>
          <button className={styles['button--alt']} onClick={props.onHideCart}>Close</button>
          <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
