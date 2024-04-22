import { useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa"; // Importe o ícone de Spinner

import styles from "./Inscricoes.module.css";
import { api } from "../../lib/axios";
import { useEffect, useState } from "react";

const Inscricoes = () => {
  const [atividades, setAtividades] = useState({
    minicursos: [],
    oficinas: [],
    workshops: [],
  });

  const [lotes, setLotes] = useState([]);

  const [loteSelecionado, setLoteSelecionado] = useState();

  const handleRadioChange = (event) => {
    setLoteSelecionado(event.target.value);
  };

  async function fecthApiData() {
    await api
      .get(`/events/${import.meta.env.VITE_EVENTO_UUID}/atividades`)
      .then((response) => {
        setAtividades(response.data);
      })
      .catch((err) => console.log(err));

    await api
      .get(`/events/${import.meta.env.VITE_EVENTO_UUID}/lotes`)
      .then((response) => {
        setLotes(response.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fecthApiData();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    mode: "all",
  });

  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const workshop_id = data.workshop;
    const minicurso_id = data.oficina;
    const oficina_id = data.minicurso;

    const { nome, nome_cracha, email, instituicao } = data;

    const requestData = {
      nome,
      nome_cracha,
      email,
      instituicao,
      atividades: [workshop_id, minicurso_id, oficina_id],
      lote_id: loteSelecionado || lotes[0].uuid_lote,
    };

    console.log(requestData);

    await api
      .post(`/register/${import.meta.env.VITE_LOTE_UUID}`, requestData)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }

  return (
    <section className={styles.container}>
      <h1 className="titulo-principal">
        <strong>Inscrição</strong>
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
        <div className={styles.inputGroup}>
          <p>Dados Pessoais</p>
          <input
            {...register("nome")}
            disabled={isSubmitting}
            required
            type="text"
            placeholder="Nome"
          />
          <input
            {...register("nome_cracha")}
            disabled={isSubmitting}
            required
            type="text"
            placeholder="Nome no crachá"
          />
          <input
            {...register("email")}
            disabled={isSubmitting}
            required
            type="email"
            placeholder="Email"
          />
          <input
            {...register("instituicao")}
            disabled={isSubmitting}
            required
            type="text"
            placeholder="Instituição"
          />
        </div>

        <div className={styles.inputGroup}>
          <p>Selecione o lote</p>
          <div className={styles.inputGroupLotes}>
            {lotes.map((lote) => (
              <label
                key={lote.uuid_lote}
                htmlFor={lote.uuid_lote}
                className={`${styles.loteContainer} ${
                  loteSelecionado == lote.uuid_lote
                    ? styles.loteContainerChecked
                    : ""
                }`}
              >
                <div className={styles.loteContent}>
                  {lote.nome} <br></br> <span> Valor - R${lote.preco}</span>{" "}
                </div>
                <input
                  id={lote.uuid_lote}
                  type="radio"
                  required
                  disabled={isSubmitting}
                  value={lote.uuid_lote}
                  onChange={handleRadioChange}
                  checked={loteSelecionado === lote.uuid_lote}
                />
              </label>
            ))}
          </div>
        </div>

        <div className={styles.selectContainer}>
          <div className={styles.selectGroup}>
            <p>Minicursos</p>
            <select {...register("minicurso")}>
              <option value="">Selecione...</option>
              {atividades.minicursos.map((minicurso) => (
                <option
                  key={minicurso.uuid_atividade}
                  value={minicurso.uuid_atividade}
                >
                  {minicurso.nome}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.selectGroup}>
            <p>Workshops</p>
            <select {...register("workshop")}>
              <option value="">Selecione...</option>
              {atividades.workshops.map((workshop) => (
                <option
                  key={workshop.uuid_atividade}
                  value={workshop.uuid_atividade}
                >
                  {workshop.nome}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.selectGroup}>
            <p>Oficinas</p>
            <select {...register("oficina")}>
              <option value="">Selecione...</option>
              {atividades.oficinas.map((oficina) => (
                <option
                  key={oficina.uuid_atividade}
                  value={oficina.uuid_atividade}
                >
                  {oficina.nome}
                </option>
              ))}
            </select>
          </div>
        </div>

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
      </form>
    </section>
  );
};

export default Inscricoes;
