import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa"; // Importe o ícone de Spinner
import { ToastContainer, toast } from "react-toastify";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import { api } from "../../lib/axios";

import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import styles from "./BuscaInscricao.module.css";

const BuscaInscricao = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    mode: "all",
  });

  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(data) {
    setIsLoading(true);

    try {
      const response = await api.post(
        `events/${import.meta.env.VITE_EVENTO_UUID}/inscricoes/find`,
        data
      );

      navigate(`/pagamento/user/${response.data.uuid_user}/lote/${response.data.uuid_lote}`)
    } catch (err) {
      toast.error("Erro ao buscar usuario")
    }

    setIsLoading(false);
  }

  return (
    <section className={styles.container}>
      <ToastContainer autoClose={1500} />
      <h1 className="titulo-principal">
        <strong>Inscrição</strong>
      </h1>

      {isLoading ? (
        <LoadingScreen />
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.formContainer}
        >
          <div className={styles.inputGroup}>
            <div>
              <p>E-mail</p>
              <input
                disabled={isSubmitting}
                required
                type="email"
                placeholder="email"
                {...register("email", { required: true })}
              />
            </div>
          </div>

          <div className={styles.submitButtonContainer}>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <FaSpinner className={styles.spinner} />
                  Aguarde...
                </>
              ) : (
                "Pesquisar"
              )}
            </button>
          </div>
        </form>
      )}
    </section>
  );
};

export default BuscaInscricao;
