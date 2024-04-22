import { useState } from "react";
import { FaCopy } from "react-icons/fa";
import { useLocation, useParams } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import styles from "./Pagamento.module.css";

const Pagamento = () => {
	const location = useLocation();
	const { user_id, lote_id } = useParams();
	const [pixCopy, setPixCopy] = useState("Tirar essa valor"); //Pegar da api
	const fullUrl = `${window.location.origin}${location.pathname}${location.search}`;

	// Pegar da API
	const qrBase64 = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjMyMCIgaGVpZ2h0PSIzMjAiIHZpZXdCb3g9IjAgMCAzMjAgMzIwIj48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgZmlsbD0iI2ZmZmZmZiIvPjxnIHRyYW5zZm9ybT0ic2NhbGUoMTIuOCkiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsMCkiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMEw4IDFMMTEgMUwxMSAzTDEwIDNMMTAgMkw5IDJMOSAzTDEwIDNMMTAgNUw5IDVMOSA2TDggNkw4IDhMOSA4TDkgOUwxMCA5TDEwIDEwTDkgMTBMOSAxMUwxMCAxMUwxMCAxMEwxMSAxMEwxMSA5TDEwIDlMMTAgN0wxMSA3TDExIDZMMTIgNkwxMiA5TDEzIDlMMTMgOEwxNCA4TDE0IDEwTDEyIDEwTDEyIDExTDE2IDExTDE2IDhMMTcgOEwxNyAzTDE2IDNMMTYgMkwxNCAyTDE0IDFMMTUgMUwxNSAwTDEzIDBMMTMgMUwxMiAxTDEyIDBaTTEyIDJMMTIgNEwxMyA0TDEzIDJaTTE1IDRMMTUgOEwxNiA4TDE2IDRaTTEwIDVMMTAgNkw5IDZMOSA3TDEwIDdMMTAgNkwxMSA2TDExIDVaTTEyIDVMMTIgNkwxMyA2TDEzIDdMMTQgN0wxNCA2TDEzIDZMMTMgNVpNMCA4TDAgOUwyIDlMMiAxMEwwIDEwTDAgMTdMMSAxN0wxIDE1TDIgMTVMMiAxNkwzIDE2TDMgMTdMNCAxN0w0IDE2TDUgMTZMNSAxN0w3IDE3TDcgMTZMNiAxNkw2IDE1TDcgMTVMNyAxNEw2IDE0TDYgMTNMNyAxM0w3IDEyTDYgMTJMNiAxM0w1IDEzTDUgMTVMNCAxNUw0IDEzTDMgMTNMMyAxMkwyIDEyTDIgMTBMNCAxMEw0IDlMNSA5TDUgOEwzIDhMMyA5TDIgOUwyIDhaTTYgOEw2IDlMNyA5TDcgMTBMNSAxMEw1IDExTDQgMTFMNCAxMkw1IDEyTDUgMTFMNyAxMUw3IDEwTDggMTBMOCA5TDcgOUw3IDhaTTE4IDhMMTggOUwxNyA5TDE3IDEwTDE4IDEwTDE4IDExTDE5IDExTDE5IDEyTDE4IDEyTDE4IDEzTDE2IDEzTDE2IDEyTDE1IDEyTDE1IDEzTDE0IDEzTDE0IDE0TDEzIDE0TDEzIDEzTDEyIDEzTDEyIDE0TDEzIDE0TDEzIDE1TDEyIDE1TDEyIDE2TDExIDE2TDExIDEyTDkgMTJMOSAxM0wxMCAxM0wxMCAxNkw5IDE2TDkgMTdMOCAxN0w4IDE4TDkgMThMOSAyMEw4IDIwTDggMjJMOSAyMkw5IDIwTDEwIDIwTDEwIDIxTDEyIDIxTDEyIDIyTDEwIDIyTDEwIDIzTDggMjNMOCAyNUwxMCAyNUwxMCAyNEwxMSAyNEwxMSAyNUwxNCAyNUwxNCAyMkwxNSAyMkwxNSAyMUwxNiAyMUwxNiAyM0wxOCAyM0wxOCAyMkwxOSAyMkwxOSAyMUwyMSAyMUwyMSAxNkwyMiAxNkwyMiAxOEwyNCAxOEwyNCAxOUwyNSAxOUwyNSAxOEwyNCAxOEwyNCAxNkwyNSAxNkwyNSAxNEwyNCAxNEwyNCAxM0wyNSAxM0wyNSAxMEwyNCAxMEwyNCA5TDI1IDlMMjUgOEwyNCA4TDI0IDlMMTkgOUwxOSA4Wk0xOCA5TDE4IDEwTDE5IDEwTDE5IDlaTTIwIDEwTDIwIDEyTDE5IDEyTDE5IDEzTDE4IDEzTDE4IDE0TDE5IDE0TDE5IDE1TDE4IDE1TDE4IDE2TDE5IDE2TDE5IDE1TDIwIDE1TDIwIDE2TDIxIDE2TDIxIDE1TDIwIDE1TDIwIDEzTDIxIDEzTDIxIDE0TDIzIDE0TDIzIDEzTDI0IDEzTDI0IDEyTDIxIDEyTDIxIDEwWk0yMiAxMEwyMiAxMUwyNCAxMUwyNCAxMFpNOCAxNEw4IDE1TDkgMTVMOSAxNFpNMTQgMTRMMTQgMTVMMTMgMTVMMTMgMTZMMTQgMTZMMTQgMTdMMTUgMTdMMTUgMTlMMTYgMTlMMTYgMTVMMTcgMTVMMTcgMTRMMTYgMTRMMTYgMTVMMTUgMTVMMTUgMTRaTTMgMTVMMyAxNkw0IDE2TDQgMTVaTTIzIDE1TDIzIDE2TDI0IDE2TDI0IDE1Wk0xMCAxNkwxMCAxN0w5IDE3TDkgMThMMTAgMThMMTAgMjBMMTEgMjBMMTEgMTlMMTIgMTlMMTIgMjFMMTMgMjFMMTMgMTlMMTQgMTlMMTQgMThMMTMgMThMMTMgMTdMMTIgMTdMMTIgMThMMTAgMThMMTAgMTdMMTEgMTdMMTEgMTZaTTE3IDE3TDE3IDIwTDIwIDIwTDIwIDE3Wk0xMiAxOEwxMiAxOUwxMyAxOUwxMyAxOFpNMTggMThMMTggMTlMMTkgMTlMMTkgMThaTTE0IDIwTDE0IDIxTDE1IDIxTDE1IDIwWk0yMyAyMEwyMyAyMkwyMCAyMkwyMCAyM0wxOSAyM0wxOSAyNEwyMSAyNEwyMSAyNUwyMiAyNUwyMiAyNEwyNCAyNEwyNCAyNUwyNSAyNUwyNSAyMFpNMTcgMjFMMTcgMjJMMTggMjJMMTggMjFaTTEyIDIyTDEyIDIzTDEzIDIzTDEzIDIyWk0yMSAyM0wyMSAyNEwyMiAyNEwyMiAyM1pNMTYgMjRMMTYgMjVMMTggMjVMMTggMjRaTTAgMEwwIDdMNyA3TDcgMFpNMSAxTDEgNkw2IDZMNiAxWk0yIDJMMiA1TDUgNUw1IDJaTTE4IDBMMTggN0wyNSA3TDI1IDBaTTE5IDFMMTkgNkwyNCA2TDI0IDFaTTIwIDJMMjAgNUwyMyA1TDIzIDJaTTAgMThMMCAyNUw3IDI1TDcgMThaTTEgMTlMMSAyNEw2IDI0TDYgMTlaTTIgMjBMMiAyM0w1IDIzTDUgMjBaIiBmaWxsPSIjMDAwMDAwIi8+PC9nPjwvZz48L3N2Zz4K"

	function handleCopyPix() {
		navigator.clipboard.writeText(pixCopy)
		toast.success("Chave copiada!")
	}

	return (
		<section className={styles.container}>
			<ToastContainer autoClose={1500}/>
			<h1 className="titulo-principal">
				<strong>Pagamentos</strong>
			</h1>

			<section className={styles.sectionContainer}>
				<h2>Recibo de Inscrição no VI SERCOMP 2024</h2>
				<span><span className={styles.destaque}>Guarde esse link</span>, ele é útil para informar o status de pagamento da sua inscrição!</span>

				<div className={styles.paymentGroup}>
					<div className={styles.infoGroup}>
						<span><span className={styles.destaque}>Participante: </span>Pegar da API</span>
						<span><span className={styles.destaque}>Status pagamento: </span>Pegar da API</span>
						<span><span className={styles.destaque}>Lote selecionado: </span>Pegar da API</span>
						<span><span className={styles.destaque}>Preço da inscrição: </span>Pegar da API</span>
						<span><span className={styles.destaque}>Atividades selecionadas: </span>Atividade X(Minicurso), Atividade Y(Oficina), Atividade Z(Workshop)</span>
					</div>

					<div className={styles.QRContainer}>
						<img src={qrBase64} className={styles.QRCode}/>
						<button onClick={handleCopyPix}>Copiar pix <FaCopy /></button>
					</div>
				</div>				
				<div className={styles.aviso}>
					<span><span className={styles.destaque}>*</span>Para validar esse recibo acesse:</span>
					<a className={`${styles.link}`} href={fullUrl}>{fullUrl}</a>
				</div>
			</section>
		</section>
	);
};

export default Pagamento;