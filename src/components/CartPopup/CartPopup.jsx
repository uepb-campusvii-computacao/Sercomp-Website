import PropTypes from "prop-types";
import { useContext } from "react";
import { BiTrash } from "react-icons/bi";
import MarketContext from "../../context/MarketContext";
import styles from "./CartPopup.module.css";

const CartPopup = ({ products, handleBuyClick }) => {
    const { removeProduct } = useContext(MarketContext);
    
    const totalPrice = products.reduce((total, product) => {
        return total + (product.preco * product.quantidade);
    }, 0);
    
    const formattedTotalPrice = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(totalPrice);

  return (
    <div className={styles.cartPopup}>
      <div className={styles.cartProducts}>
        {products.length > 0 ?
            <>
                <div className={styles.cartProductsEntries}>
                    {
                        products.map((product) => (
                            <div key={product.uuid_produto} className={styles.cartProduct}>
                                <p>{product.nome} x {product.quantidade}</p>
                                <button className={styles.removeProduct} onClick={() => removeProduct(product.uuid_produto)}>
                                    <BiTrash size={18}/>
                                </button>
                            </div>                
                        ))
                    }
                </div>
                <p>Total: {formattedTotalPrice}</p>
                <button className={styles.comprarButton} onClick={() => handleBuyClick()}>
                    Comprar
                </button>                
            </>            
        :
            <p>Vazio</p>
        }
      </div>
    </div>
  );
};

CartPopup.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      uuid_produto: PropTypes.string.isRequired,
      nome: PropTypes.string.isRequired,
      quantidade: PropTypes.number.isRequired,
      preco: PropTypes.number.isRequired,
    })
  ).isRequired,
  handleBuyClick: PropTypes.func.isRequired
};

export default CartPopup;