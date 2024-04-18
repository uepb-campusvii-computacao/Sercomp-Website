import { useForm } from 'react-hook-form';

import styles from './Inscricoes.module.css';

const Inscricoes = () => {
	const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
		mode: 'all',
	})

	async function onSubmit(data) {
		await new Promise((resolve) => setTimeout(resolve, 3000))
		console.log(data)
	}

    return (
        <>
        <section className="container">
            <h1 className={styles.tituloPrincipal}>
              <strong>Inscrições</strong>
            </h1>
            
            <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
							<h3>Dados Pessoais</h3>
							<div className={styles.inputContainer}>
								<div className={styles.inputGroup}>
									<input 
										{...register("nome")}
										disabled={isSubmitting}
										required
										type="text"
										placeholder="Nome"
									/>

									<input 
										{...register("nomeCracha")}
										disabled={isSubmitting}
										required
										type="text"
										placeholder="Nome no crachá"
									/>
								</div>
								<div className={styles.inputGroup}>
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
							</div>

							<div className={styles.selectContainer}>
								<div className={styles.selectGroup}>
									<h3>Minicursos</h3>
									<select {...register("minicurso")} required>
										<option value="minicurso-1">Minicurso 1</option>
										<option value="minicurso-2">Minicurso 2</option>
									</select>
								</div>

								<div className={styles.selectGroup}>
									<h3>Workshops</h3>
									<select {...register("workshop")} required>
										<option value="workshop-1">Workshop 1</option>
										<option value="workshop-2">Workshop 2</option>
									</select>
								</div>

								<div className={styles.selectGroup}>
									<h3>Oficinas</h3>
									<select {...register("oficina")} required>
										<option value="oficina-1">Oficina 1</option>
										<option value="oficina-2">Oficina 2</option>
									</select>
								</div>
							</div>

							<button type="submit" disabled={isSubmitting}>
								{isSubmitting ? 'Cadastrando...' : 'Cadastre-se'}
							</button>
            </form>
        </section>
        </>
    );
};

export default Inscricoes;