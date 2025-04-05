import { useEffect, useState } from "react";
import { FaCopy } from "react-icons/fa";
import { useLocation, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import useWindowWidth from "../../hooks/useWindowWidth";
import { api } from "../../lib/axios";
import styles from "./Payment.module.css";

const Payment = () => {
  const location = useLocation();
  const { user_id, lote_id } = useParams();
  const [userInformations, setUserInfomation] = useState(null);
  const [pixCopy, setPixCopy] = useState();
  const [qrBase64, setQrBase64] = useState();
  const [loading, setLoading] = useState(true);
  const fullUrl = `${window.location.origin}${location.pathname}${location.search}`;  
  const windowWidth = useWindowWidth();

  useEffect(() => {
    async function fecthApiData() {
      try{
        const { data : userData } = await api.get(`/lote/${lote_id}/inscricoes/user/${user_id}`);
        setUserInfomation(userData);
    
        const { data : paymentData } = await api.get(`/pagamento/user/${user_id}/lote/${lote_id}`);
        setPixCopy(paymentData.qr_code);
        setQrBase64(paymentData.qr_code_base64);

        setLoading(false);
      }catch(error){
        console.log(error);
        toast.error("Usuário não encontrado!") 
      }      
    }

    fecthApiData();
  }, [user_id, lote_id]);

  function handleCopyPix() {
    navigator.clipboard.writeText(pixCopy);
    toast.success("Chave copiada!");
  }

  if(loading){
    return (
      <>
        <ToastContainer autoClose={1500} />
        <LoadingScreen />
      </>
    )        
  }

  return (
    <section className={styles.container}>
      <ToastContainer autoClose={1500} />
      <h1 className="mainTitle">
        <strong>Pagamentos</strong>
      </h1>

      <section className={styles.sectionContainer}>
        <h2>Recibo de Inscrição no VI SERCOMP 2024</h2>
        <span>
          <span className={styles.detach}>Guarde esse link</span>, ele é útil
          para informar o status de pagamento da sua inscrição!
        </span>

        <div className={styles.paymentGroup}>
          <div className={styles.infoGroup}>
          <>
            <span>
              <span className={styles.detach}>Participante: </span>{" "}
              {userInformations.user_name}
            </span>
            <div className={styles.payment}>
              <span className={styles.detach}>Status pagamento: </span>{" "}
              <div className={userInformations.inscricao.status === 'REALIZADO'? styles.paid : styles.pending }>
                {userInformations.inscricao.status}
              </div>
            </div>
            <span>
              <span className={styles.detach}>Lote selecionado: </span>{" "}
              {userInformations.inscricao.nome_lote}
            </span>
            <span>
              <span className={styles.detach}>Preço da inscrição: </span>{" "}
              R$ {userInformations.inscricao.preco.toFixed(2)}
            </span>
            <span>
              <span className={styles.detach}>
                Atividades selecionadas: <br></br>
              </span>
              {userInformations.atividades?.length > 0 ? (
                userInformations.atividades.map((atividade, index) => (
                  <div key={index}>
                    {atividade.nome} - {atividade.tipo} <br></br>{" "}
                  </div>
                ))
              ) : (
                <>Nenhuma</>
              )}
            </span>
          </>
          </div>

          <div className={styles.QRContainer}>
            <img src={qrBase64} className={styles.QRCode} />
            <button onClick={handleCopyPix}>
              Copiar pix <FaCopy />
            </button>
          </div>
        </div>
        <div className={styles.warning}>
          <span>
            <span className={styles.detach}>*</span>Para validar esse recibo
            acesse:<span className={styles.detach}>*</span>
          </span>
          <a className={`${styles.link} ${styles.fullUrl}`} href={fullUrl}>
            {windowWidth > 600 ? fullUrl : "Aqui"}
          </a>
        </div>
      </section>
    </section>
  );
};

export default Payment;
