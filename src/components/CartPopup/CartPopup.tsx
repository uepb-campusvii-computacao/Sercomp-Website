import * as PropTypes from "prop-types";
import { useContext } from "react";
import { BiTrash } from "react-icons/bi";
import MarketContext from "../../context/MarketContext";
import styles from "./CartPopup.module.css";
import { Product } from "../../types/CartPopupProps";
import { CartPopupProps } from "../../types/CartPopupProps";

const CartPopup = ({products, handleBuyClick}: CartPopupProps) => {
    const { removeProduct } = useContext(MarketContext);
    
    const totalPrice = products.reduce((total, product) => {
        return total + (product.price * product.quantity);
    }, 0);
    
    const formattedTotalPrice = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(totalPrice);

  return (
    <div className={styles.cartPopup}>
      <div className={styles.cartProducts}>
        {products.length > 0 ? (
            <>
                <div className={styles.cartProductsEntries}>
                    {products.map((product) => (
                        <div key={product.productId} className={styles.cartProduct}>
                            <p>{product.name} x {product.quantity}</p>
                            <button className={styles.removeProduct} onClick={() => removeProduct(product.productId)}>
                                <BiTrash size={18}/>
                            </button>
                        </div>                
                    ))}
                </div>
                <p>Total: {formattedTotalPrice}</p>
                <button className={styles.buyButton} onClick={() => handleBuyClick()}>
                    Buy
                </button>                
            </>            
        ) : (
            <p>Empty</p>
        )}
      </div>
    </div>
  );
};

CartPopup.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      productId: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  handleBuyClick: PropTypes.func.isRequired
};

export default CartPopup;