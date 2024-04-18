import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";  // Importe o ícone de Spinner

import styles from "./Inscricoes.module.css";

const Inscricoes = () => {
	const [selectedOptions, setSelectedOptions] = useState({
		minicurso: "",
		workshop: "",
		oficina: "",
	});

	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm({
		mode: "all",
	});

	async function onSubmit(data) {
		await new Promise((resolve) => setTimeout(resolve, 3000));
		console.log(data);
		console.log(selectedOptions);
	}

	const handleSelectChange = (e) => {
		const { name, value } = e.target;
		setSelectedOptions({ ...selectedOptions, [name]: value });
	};

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
							onChange={handleSelectChange}
						>
							<option value="">Selecione...</option>
							<option value="minicurso-1">Minicurso 1</option>
							<option value="minicurso-2">Minicurso 2</option>
						</select>
					</div>

					<div className={styles.selectGroup}>
						<p>Workshops</p>
						<select
							{...register("workshop")}
							onChange={handleSelectChange}
						>
							<option value="">Selecione...</option>
							<option value="workshop-1">Workshop 1</option>
							<option value="workshop-2">Workshop 2</option>
						</select>
					</div>

					<div className={styles.selectGroup}>
						<p>Oficinas</p>
						<select
							{...register("oficina")}
							onChange={handleSelectChange}
						>
							<option value="">Selecione...</option>
							<option value="oficina-1">Oficina 1</option>
							<option value="oficina-2">Oficina 2</option>
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