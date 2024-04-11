import programacao from '../../data/ProgramacaoData.jsx'

import TimelineComponent from '../../components/Timeline/Timeline.jsx';
import { Mensagem } from '../../components/Mensagem/Mensagem.jsx';

export default function Timeline(){
    return (
        <Mensagem texto={"Mais informações em breve..."}/>
    );
    // return (
    //     <TimelineComponent timelines={programacao} />
    // );
}