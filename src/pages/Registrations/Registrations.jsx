import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa"; // Importe o ícone de Spinner
import { ToastContainer, toast } from "react-toastify";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import { api } from "../../lib/axios";

import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Partners from "../../components/Partners/Partners";
import styles from "./Registrations.module.css";

const Inscricoes = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = useForm({
    mode: "all",
  });

  const [activities, setAtivities] = useState({
    minicursos: [],
    oficinas: [],
    workshops: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  const [lotes, setLotes] = useState([]);

  const selectedLote = watch("lote");

  useEffect(() => {
    async function fecthApiData() {
      try {
        const ativitiesPromise = api.get(
          `/events/${import.meta.env.VITE_EVENTO_UUID}/atividades`
        );
        const lotesPromise = api.get(
          `/events/${import.meta.env.VITE_EVENTO_UUID}/lotes`
        );

        const [ativitiesResponse, lotesResponse] = await Promise.all([
          ativitiesPromise,
          lotesPromise,
        ]);

        setActivitie(ativitiesResponse.data);
        setLotes(lotesResponse.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        toast.error(
          "Erro ao buscar dados da API, recarregando página em 6 segundos"
        );
        await new Promise((r) => setTimeout(r, 6000));
        navigate(0);
      }
    }

    fecthApiData();
  }, [navigate]);

  async function onSubmit(data) {
    const workshop_id = data.workshop;
    const minicurso_id = data.oficina;
    const oficina_id = data.minicurso;

    const { nome, nome_cracha, email, instituicao, lote } = data;

    if (!lote) {
      toast.error("O lote é obrigatório!");
    }

    const requestData = {
      nome,
      nome_cracha,
      email,
      instituicao,
      atividades: { workshop_id, minicurso_id, oficina_id },
      lote_id: lote || lotes[0].uuid_lote,
    };

    try {
      const { data } = await api.post(
        `/register/${import.meta.env.VITE_EVENTO_UUID}`,
        requestData
      );

      toast.success("Inscrição realizada!");
      await new Promise((r) => setTimeout(r, 3000));

      navigate(`/pagamento/user/${data.uuid_user}/lote/${selectedLote}`);
    } catch (error) {
      toast.error(error.response.data);
    }
  }

  return (
    <>
      <section className={styles.container}>
        <ToastContainer autoClose={2500} />
        <h1 className="mainTitle">
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
                <p>Nome completo</p>
                <input
                  disabled={isSubmitting}
                  required
                  type="text"
                  placeholder="Nome completo"
                  {...register("nome", { required: true })}
                />
              </div>
              <div>
                <p>Nome no crachá</p>
                <input
                  disabled={isSubmitting}
                  required
                  type="text"
                  placeholder="Nome no crachá"
                  {...register("nome_cracha", { required: true })}
                />
              </div>
              <div>
                <p>E-mail</p>
                <input
                  disabled={isSubmitting}
                  required
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
              </div>
              <div>
                <p>Instituição</p>
                <input
                  disabled={isSubmitting}
                  required
                  type="text"
                  placeholder="Instituição"
                  {...register("instituicao", { required: true })}
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <p>Selecione o lote</p>
              <div className={styles.inputGroupLotes}>
                {lotes.map((lote) => (
                  <label
                    key={lote.uuid_lote}
                    htmlFor={lote.uuid_lote}
                    className={`${styles.loteContainer} ${
                      selectedLote === lote.uuid_lote
                        ? styles.loteContainerChecked
                        : ""
                    }`}
                  >
                    <div className={styles.loteContent}>
                      {lote.nome} <br />{" "}
                      <span> Valor - R${lote.preco.toFixed(2)}</span>{" "}
                    </div>
                    <input
                      id={lote.uuid_lote}
                      type="radio"
                      value={lote.uuid_lote}
                      checked={selectedLote === lote.uuid_lote}
                      disabled={isSubmitting}
                      {...register("lote")}
                    />
                  </label>
                ))}
              </div>
            </div>

            <div className={styles.selectContainer}>
              <span className={styles.selectContainerAlert}>
                <strong>Aviso: </strong>
                Os minicursos e oficinas acontecem pela manhã, e os workshops
                pela noite. Se não puder participar em algum desses
                horários, não é preciso selecioná-los. Inscreva-se apenas nas
                atividades em que estiver disponível.
              </span>
              <div className={styles.selectGroup}>
                <p>Minicursos</p>
                <select {...register("minicurso")}>
                  <option value="">Selecione...</option>
                  {activities.minicursos.map((minicurso) => (
                    <option
                      key={minicurso.uuid_atividade}
                      value={minicurso.uuid_atividade}
                    >
                      {minicurso.nome} - Vagas{" "}
                      {`(${minicurso._count}/${minicurso.max_participants})`}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.selectGroup}>
                <p>Workshops</p>
                <select {...register("workshop")}>
                  <option value="">Selecione...</option>
                  {activities.workshops.map((workshop) => (
                    <option
                      key={workshop.uuid_atividade}
                      value={workshop.uuid_atividade}
                    >
                      {workshop.nome} - Vagas{" "}
                      {`(${workshop._count}/${workshop.max_participants})`}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.selectGroup}>
                <p>Oficinas</p>
                <select {...register("oficina")}>
                  <option value="">Selecione...</option>
                  {activities.oficinas.map((oficina) => (
                    <option
                      key={oficina.uuid_atividade}
                      value={oficina.uuid_atividade}
                    >
                      {oficina.nome} - Vagas{" "}
                      {`(${oficina._count}/${oficina.max_participants})`}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className={styles.linkContainer}>
              <a href="/busca/inscricao">
                Já está inscrito? Busque sua inscrição aqui!
              </a>
            </div>

            <div className={styles.submitButtonContainer}>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <FaSpinner className={styles.spinner} />
                    Aguarde...
                  </>
                ) : (
                  "Inscrever-se"
                )}
              </button>
            </div>
          </form>
        )}
      </section>
      <Partners />
    </>
  )
};

export default Inscricoes;