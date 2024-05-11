import { useState } from "react";
import { FaCopy } from "react-icons/fa";
import { useLocation, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import useWindowWidth from "../../hooks/useWindowWidth";
import styles from "./Pagamento.module.css";

const PagamentoProduto = () => {
  const location = useLocation();
  const { pagamento_id } = useParams();

  //Remover esse valor padrão, ele é apenas para teste
  const [userInformations, setUserInformation] = useState({
    user_name: "Pessoa Teste",
    pagamento: {
      status: 'REALIZADO',
      preco: 25.0,
    },
    produtos: [
      {
        uuid_product: "1",
        nome: "Produto 1",
        preco: 10.0,
        quantidade: 2,
      },
      {
        uuid_product: "2",
        nome: "Produto 2",
        preco: 15.0,
        quantidade: 1,
      },
    ],
  });

  const [pixCopy, setPixCopy] = useState();
  const [qrBase64, setQrBase64] = useState();

  //Tem que começar com true
  //O valor esta false apenas para ambiente de desenvolvimento!!
  const [loading, setLoading] = useState(false);

  const fullUrl = `${window.location.origin}${location.pathname}${location.search}`;  
  const windowWidth = useWindowWidth();

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
      <h1 className="titulo-principal">
        <strong>Pagamentos</strong>
      </h1>

      <section className={styles.sectionContainer}>
        <h2>Recibo de Compra - Loja Online</h2>
        <span>
          <span className={styles.destaque}>Guarde esse link</span>, ele é útil
          para informar o status de pagamento da sua compra!
        </span>

        <div className={styles.paymentGroup}>
          <div className={styles.infoGroup}>
            <span>
              <span className={styles.destaque}>Participante: </span>{" "}
              {userInformations.user_name}
            </span>
            <div className={styles.pagamento}>
              <span className={styles.destaque}>Status pagamento: </span>{" "}
              <div className={userInformations.pagamento.status === 'REALIZADO'? styles.pago : styles.pendente }>
                {userInformations.pagamento.status}
              </div>
            </div>
            <span>
              <span className={styles.destaque}>Preço total da compra: </span>{" "}
              R$ {userInformations.pagamento.preco.toFixed(2)}
            </span>
            <span>
              <span className={styles.destaque}>Produtos comprados: </span>{" "}
              {userInformations.produtos.map((produto, index) => (
                <div key={index}>
                  {produto.nome} - {produto.quantidade} x R$ {produto.preco.toFixed(2)}{" "}
                </div>
              ))}
            </span>
          </div>

          <div className={styles.QRContainer}>
            <img src={qrBase64} className={styles.QRCode} alt="QR Code" />
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
            {windowWidth > 600 ? fullUrl : "Aqui"}
          </a>
        </div>
      </section>
    </section>
  );
};

export default PagamentoProduto;