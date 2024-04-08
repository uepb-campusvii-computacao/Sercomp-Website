import './Contact.css'
import contato from '../../assets/images/contato.png'

export default function Contact(){
    return (
        <section >
            <div className="contact-container">
                <aside className="contact-aside">
                    <div className="aside-image">
                        <img src={contato} alt="contato"/>
                    </div>
                    <h2>Entre em contato conosco</h2>
                    <p>
                        Qualquer duvida que tiver sobre palestras, minicursos, oficinas, cadastro e tudo mais, entre em
                        contato com a nossa equipe e tire suas duvidas!
                    </p>

                    <ul className="contact-details">

                        <li>
                            <i className="uil uil-phone-times"></i>
                            <h5>+55 (83) 99404-0841</h5>
                        </li>

                        <li>
                            <i className="uil uil-envelope"></i>
                            <h5>cacccampusvii@gmail.com</h5>
                        </li>

                        <li>
                            <i className="uil uil-location-point"></i>
                            <h5>Patos, Paraiba</h5>
                        </li>
                    </ul>

                </aside>

                <form action="https://formspree.io/f/mlekppyd"  method="POST" className="contact-form">
                    <div className="form-name">
                        <input type="text" name="Primeiro nome" placeholder="Primeiro Nome" required/>
                        <input type="text" name="Sobrenome" placeholder="Sobrenome" required/>
                    </div>
                    <input type="email" name="Email" placeholder="Digite seu email" required/>

                    <textarea name="Message" rows="7" required></textarea>
                    <button type="submit" className="btn btn-primary"> Enviar Mensagem</button>
                </form>
            </div>
        </section>
    );
}