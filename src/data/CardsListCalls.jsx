// possível tipagem dos cards da página de atividade para quando o typescript for implementado
// type ActivitieCard = {
//   icon: React component type;
//   title: string;
//   text: string;
//   url: string;
// }

import { CodeBracketIcon, DocumentTextIcon, SparklesIcon, TrophyIcon } from '@heroicons/react/24/outline'

export const callsData = [
  {
    icon: <DocumentTextIcon width={90} color="#f7c94b" />,
    title: 'Trabalhos Científicos',
    text: 'Aqui você encontrará informações sobre a publicação de Trabalhos Cientificos',
    url: '/articles',
  },
  {
    icon: <CodeBracketIcon width={90} color="#f7c94b" />,
    title: 'Hackathon',
    text: 'Aqui você encontrará informações sobre o hackathon',
    url: '/hackathon',
  },
  // {
  //   icon: <SparklesIcon width={90} color="#f7c94b" />,
  //   title: 'Ideathon',
  //   text: 'Aqui você encontrará informações sobre o ideathon',
  //   url: '/ideathon',
  // },
  {
    icon: <TrophyIcon width={90} color="#f7c94b" />,
    title: 'Maratona de Programação',
    text: 'Aqui você encontrará informações sobre a maratona de progamação',
    url: '/programming-marathon',
  },
];