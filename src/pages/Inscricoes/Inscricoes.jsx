import { useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa";  // Importe o ícone de Spinner

import styles from "./Inscricoes.module.css";

const Inscricoes = () => {

	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm({
		mode: "all",
	});

	async function onSubmit(data) {
		
		await new Promise((resolve) => setTimeout(resolve, 3000));
		
		const workshop_id = data.workshop
		const minicurso_id = data.oficina
		const oficina_id = data.minicurso

		const {
			nome,
			nome_cracha,
			email,
			instituicao			
		} = data;

		const requestData = {
			nome,
			nome_cracha,
			email,
			instituicao,	 
			atividades: [workshop_id, minicurso_id, oficina_id]
		}

		console.log(requestData);

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

				<div className={styles.selectContainer}>
					<div className={styles.selectGroup}>
						<p>Minicursos</p>
						<select
							{...register("minicurso")}
						>
							<option value="">Selecione...</option>
							<option value="minicurso-id-1">Minicurso 1</option>
							<option value="minicurso-id-2">Minicurso 2</option>
						</select>
					</div>

					<div className={styles.selectGroup}>
						<p>Workshops</p>
						<select
							{...register("workshop")}
						>
							<option value="">Selecione...</option>
							<option value="workshop-id-1">Workshop 1</option>
							<option value="workshop-id-2">Workshop 2</option>
						</select>
					</div>

					<div className={styles.selectGroup}>
						<p>Oficinas</p>
						<select
							{...register("oficina")}
						>
							<option value="">Selecione...</option>
							<option value="oficina-id-1">Oficina 1</option>
							<option value="oficina-id-2">Oficina 2</option>
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