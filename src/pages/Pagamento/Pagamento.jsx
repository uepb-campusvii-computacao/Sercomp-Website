import styles from "./Pagamento.module.css";

const Pagamento = () => {
	function handleCopyPix() {
		const chavePix = "chave pix teste"

		navigator.clipboard.writeText(chavePix)
	}

	return (
		<section className={styles.container}>
			<h1 className="titulo-principal">
				<strong>Inscrição</strong>
			</h1>

			<section className={styles.sectionContainer}>
				<p>Pagamento</p>

				<div className={styles.paymentGroup}>
					<div className={styles.infoGroup}>
						<div className={styles.info}>VI Sercomp</div>
						<div className={styles.info}>Nome do pix</div>
						<div className={styles.info}>Lista de minicursos</div>

						<div className={styles.infoList}>Nome do minicurso</div>
						<div className={styles.infoList}>Nome da oficina</div>
						<div className={styles.infoList}>Nome do workshop</div>
					</div>

					<div className={styles.QRContainer}>
						<div className={styles.QRCode}>QR-Code aqui</div>

						<button onClick={handleCopyPix}>Copiar pix</button>
					</div>
				</div>
			</section>
		</section>
	);
};

export default Pagamento;