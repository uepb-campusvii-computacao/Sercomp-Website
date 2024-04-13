// possível tipagem dos cards da página de atividade para quando o typescript for implementado
// type ActivitieCard = {
//   icon: React component type;
//   title: string;
//   text: string;
//   url: string;
// }

import { BookOpenIcon, Cog8ToothIcon, ChatBubbleBottomCenterTextIcon, CodeBracketIcon, DocumentTextIcon, CloudIcon } from '@heroicons/react/24/outline'

export const activitiesCards = [
  {
    icon: <BookOpenIcon width={90} color="#f7c94b" />,
    title: 'Cursos',
    text: 'Aqui você encontrará os cursos disponíveis no evento',
    url: '/cursos',
  },
  {
    icon: <Cog8ToothIcon width={90} color="#f7c94b" />,
    title: 'Oficinas',
    text: 'Aqui você encontrará as oficinas disponíveis no evento',
    url: '/oficinas',
  },
  {
    icon: <ChatBubbleBottomCenterTextIcon width={90} color="#f7c94b" />,
    title: 'Palestras',
    text: 'Aqui você encontrará as palestras disponíveis no evento',
    url: '/palestras',
  },
  {
    icon: <CodeBracketIcon width={90} color="#f7c94b" />,
    title: 'Hackathon',
    text: 'Aqui você encontrará informações sobre o hackathon',
    url: '/hackathon',
  },
  {
    icon: <DocumentTextIcon width={90} color="#f7c94b" />,
    title: 'Artigos',
    text: 'Aqui você encontrará informações sobre a publicação de artigos',
    url: '/artigos',
  },
  {
    icon: <CloudIcon width={90} color="#f7c94b" />,
    title: 'Noite Nerd',
    text: 'Aqui você encontrará informações sobre a Noite Nerd',
    url: '/noite-nerd',
  },
];