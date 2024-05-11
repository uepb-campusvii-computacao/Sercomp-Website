import { useContext, useState } from "react";
import { BiCart } from "react-icons/bi";
import CartPopup from "../../components/CartPopup/CartPopup";
import EmailPopup from "../../components/EmailPopup/EmailPopup";
import ProductCard from "../../components/ProductCard/ProductCard";
import MarketContext from "../../context/MarketContext";
import styles from "./Market.module.css";

const Market = () => {
    //Pegar esses dados da api:
    const productsMock = [
        {
            uuid_product: "mock1",
            nome: "Caneca",
            descricao: "Caneca do SERCOMP",
            imagem_url:
                "https://www.estampendo.com.br/uploads/images/2023/05/197-caneca-personalizada-dia-das-maes-mae-voce-e-minha-rainha-197-1683144349.jpg",
            preco: 20.0,
        },
        {
            uuid_product: "mock2",
            nome: "Bottom",
            descricao: "Bottom do SERCOMP",
            imagem_url:
                "https://www.printgraf.net.br/uploads/produtos/bottom-personalizado-metal-embalado-em-saco-transparente-com-autocolante-1690258156147267390664bf4aec23895.jpg",
            preco: 5.0,
        }
    ];
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
        <div className={styles.marketContainer}>
            <section className={styles.marketHeader}>
                <h3>Loja Online</h3>
                <div className={styles.headerCart}>
                    <button className={styles.cartButton} onClick={toggleCartPopup}>
                        <BiCart size={30} />
                    </button>
                    { products && products.length > 0 &&
                        <div className={styles.notificationBadge}>
                            {   
                                products.reduce((total, product) => {
                                    return total + product.quantidade;
                                }, 0)
                            }
                        </div>
                    }
                    {showCartPopup && (
                        <CartPopup products={products} handleBuyClick={handleBuyClick} />
                    )}
                </div>
            </section>
            <div className={styles.productContainer}>
                {productsMock.map((product) => (
                    <ProductCard
                        key={product.uuid_product}
                        uuid_product={product.uuid_product}
                        nome={product.nome}
                        descricao={product.descricao}
                        imagem_url={product.imagem_url}
                        preco={product.preco}
                    />
                ))}
            </div>
            {showEmailPopup && <EmailPopup onClose={handleCloseEmailPopup} />}
        </div>
    );
};

export default Market;
