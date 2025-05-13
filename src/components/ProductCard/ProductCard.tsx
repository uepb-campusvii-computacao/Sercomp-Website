import { useContext } from "react";
import { BiCartAdd } from "react-icons/bi";
import MarketContext from "../../context/MarketContext";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  uuid_produto: string;
  nome: string;
  descricao: string;
  imagem_url: string;
  preco: number;
  estoque: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  uuid_produto,
  nome,
  descricao,
  imagem_url,
  preco,
  estoque,
}) => {
  const { addProduct } = useContext(MarketContext);

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
          <div className={styles.productInfo}>
            <span className={styles.productPrice}>{formattedPrice}</span>
            <span>Estoque: {estoque}</span>
          </div>
          <button className={styles.addToCartButton} onClick={addToCart}>
            <BiCartAdd size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
