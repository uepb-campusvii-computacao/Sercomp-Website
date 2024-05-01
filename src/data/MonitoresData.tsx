import Alessandro from "../assets/images/comite/monitores/Alessandro Viana Figueiredo de Oliveira.jpg";
import Barbara from "../assets/images/comite/monitores/Barbara Alves de Araujo Cabral.jpg";
import Davi from "../assets/images/comite/monitores/Davi Argemiro Henrique Cardoso de Oliveira Filho.jpg";
import Isaque from "../assets/images/comite/monitores/Isaque Batista Nobrega.jpg";
import Jhulia from "../assets/images/comite/monitores/Jhulia Medeiros de Queiroz.jpg";
import Joao from "../assets/images/comite/monitores/Joao Pedro Goncalves Dias da Silva.jpg";
import Laryssa from "../assets/images/comite/monitores/Laryssa Albuquerque Marques.jpg";
import Luanny from "../assets/images/comite/monitores/Luanny Kelly de Almeida Leitao.jpg";
import MariaGabriela from "../assets/images/comite/monitores/Maria Gabriela Galvao Vieira.jpg";
import Yuri from "../assets/images/comite/monitores/Yuri dos Santos Monteiro.jpg";
// import Aryosmar from "../assets/images/comite/monitores/Aryosmar Felipe Almeida.jpg";
import Danilo from "../assets/images/comite/monitores/Danilo de Medeiros Leite.jpg";
import Deivid from "../assets/images/comite/monitores/Deivid dos Santos Souza.jpg";
import Emerson from "../assets/images/comite/monitores/Emerson Rodrigues dos Santos.jpg";
// import Fabricio from "../assets/images/comite/monitores/Fabricio Alves de Araujo Gomes.jpg";
import Francisco from "../assets/images/comite/monitores/Francisco Gabriel de Oliveira Neves.jpg";
import Gilberto from "../assets/images/comite/monitores/Gilberto Domingos Cassiano Junior.jpg";
import Halan from "../assets/images/comite/monitores/Halan Caio Pereira do Nascimento.jpg";
// import JoseNascimento from "../assets/images/comite/monitores/Jose Nascimento de Sousa Neto.jpg";
import Kaua from "../assets/images/comite/monitores/Kaua Ferreira Marques.jpg";
import Laura from "../assets/images/comite/monitores/Laura Rafaella Feitosa Alves de Oliveira.jpg";
import Giordanni from "../assets/images/comite/monitores/Giordanni Alves Formiga.jpg";
// import JoseSamuel from "../assets/images/comite/monitores/Jose Samuel Pinho Clementino.jpg";
// import JoseVinicius from "../assets/images/comite/monitores/Jose Vinicius Soares da Silva.jpg";
import Luciano from "../assets/images/comite/monitores/Luciano Claudio Alves da Silva Segundo.jpg";
import Roger from "../assets/images/comite/monitores/Roger Natan Carvalho Silva.jpg";
import Thulio from "../assets/images/comite/monitores/Thulio Bezerra Alves.jpg";
import Eduardo from "../assets/images/comite/monitores/Eduardo Paulino Dantas.jpg";
// import Giovanni from "../assets/images/comite/monitores/Giovanni Miguel Vieira.jpg";
import JoseOliveira from "../assets/images/comite/monitores/Jose Oliveira de Almeida Neto.jpg";
import Kayke from "../assets/images/comite/monitores/Kayke Nicolas Ferreira Goncalves Campos.jpg";
import Kemelly from "../assets/images/comite/monitores/Kemelly Klaricy Rufino de Lima.jpg";
import Marcia from "../assets/images/comite/monitores/Marcia Crystina Viana de Oliveira.jpg";
import MariaClara from "../assets/images/comite/monitores/Maria Clara Galvao Vieira.jpg";
import Mariana from "../assets/images/comite/monitores/Mariana Alves de Souza.jpg";
import Monyca from "../assets/images/comite/monitores/Monyca Monalyza Almeida Marques.jpg";
import Pedro from "../assets/images/comite/monitores/Pedro Arthur Pereira Franco.jpg";
// import Robson from "../assets/images/comite/monitores/Robson Lourenco Filho.jpg";
// import Ana from "../assets/images/comite/monitores/Ana Silva.jpg";
// import MarianaSantos from "../assets/images/comite/monitores/Mariana Santos.jpg";
// import Rafael from "../assets/images/comite/monitores/Rafael Oliveira.jpg";
// import PedroAlmeida from "../assets/images/comite/monitores/Pedro Almeida.jpg";
// import Camila from "../assets/images/comite/monitores/Camila Oliveira.jpg";
// import Luiza from "../assets/images/comite/monitores/Luiza Pereira.jpg";
// import Fernanda from "../assets/images/comite/monitores/Fernanda Lima.jpg";
// import Jairo from "../assets/images/comite/monitores/Jairo Soares de Lima.jpg";
// import LucasHenrique from "../assets/images/comite/monitores/Lucas Henrique Oliveira de Araujo.jpg";
// import LucasLevingston from "../assets/images/comite/monitores/Lucas Levingston Araujo Gadelha Medeiros.jpg";
// import Matheus from "../assets/images/comite/monitores/Matheus Victor Alves Pereira.jpg";
// import Ruty from "../assets/images/comite/monitores/Ruty da Silva Cardoso.jpg";
// import Yasmin from "../assets/images/comite/monitores/Yasmin Dantas de Araújo.jpg";


interface MonitorType {
   nome: string;
   foto: string;
   area: string;
}

