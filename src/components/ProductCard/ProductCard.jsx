import PropTypes from "prop-types";
import { useContext } from "react";
import { BiCartAdd } from "react-icons/bi";
import MarketContext from '../../context/MarketContext';
import styles from "./ProductCard.module.css";

const ProductCard = ({ uuid_produto, nome, descricao, imagem_url, preco }) => {
  const { addProduct } = useContext(MarketContext)

  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(preco);

  const addToCart = () => {
    addProduct({ uuid_produto, nome, descricao, imagem_url, preco });
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.cardHeader}>
        <h3 className={styles.productName}>{nome}</h3>
      </div>
      <div className={styles.cardBody}>
        <img src={imagem_url} alt={nome} className={styles.productImage} />
      </div>
      <div className={styles.cardFooter}>
        <p className={styles.productDesc}>{descricao}</p>
        <div className={styles.footerBottom}>
          <p className={styles.productPrice}>{formattedPrice}</p>
          <button className={styles.addToCartButton} onClick={addToCart}>
            <BiCartAdd size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  uuid_produto: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
  imagem_url: PropTypes.string.isRequired,
  preco: PropTypes.number.isRequired,
};

export default ProductCard;
