import PropTypes from "prop-types";
import { useContext, useState } from "react";
import MarketContext from "../../context/MarketContext";
import styles from "./EmailPopup.module.css";

const EmailPopup = ({ onClose }) => {
  const { products } = useContext(MarketContext);
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleConfirm = () => {
    if(!email) return

    //fazer envio dos dados aqui
    //products é uma lista do formato: { uuid_product, nome, descricao, imagem_url, preco, quantidade }
    //Aguarda o retorno da chamada a api (pode usar toast pra avisar erros)
    //Depois é só redirecionar pra página de pagamentos

    onClose();
  };

  const handleClickOutside = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.popupOverlay} onClick={handleClickOutside}>
      <div className={styles.popup}>
        <h3>Insira seu email</h3>
        <p>Para confirmar a compra, <strong>é necessário um e-mail que foi utilizado na inscrição</strong> do VI Sercomp.</p>
        <input
          type="email"
          placeholder="Seu email"
          value={email}
          onChange={handleEmailChange}
        />
        <button onClick={handleConfirm}>Confirmar</button>
      </div>
    </div>
  );
};

EmailPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default EmailPopup;