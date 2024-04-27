import { default as daniloCouraPhoto, default as josemirMouraPhoto } from '../assets/images/image-not-found.png';
import angelicaFelixPhoto from '../assets/images/participacoes/2024/angelica-felix-ufersa.webp';
import ingridtMillenaPhoto from '../assets/images/participacoes/2024/ingridt.webp';
import jannaynaPhoto from '../assets/images/professores/jannayna.png';
import jucelioPhoto from '../assets/images/professores/jucelio.png';

const programacao = [
    {
        date: <>20/<small>MAIO</small></>,
        day: '1º Dia',
        events: [
            { title: 'Noite Nerd', time: '18:30 - 21:30', timeStr: 'NOITE' }
        ]
    },
    {
        date: <>21/<small>MAIO</small></>,
        day: '2º Dia',
        events: [
            { title: 'CREDENCIAMENTO', time: '07:00 - 08:00', timeStr: 'MANHÃ', location: 'Hall de Entrada da UEPB' },
            {
                title: 'Painel I - Desafios e Oportunidades da Ciência de Dados: Navegando pelas Fronteiras da Inovação e Aplicações Práticas',
                time: '19:00 - 21:00', timeStr: 'NOITE', location: "Auditório Celso Furtado",
                participants: [
                    {
                        name: <div><strong>Mediador:</strong> Jannayna Domingues Barros Filgueira</div>,
                        photo: jannaynaPhoto,
                    },
                    {
                        name: <div>Dra. Angélica Félix de Castro (UFERSA)</div>,
                        photo: angelicaFelixPhoto,
                    },
                    {
                        name: <div>Dr. Jucelio Soares dos Santos (UEPB)</div>,
                        photo: jucelioPhoto,
                    },
                    {
                        name: <div>Danilo Coura Moreira (UFCG)</div>,
                        photo: daniloCouraPhoto,
                    },
                ],
            },
            { title: 'Apresentação Cultural II', time: '21:00 - 21:30', timeStr: 'NOITE', location: "Auditório Celso Furtado" }
        ]
    },
    {
        date: <>22/<small>MAIO</small></>,
        day: '3º Dia',
        events: [
            {
                title: 'Painel II - Negócios em Rede: Estratégias de Inovação no Cenário de Transformação Digital',
                time: '18:30 - 20:00', timeStr: 'NOITE', location: "Auditório Celso Furtado",
            },
            { title: 'PitchDay (Apresentação)', time: '20:00 - 21:30', timeStr: 'NOITE' }
        ]
    },
    {
        date: <>23/<small>MAIO</small></>,
        day: '4º Dia',
        events: [
            {
                title: 'Painel III - Deserto Digital: Estratégias das Universidades para um Mundo mais Conectado',
                time: '08:00 - 09:30', timeStr: 'MANHÃ', location: "Auditório Celso Furtado",
                participants: [
                    {
                        name: <div><strong>Mediador:</strong> Dr. Jucelio Soares dos Santos (UEPB)</div>,
                        photo: jucelioPhoto,
                    },
                    {
                        name: <div>Dr. Josemir Moura Maia (UEPB)</div>,
                        photo: josemirMouraPhoto,
                    },
                    {
                        name: <div>Ingridt Millena Vieira Dantas (Virtus)</div>,
                        photo: ingridtMillenaPhoto,
                    },
                ],
            },
        ],
    },
    {
        date: <>24/<small>MAIO</small></>,
        day: '5º Dia',
        events: [
            { title: 'Assembleia', time: '08:00 - 08:30', timeStr: 'MANHÃ' },
        ],
    },
];

export default programacao;