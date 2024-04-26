const programacao = [
    {
        date: <>20/<small>MAIO</small></>,
        day: '1º Dia',
        events: [
            { title: 'Noite Nerd', time: '18:30 - 21:30', timeStr: 'NOITE' }
            ,]
    },
    {
        date: <>21/<small>MAIO</small></>,
        day: '2º Dia',
        events: [
            { title: 'CREDENCIAMENTO', time: '07:00 - 08:00', timeStr: 'MANHÃ', location: 'Hall de Entrada da UEPB' },
            { title: 'CERIMONIAL DE ABERTURA', time: '08:00 - 08:30', timeStr: 'MANHÃ', location: "Auditório Celso Furtado" },
            { title: 'APRESENTAÇÃO CULTURAL I', time: '08:30 - 09:00', timeStr: 'MANHÃ', location: "Auditório Celso Furtado" },
            {
                title: 'PALESTRA I - Trilhando o Caminho da Web 3.0: Conectando Culturas e Transformando Vidas',
                time: '09:00 - 10:00', timeStr: 'MANHÃ', location: "Auditório Celso Furtado"
            },
            { title: 'MINICURSOS', time: '10:00 - 11:30', timeStr: 'MANHÃ' },
            { title: 'Intervalo Almoço', time: '11:30 - 13:00', timeStr: 'TARDE' },
            { title: 'Maratona de Programação', time: '13:00 - 18:00', timeStr: 'TARDE' },
            { title: 'CREDENCIAMENTO', time: '18:00 - 19:00', timeStr: 'TARDE', location: 'Hall de Entrada da UEPB' },
            {
                title: 'Painel I - Desafios e Oportunidades da Ciência de Dados: Navegando pelas Fronteiras da Inovação e Aplicações Práticas',
                time: '19:00 - 21:00', timeStr: 'NOITE', location: "Auditório Celso Furtado",
                participants: [
                    {
                        name: <div><strong>Mediador:</strong> Jannayna Domingues Barros Filgueira</div>,
                        photo: "src/assets/images/professores/jannayna.png"
                    },
                    {
                        name: <div>Dra. Angélica Félix de Castro (UFERSA)</div>,
                        photo: "src/assets/images/participacoes/angelica-felix-ufersa.png"
                    },
                    {
                        name: <div>Dr. Jucelio Soares dos Santos (UEPB)</div>,
                        photo: "src/assets/images/professores/jucelio.png"
                    },
                    {
                        name: <div>Danilo Coura Moreira (UFCG)</div>,
                        photo: "src/assets/images/image-not-found.png"
                    }
                ]
            },
            { title: 'Apresentação Cultural II', time: '21:00 - 21:30', timeStr: 'NOITE', location: "Auditório Celso Furtado" }
            ,]
    },
    {
        date: <>22/<small>MAIO</small></>,
        day: '3º Dia',
        events: [
            { title: 'CREDENCIAMENTO (Participantes da Feira Tecnológica e do Hackathon)', time: '07:00 - 08:00', timeStr: 'MANHÃ', location: 'Hall de Entrada da UEPB' },
            {
                title: 'Exposição Tecnológica e Demonstrações de Soluções / Feira Tecnológica / II Mostra de Estágio em Computação / Hackathon (Abertura/Brainstorming)',
                time: '08:00 - 11:30', timeStr: 'MANHÃ'
            },
            { title: 'Intervalo', time: '11:30 - 14:00', timeStr: 'TARDE' },
            { title: 'Apresentação dos Artigos Científicos / Hackathon (Desenvolvimento)', time: '14:00 - 17:00', timeStr: 'TARDE' },
            { title: 'Intervalo', time: '17:00 - 18:30', timeStr: 'TARDE' },
            {
                title: 'Painel II - Negócios em Rede: Estratégias de Inovação no Cenário de Transformação Digital',
                time: '18:30 - 20:00', timeStr: 'NOITE', location: "Auditório Celso Furtado"
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
                        photo: "src/assets/images/professores/jucelio.png"
                    },
                    {
                        name: <div>Dr. Josemir Moura Maia (UEPB)</div>,
                        photo: "src/assets/images/image-not-found.png"
                    },
                    {
                        name: <div>Ingridt Millena Vieira Dantas (Virtus)</div>,
                        photo: "src/assets/images/participacoes/ingridt.png"
                    }
                ]
            },
            { title: 'Oficinas', time: '09:30 - 11:30', timeStr: 'MANHÃ' },
            { title: 'Intervalo', time: '11:30 - 14:00', timeStr: 'TARDE' },
            { title: 'Hackathon (Apresentação)', time: '14:00 - 17:00', timeStr: 'TARDE' },
            { title: 'Intervalo', time: '17:00 - 18:30', timeStr: 'TARDE' },
            { title: 'Workshops Técnicos', time: '18:30 - 21:30', timeStr: 'NOITE' }
        ]
    },
    {
        date: <>24/<small>MAIO</small></>,
        day: '5º Dia',
        events: [
            { title: 'Assembleia', time: '08:00 - 08:30', timeStr: 'MANHÃ' },
            { title: 'Premiação (Artigos, Hackathon, Maratona de Programação e Ideathon)', time: '09:30 - 10:00', timeStr: 'MANHÃ' },
            { title: 'Sorteios', time: '08:00 - 11:30', timeStr: 'MANHÃ' },
            { title: 'Apresentação Cultural', time: '10:00 - 11:30', timeStr: 'TARDE' }
        ]
    }
];

export default programacao;