import { useEffect, useState } from "react";
import { FaCopy } from "react-icons/fa";
import { useLocation, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import useWindowWidth from "../../hooks/useWindowWidth";
import styles from "./Pagamento.module.css";
import { api } from "../../lib/axios";

const PagamentoProduto = () => {
  const location = useLocation();
  const { pagamento_id } = useParams();

  const [userInformations, setUserInformation] = useState(null);

  async function fetchData() {
    try {
      const response = await api.get(`/marketplace/pagamentos/${pagamento_id}`);

      const produtos = response.data.venda.map((item) => ({
        quantidade: item.quantidade,
        ...item.produto,
      }));

      console.log(response);

      setUserInformation({
        user_name: response.data.nome,
        pagamento: {
          status: response.data.status_pagamento,
          preco: response.data.valor_total,
        },
        produtos,
        transaction_data: response.data.transaction_data,
      });

      console.log(userInformations);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  //Remover esse valor padrão, ele é apenas para teste

  //Tem que começar com true
  //O valor esta false apenas para ambiente de desenvolvimento!!
  const [loading, setLoading] = useState(false);

  const fullUrl = `${window.location.origin}${location.pathname}${location.search}`;
  const windowWidth = useWindowWidth();

  function handleCopyPix() {
    navigator.clipboard.writeText(userInformations.transaction_data.qr_code);
    toast.success("Chave copiada!");
  }

  if (loading) {
    return (
      <>
        <ToastContainer autoClose={1500} />
        <LoadingScreen />
      </>
    );
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

        {userInformations && (
          <div className={styles.paymentGroup}>
            <div className={styles.infoGroup}>
              <span>
                <span className={styles.destaque}>Participante: </span>{" "}
                {userInformations.user_name}
              </span>
              <div className={styles.pagamento}>
                <span className={styles.destaque}>Status pagamento: </span>{" "}
                <div
                  className={
                    userInformations.pagamento.status === "REALIZADO"
                      ? styles.pago
                      : styles.pendente
                  }
                >
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
                    {produto.nome} - {produto.quantidade} x R${" "}
                    {produto.preco.toFixed(2)}{" "}
                  </div>
                ))}
              </span>
            </div>

            <div className={styles.QRContainer}>
              <img
                src={userInformations.transaction_data.qr_code_base64}
                className={styles.QRCode}
                alt="QR Code"
              />
              <button onClick={handleCopyPix}>
                Copiar pix <FaCopy />
              </button>
            </div>
          </div>
        )}
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