export const monitoresData: MonitorType[] = [
   { nome: "Alessandro Viana Figueiredo de Oliveira", area: "Credenciamento", foto: Alessandro },
   { nome: "Barbara Alves de Araujo Cabral", area: "Credenciamento", foto: Barbara },
   { nome: "Davi Argemiro Henrique Cardoso de Oliveira Filho", area: "Credenciamento", foto: Davi },
   { nome: "Isaque Batista Nobrega", area: "Credenciamento", foto: Isaque },
   { nome: "Jhulia Medeiros de Queiroz", area: "Credenciamento", foto: Jhulia },
   { nome: "Joao Pedro Goncalves Dias da Silva", area: "Credenciamento", foto: Joao },
   { nome: "Laryssa Albuquerque Marques", area: "Credenciamento", foto: Laryssa },
   { nome: "Luanny Kelly de Almeida Leitao", area: "Credenciamento", foto: Luanny },
   { nome: "Maria Gabriela Galvao Vieira", area: "Credenciamento", foto: MariaGabriela },
   { nome: "Yuri dos Santos Monteiro", area: "Credenciamento", foto: Yuri },
   // { nome: "Aryosmar Felipe Almeida", area: "Infraestrutura e Ornamentação", foto: Aryosmar },
   { nome: "Danilo de Medeiros Leite", area: "Infraestrutura e Ornamentação", foto: Danilo },
   { nome: "Deivid dos Santos Souza", area: "Infraestrutura e Ornamentação", foto: Deivid },
   { nome: "Emerson Rodrigues dos Santos", area: "Infraestrutura e Ornamentação", foto: Emerson },
   // { nome: "Fabricio Alves de Araujo Gomes", area: "Infraestrutura e Ornamentação", foto: Fabricio },
   { nome: "Francisco Gabriel de Oliveira Neves", area: "Infraestrutura e Ornamentação", foto: Francisco },
   { nome: "Gilberto Domingos Cassiano Junior", area: "Infraestrutura e Ornamentação", foto: Gilberto },
   { nome: "Halan Caio Pereira do Nascimento", area: "Infraestrutura e Ornamentação", foto: Halan },
   // { nome: "Jose Nascimento de Sousa Neto", area: "Infraestrutura e Ornamentação", foto: JoseNascimento },
   { nome: "Kaua Ferreira Marques", area: "Infraestrutura e Ornamentação", foto: Kaua },
   { nome: "Laura Rafaella Feitosa Alves de Oliveira", area: "Infraestrutura e Ornamentação", foto: Laura },
   { nome: "Giordanni Alves Formiga", area: "Patrocínio", foto: Giordanni },
   // { nome: "Jose Samuel Pinho Clementino", area: "Patrocínio", foto: JoseSamuel },
   // { nome: "Jose Vinicius Soares da Silva", area: "Patrocínio", foto: JoseVinicius },
   { nome: "Luciano Claudio Alves da Silva Segundo", area: "Patrocínio", foto: Luciano },
   { nome: "Roger Natan Carvalho Silva", area: "Patrocínio", foto: Roger },
   { nome: "Thulio Bezerra Alves", area: "Patrocínio", foto: Thulio },
   { nome: "Eduardo Paulino Dantas", area: "Artes e Comunicação", foto: Eduardo },
   // { nome: "Giovanni Miguel Vieira", area: "Artes e Comunicação", foto: Giovanni },
   { nome: "Jose Oliveira de Almeida Neto", area: "Artes e Comunicação", foto: JoseOliveira },
   { nome: "Kayke Nicolas Ferreira Goncalves Campos", area: "Artes e Comunicação", foto: Kayke },
   { nome: "Kemelly Klaricy Rufino de Lima", area: "Artes e Comunicação", foto: Kemelly },
   { nome: "Marcia Crystina Viana de Oliveira", area: "Artes e Comunicação", foto: Marcia },
   { nome: "Maria Clara Galvao Vieira", area: "Artes e Comunicação", foto: MariaClara },
   { nome: "Mariana Alves de Souza", area: "Artes e Comunicação", foto: Mariana },
   { nome: "Monyca Monalyza Almeida Marques", area: "Artes e Comunicação", foto: Monyca },
   { nome: "Pedro Arthur Pereira Franco", area: "Artes e Comunicação", foto: Pedro },
   // { nome: "Robson Lourenco Filho", area: "Artes e Comunicação", foto: Robson },
   // { nome: "Ana Silva", area: "Artes e Comunicação", foto: Ana },
   // { nome: "Mariana Santos", area: "Artes e Comunicação", foto: MarianaSantos },
   // { nome: "Rafael Oliveira", area: "Artes e Comunicação", foto: Rafael },
   // { nome: "Pedro Almeida", area: "Artes e Comunicação", foto: PedroAlmeida },
   // { nome: "Camila Oliveira", area: "Artes e Comunicação", foto: Camila },
   // { nome: "Luiza Pereira", area: "Artes e Comunicação", foto: Luiza },
   // { nome: "Fernanda Lima", area: "Artes e Comunicação", foto: Fernanda },
   // { nome: "Jairo Soares de Lima", area: "Sistemas", foto: Jairo },
   // { nome: "Lucas Henrique Oliveira de Araujo", area: "Sistemas", foto: LucasHenrique },
   // { nome: "Lucas Levingston Araujo Gadelha Medeiros", area: "Sistemas", foto: LucasLevingston },
   // { nome: "Matheus Victor Alves Pereira", area: "Sistemas", foto: Matheus },
   // { nome: "Ruty da Silva Cardoso", area: "Sistemas", foto: Ruty },
   // { nome: "Yasmin Dantas de Araújo", area: "Sistemas", foto: Yasmin }
];
