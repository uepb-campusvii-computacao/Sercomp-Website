import { useContext, useEffect, useState } from "react";
import { BiCart, BiX } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import CartPopup from "../../components/CartPopup/CartPopup";
import EmailPopup from "../../components/EmailPopup/EmailPopup";
import ProductCard from "../../components/ProductCard/ProductCard";
import MarketContext from "../../context/MarketContext";
import { api } from "../../lib/axios";
import styles from "./Market.module.css";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";

const Market = () => {
  const [productsMacket, setProductsMacket] = useState([]);
  const { products } = useContext(MarketContext);
  const [showCartPopup, setShowCartPopup] = useState(false);
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  async function fecthData() {
    setLoading(true);
    await api
      .get(`/events/${import.meta.env.VITE_EVENTO_UUID}/produtos`)
      .then((response) => {
        setProductsMacket(response.data);
      })
      .catch(() => toast.error("Erro ao buscar os dados"));
    setLoading(false);
  }

  useEffect(() => {
    fecthData();
  }, []);

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
          <h3>🌵 Loja Online</h3>
          <div className={styles.headerCart}>
            <button className={styles.cartButton} onClick={toggleCartPopup}>
              {!showCartPopup ? <BiCart size={30} /> : <BiX size={30} />}
            </button>
            {products && products.length > 0 && (
              <div className={`${styles.notificationBadge} ${styles.bounce}`}>
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
        {loading ? (
          <LoadingScreen />
        ) : (
          <div className={styles.productContainer}>
            {productsMacket.map((product) => (
              <ProductCard
                key={product.uuid_produto}
                uuid_produto={product.uuid_produto}
                nome={product.nome}
                descricao={product.descricao}
                imagem_url={product.imagem_url}
                preco={product.preco}
                estoque={product.estoque}
              />
            ))}
          </div>
        )}

        {showEmailPopup && <EmailPopup onClose={handleCloseEmailPopup} />}
        <div className={styles.linkContainer}>
          <a href="/busca/inscricao/pagamentos">
            Já fez alguma compra? Busque aqui!
          </a>
        </div>
      </div>
    </>
  );
};

export default Market;
