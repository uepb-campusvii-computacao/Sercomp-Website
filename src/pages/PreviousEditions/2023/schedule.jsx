import rosangela from "../../../assets/images/professores/rosangela.png";
import janderson from "../../../assets/images/professores/janderson.png";
import jannayna from "../../../assets/images/professores/jannayna.png";
import filipe from "../../../assets/images/participacoes/filipe.png";
import luanderson from "../../../assets/images/participacoes/luanderson.png";
import karliane from "../../../assets/images/participacoes/karliane.png";
import cleisson from "../../../assets/images/participacoes/cleisson.png";
import not_found from "../../../assets/images/image-not-found.png";

const programacao = [
  {
    date: (
      <>
        22/<small>MAIO</small>
      </>
    ),
    day: "1º Dia",
    events: [
      {
        title: "CREDENCIAMENTO",
        time: "18:00 - 19:00",
        timeStr: "NOITE",
        location: "Hall de Entrada da UEPB",
      },
      {
        title: "CERIMONIAL",
        time: "19:00 - 19:15",
        timeStr: "NOITE",
        location: "Auditório Celso Furtado",
      },
      {
        title: "APRESENTAÇÃO CULTURAL I",
        time: "19:15 - 19:30",
        timeStr: "NOITE",
        location: "Auditório Celso Furtado",
        participants: [{ name: "Lilyane Dias", photo: not_found }],
      },
      {
        title: "PALESTRA I",
        time: "19:30 - 21:00",
        timeStr: "NOITE",
        location: "Auditório Celso Furtado",
        participants: [{ name: "Cleisson Ramos", photo: cleisson }],
      },
    ],
  },
  {
    date: (
      <>
        23/<small>MAIO</small>
      </>
    ),
    day: "2º Dia",
    events: [
      {
        title: "CREDENCIAMENTO",
        time: "07:00 - 08:00",
        timeStr: "MANHÃ",
        location: "Hall de Entrada da UEPB",
      },
      {
        title: "PALESTRA II",
        time: "08:00 - 09:30",
        timeStr: "MANHÃ",
        location: "Auditório Celso Furtado",
        participants: [{ name: "Karliane Vale", photo: karliane }],
      },
      {
        title: "MINICURSOS",
        time: "09:30 - 11:30",
        timeStr: "MANHÃ",
        location: "Salas Alocadas",
      },
      {
        title: "OFICINAS",
        time: "14:00 - 16:00",
        timeStr: "TARDE",
        location: "Salas Alocadas",
      },
      {
        title: "APRESENTAÇÃO DE ARTIGOS CIENTÍFICOS",
        time: "16:00 - 17:00",
        timeStr: "TARDE",
        location: "Bloco A",
      },
      {
        title: "CREDENCIAMENTO",
        time: "18:00 - 19:00",
        timeStr: "NOITE",
        location: "Hall de Entrada da UEPB",
      },
      {
        title: "APRESENTAÇÃO CULTURAL II",
        time: "18:30 - 19:00",
        timeStr: "NOITE",
        location: "Auditório Celso Furtado",
      },
      {
        title: "MESA REDONDA",
        time: "19:00 - 21:00",
        timeStr: "NOITE",
        location: "Auditório Celso Furtado",
        participants: [
          { name: "Rosângela Medeiros", photo: rosangela },
          { name: "Janderson Aguiar", photo: janderson },
          { name: "Jannayna Domingues", photo: jannayna },
          { name: "Filipe Andrade", photo: filipe },
          { name: "Luanderson Silva", photo: luanderson },
        ],
      },
      {
        title: "SORTEIO DO TEMA DO HACKDAY",
        time: "21:00 - 21:15",
        timeStr: "NOITE",
        location: "Auditório Celso Furtado",
      },
      {
        title: "APRESENTAÇÃO CULTURAL III",
        time: "21:15 - 21:30",
        timeStr: "NOITE",
        location: "Auditório Celso Furtado",
      },
    ],
  },
  {
    date: (
      <>
        24/<small>MAIO</small>
      </>
    ),
    day: "3º Dia",
    events: [
      {
        title: "HACKDAY(ABERTURA)",
        time: "08:00 - 08:30",
        timeStr: "MANHÃ",
        location: "Laboratório (40)",
      },
      {
        title: "FEIRA TECNOLÓGICA",
        time: "08:30 - 11:30",
        timeStr: "MANHÃ",
        location: "Quadra Poliesportiva",
      },
      {
        title: "HACKDAY (DESENVOLVIMENTO)",
        time: "08:30 - 16:00",
        timeStr: "MANHÃ/TARDE",
        location: "Laboratório (40)",
      },
      {
        title: "HACKDAY(APRESENTAÇÃO / AVALIAÇÃO)",
        time: "16:00 - 17:00",
        timeStr: "TARDE",
        location: "Auditório Celso Furtado",
      },
      {
        title: "PREMIAÇÃO DOS ARTIGOS",
        time: "18:00 - 18:10",
        timeStr: "NOITE",
        location: "Guedes",
      },
      {
        title: "PREMIAÇÃO DO HACKDAY",
        time: "18:10 - 18:20",
        timeStr: "NOITE",
        location: "Guedes",
      },
      {
        title: "ENCERAMENTO DO EVENTO",
        time: "18:30 - 18:40",
        timeStr: "NOITE",
        location: "Guedes",
      },
      {
        title: "NOITE NERD",
        time: "18:40 - 22:00",
        timeStr: "NOITE",
        location: "Guedes",
      },
    ],
  },
];

export default programacao;
