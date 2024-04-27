import { useEffect, useState } from "react";
import { FaCopy } from "react-icons/fa";
import { useLocation, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { api } from "../../lib/axios";
import styles from "./Pagamento.module.css";

const Pagamento = () => {
  const location = useLocation();
  const { user_id, lote_id } = useParams();
  const [userInformations, setUserInfomation] = useState(null);
  const [pixCopy, setPixCopy] = useState();
  const [qrBase64, setQrBase64] = useState();
  const fullUrl = `${window.location.origin}${location.pathname}${location.search}`;

  async function fecthApiData() {
    await api.get(`/lote/${lote_id}/inscricoes/user/${user_id}`).then((res) => {
      setUserInfomation(res.data);
    });

    await api.get(`/pagamento/user/${user_id}/lote/${lote_id}`).then((res) => {
      setPixCopy(res.data.qr_code);
      setQrBase64(res.data.qr_code_base64);
    });
  }

  useEffect(() => {
    fecthApiData();
  }, []);

  function handleCopyPix() {
    navigator.clipboard.writeText(pixCopy);
    toast.success("Chave copiada!");
  }

  return (
    <section className={styles.container}>
      <ToastContainer autoClose={1500} />
      <h1 className="titulo-principal">
        <strong>Pagamentos</strong>
      </h1>

      <section className={styles.sectionContainer}>
        <h2>Recibo de Inscrição no VI SERCOMP 2024</h2>
        <span>
          <span className={styles.destaque}>Guarde esse link</span>, ele é útil
          para informar o status de pagamento da sua inscrição!
        </span>

        <div className={styles.paymentGroup}>
          <div className={styles.infoGroup}>
            {userInformations ? (
              <>
                <span>
                  <span className={styles.destaque}>Participante: </span>{" "}
                  {userInformations.user_name}
                </span>
                <span>
                  <span className={styles.destaque}>Status pagamento: </span>{" "}
                  {userInformations.inscricao.status}
                </span>
                <span>
                  <span className={styles.destaque}>Lote selecionado: </span>{" "}
                  {userInformations.inscricao.nome_lote}
                </span>
                <span>
                  <span className={styles.destaque}>Preço da inscrição: </span>{" "}
                  {userInformations.inscricao.preco.toFixed(2)} R$
                </span>
                <span>
                  <span className={styles.destaque}>
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
            ) : (
              <p>Carregando...</p>
            )}
          </div>

          <div className={styles.QRContainer}>
            <img src={qrBase64} className={styles.QRCode} />
            <button onClick={handleCopyPix}>
              Copiar pix <FaCopy />
            </button>
          </div>
        </div>
        <div className={styles.aviso}>
          <span>
            <span className={styles.destaque}>*</span>Para validar esse recibo
            acesse:<span className={styles.destaque}>*</span>
          </span>
          <a className={`${styles.link} ${styles.fullUrl}`} href={fullUrl}>
            {fullUrl}
          </a>
        </div>
      </section>
    </section>
  );
};

export default Pagamento;
