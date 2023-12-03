import styles from "./Product.module.css";

const Product = ({ item }) => {
  return (
    <div className={styles.container}>
      <h1>{item.name}</h1>
    </div>
  );
};

export default Product;
