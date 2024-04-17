
import styles from './Inscricoes.module.css';

const Inscricoes = () => {
	async function onSubmit(event) {
		event.preventDefault()

		console.log({
				0: event.target[0].value,
				1: event.target[1].value,
				2: event.target[2].value,
				3: event.target[3].value
		})

		console.log(event)
	}

    return (
        <>
        <section className="container">
            <h1 className={styles.tituloPrincipal}>
              <strong>Inscrições</strong>
            </h1>
            
            <form onSubmit={onSubmit} className={styles.formContainer}>
							<h3>Dados Pessoais</h3>
							<div className={styles.inputContainer}>
								<div className={styles.inputGroup}>
									<input required type="text" name="nome" placeholder="Nome" />
									<input required type="text" name="nomeCracha" placeholder="Nome no crachá" />
								</div>
								<div className={styles.inputGroup}>
									<input required type="email" name="email" placeholder="Email" />
									<input required type="text" name="instituicao" placeholder="Instituição" />
								</div>
							</div>

							<div className={styles.selectContainer}>
								<div className={styles.selectGroup}>
									<h3>Minicursos</h3>
									<select name="minicursos" id="minicursos">
										<option value="minicurso-1">Minicurso 1</option>
										<option value="minicurso-2">Minicurso 2</option>
									</select>
								</div>

								<div className={styles.selectGroup}>
									<h3>Workshops</h3>
									<select required name="workshops" id="workshops">
										<option value="workshop-1">Workshop 1</option>
										<option value="workshop-2">Workshop 2</option>
									</select>
								</div>

								<div className={styles.selectGroup}>
									<h3>Oficinas</h3>
									<select required name="oficinas" id="oficinas">
										<option value="oficina-1">Oficina 1</option>
										<option value="oficina-2">Oficina 2</option>
									</select>
								</div>
							</div>

							<button type="submit">Cadastre-se</button>
            </form>
        </section>
        </>
    );
};

export default Inscricoes;