import { useEffect, useState } from "react";
import { FaCopy } from "react-icons/fa";
import { useLocation, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import useWindowWidth from "../../hooks/useWindowWidth";
import { api } from "../../lib/axios";
import styles from "./Pagamento.module.css";

const AllPagamentoProduto = () => {
  const location = useLocation();
  const { user_id } = useParams();
  const [loading, setLoading] = useState(true);
  const [compras, setCompras] = useState([]);

  const fullUrl = `${window.location.origin}${location.pathname}${location.search}`;
  const windowWidth = useWindowWidth();  

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(`marketplace/user/${user_id}`);
  
        setCompras(
          response.data.map((item) => ({
            user_name: item.usuario.nome,
            status: item.status_pagamento,
            preco: item.valor_total,
            produtos: item.vendas.map((venda) => ({
              quantidade: venda.quantidade,
              uuid_produto: venda.produto.uuid_produto,
              preco: venda.produto.preco,
              nome: venda.produto.nome,
            })),
            transaction_data: item.transaction_data,
          }))
        );

        setLoading(false);
      } catch (error) {
        console.log(error);
        toast.error("Venda não encontrada!") 
      }
    }

    fetchData();
  }, [user_id]);

  function handleCopyPix() {
    navigator.clipboard.writeText(compras.transaction_data.qr_code);
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

        {compras.length != 0 && (
          <div >
            {compras.map((userInformations, index) => (
              <div key={index} className={`${styles.paymentGroupDivider} ${styles.paymentGroup}`}>
                <div className={styles.infoGroup}>
                  <span>
                    <span className={styles.destaque}>Participante: </span>{" "}
                    {userInformations.user_name}
                  </span>
                  <div className={styles.pagamento}>
                    <span className={styles.destaque}>Status pagamento: </span>{" "}
                    <div
                      className={
                        userInformations.status === "REALIZADO"
                          ? styles.pago
                          : styles.pendente
                      }
                    >
                      {userInformations.status}
                    </div>
                  </div>
                  <span>
                    <span className={styles.destaque}>
                      Preço total da compra:{" "}
                    </span>{" "}
                    R$ {userInformations.preco.toFixed(2)}
                  </span>
                  <span>
                    <span className={styles.destaque}>
                      Produtos comprados:{" "}
                    </span>{" "}
                    {userInformations.produtos.map((produto) => (
                      <div key={produto.uuid_produto}>
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
            ))}
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

export default AllPagamentoProduto;
