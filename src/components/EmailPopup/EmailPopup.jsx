import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import MarketContext from "../../context/MarketContext";
import { api } from "../../lib/axios";
import styles from "./EmailPopup.module.css";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

const EmailPopup = ({ onClose }) => {
  const { products, reset } = useContext(MarketContext);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleConfirm = async () => {
    if (!email) return;
    setIsLoading(true);

    await api
      .post("/marketplace", { email, produtos: products })
      .then((response) => {
        toast.success("Items adicionado ao email");

        reset();
        navigate(`/market/user/${response.data.uuid_user}/pagamentos`);
      })
      .catch((err) => {
        toast.error(err.response.data);
      });

    setIsLoading(false);
    onClose();
  };

  const handleClickOutside = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div>
      <div className={styles.popupOverlay} onClick={handleClickOutside}>
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <div className={styles.popup}>
            <h3>Insira seu email</h3>
            <p>
              Para confirmar a compra,{" "}
              <strong>
                é necessário um e-mail que foi utilizado na inscrição
              </strong>{" "}
              do VI Sercomp.
            </p>
            <input
              type="email"
              placeholder="Seu email"
              value={email}
              onChange={handleEmailChange}
            />
            <button onClick={handleConfirm}>Confirmar</button>
          </div>
        )}
      </div>
    </div>
  );
};

EmailPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default EmailPopup;
