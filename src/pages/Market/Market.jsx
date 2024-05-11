import { useContext, useEffect, useState } from "react";
import { BiCart } from "react-icons/bi";
import CartPopup from "../../components/CartPopup/CartPopup";
import EmailPopup from "../../components/EmailPopup/EmailPopup";
import ProductCard from "../../components/ProductCard/ProductCard";
import MarketContext from "../../context/MarketContext";
import styles from "./Market.module.css";
import { api } from "../../lib/axios";
import { ToastContainer, toast } from "react-toastify";

const Market = () => {
  const [productsMacket, setProductsMacket] = useState([]);

  async function fecthData() {
    await api
      .get(`/events/${import.meta.env.VITE_EVENTO_UUID}/produtos`)
      .then((response) => {
        setProductsMacket(response.data);
      })
      .catch((err) => toast.error("Erro ao buscar os dados"));
  }

  useEffect(() => {
    fecthData();
  }, []);

  const { products } = useContext(MarketContext);
  const [showCartPopup, setShowCartPopup] = useState(false);
  const [showEmailPopup, setShowEmailPopup] = useState(false);

  const toggleCartPopup = () => {
    setShowCartPopup(!showCartPopup);
  };

  const handleBuyClick = () => {
    setShowCartPopup(false);
    setShowEmailPopup(true);
  };

  const handleCloseEmailPopup = () => {
    setShowEmailPopup(false);
  };

  return (
    <>
      <div className={styles.marketContainer}>
        <ToastContainer autoClose={2500} />
        <section className={styles.marketHeader}>
          <h3>Loja Online</h3>
          <div className={styles.headerCart}>
            <button className={styles.cartButton} onClick={toggleCartPopup}>
              <BiCart size={30} />
            </button>
            {products && products.length > 0 && (
              <div className={styles.notificationBadge}>
                {products.reduce((total, product) => {
                  return total + product.quantidade;
                }, 0)}
              </div>
            )}
            {showCartPopup && (
              <CartPopup products={products} handleBuyClick={handleBuyClick} />
            )}
          </div>
        </section>
        <div className={styles.productContainer}>
          {productsMacket.map((product) => (
            <ProductCard
              key={product.uuid_produto}
              uuid_produto={product.uuid_produto}
              nome={product.nome}
              descricao={product.descricao}
              imagem_url={product.imagem_url}
              preco={product.preco}
            />
          ))}
        </div>

        {showEmailPopup && <EmailPopup onClose={handleCloseEmailPopup} />}
      </div>
      <div className={styles.linkContainer}>
        <a href="/busca/inscricao/pagamentos">
          Já fez alguma compra? Busque aqui!
        </a>
      </div>
    </>
  );
};

export default Market;
