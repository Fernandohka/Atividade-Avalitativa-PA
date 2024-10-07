import { Card } from "@/components/card";
import Image from "next/image";
import reactImg from "@/app/img/react.png";
import tailwindImg from "@/app/img/tailwind.png";
import nextImg from "@/app/img/next.jpeg";
import jQueryImg from "@/app/img/jQuery.png";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center mt-[25px]">
      <div className="flex flex-wrap gap-10 justify-center">
        <Card titulo="React" desc="O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web." id="reactInfo"></Card>
        <Card titulo="Tailwind" desc='Tailwind CSS é um framework CSS de código aberto.' id="tailwindInfo"></Card>
        <Card titulo="Next" desc="Next.js é uma estrutura da web de desenvolvimento front-end React de código aberto criada por Vercel que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para aplicativos da web baseados em React." id="nextInfo"></Card>
        <Card titulo="JQuery" desc="jQuery é uma biblioteca livre que contém funções da linguagem de programação JavaScript que interage com páginas em HTML" id="jQueryInfo"></Card>
      </div>
      <br />
      <div id="reactInfo" className="p-5 flex flex-col justify-center items-center gap-5 md:w-[768px] bg-black text-white">
        <Image src={reactImg} alt="reactImg" className="w-[250px]"></Image>
        <p className="text-justify">Criado em 2011 pelo Facebook, com a criação de views declarativas e baseando-se em componentes, possuía o intuito de otimizar a atualização e a sincronização de atividades simultâneas no feed de notícias da rede social e melhorar a manutenção de código.</p>
        <p className="text-justify">É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros.</p>
        <p className="text-justify">Em 2015, o Facebook anunciou o módulo React Native, que em conjunto com o React, possibilita o desenvolvimento de aplicativos para Android e iOS utilizando componentes de interface de usuário nativos de ambas plataformas, sem precisar recorrer ao HTML.</p>
        <p className="text-justify">Na pesquisa de 2018 sobre hábitos de desenvolvedores do site Stack Overflow, o React foi a terceira biblioteca ou framework mais citado pelos usuários e desenvolvedores profissionais, ficando atrás somente do Node.js e Angular, respectivamente.</p>
      </div>
      <div id="tailwindInfo" className="p-5 flex flex-col justify-center items-center gap-5 md:w-[768px] bg-white text-black">
        <Image src={tailwindImg} alt="tailwindImg" className="w-[250px]"></Image>
        <p className="text-justify">A principal característica desta biblioteca é que, diferentemente de outros frameworks CSS como Bootstrap , ela não fornece uma série de classes predefinidas para elementos como botões ou tabelas. Em vez disso, ela cria uma lista de classes CSS "utilitárias" que podem ser usadas para estilizar cada elemento misturando e combinando.</p>
        <p className="text-justify">Por exemplo, em outros sistemas tradicionais, haveria uma classe message-warningque aplicaria uma cor de fundo amarela e texto em negrito. Para atingir esse resultado no Tailwind, seria preciso aplicar um conjunto de classes criadas pela biblioteca: bg-yellow-300e font-bold.</p>
        <p className="text-justify">Em 5 de agosto de 2024, o Tailwind CSS tinha mais de 81.000 estrelas no GitHub.</p>
      </div>
      <div id="nextInfo" className="p-5 flex flex-col justify-center items-center gap-5 md:w-[768px] bg-black text-white">
        <Image src={nextImg} alt="nextImg" className="w-[250px]"></Image>
        <p className="text-justify">Next.js é uma estrutura React que permite vários recursos extras, incluindo renderização do lado do servidor e geração de sites estáticos.[5] React é uma biblioteca JavaScript tradicionalmente usada para construir aplicações web renderizadas no navegador do cliente com JavaScript.[6] Os desenvolvedores reconhecem vários problemas com esta estratégia, no entanto, como não atender aos usuários que não têm acesso ao JavaScript ou o desativaram, problemas de segurança em potencial, tempos de carregamento de página significativamente estendidos e pode prejudicar a otimização geral do mecanismo de pesquisa do site.</p>
        <p className="text-justify">Frameworks como Next.js contornam esses problemas, permitindo que parte ou todo o site seja renderizado no lado do servidor antes de ser enviado ao cliente.[6][7] Next.js é um dos componentes mais populares disponíveis no React.</p>
      </div>
      <div id="jQueryInfo" className="p-5 flex flex-col justify-center items-center gap-5 md:w-[768px] bg-white text-black">
        <Image src={jQueryImg} alt="jQueryImg" className="w-[250px]"></Image>
        <p className="text-justify">desenvolvida para simplificar os scripts executados/interpretados no navegador de internet do usuário (client-side).[8] A biblioteca é um projeto da Fundação JS (em inglês: JS Foundation),[9] que faz parte da Fundação Linux (em inglês: Linux Foundation)[10] e seu desenvolvimento é realizado pelo time jQuery (em inglês: The jQuery Team).</p>
        <p className="text-justify">jQuery é uma biblioteca de código aberto baseada na licença MIT.[7] Possui sintaxe que simplifica: a navegação do documento HTML, a seleção de elementos DOM, criar animações, manipular eventos, desenvolver aplicações AJAX e, criar plugins sobre ela. Tais facilidades permitem a criação de camadas de abstração, para interações de baixo nível de modo simplificado em aplicações web dinâmicas de grande complexidade.</p>
        <p className="text-justify">É usada por cerca de 74.4% dos 10 mil sites mais visitados do mundo, jQuery é considerada uma das mais populares bibliotecas do JavaScript.</p>
      </div>
    </div>
  );
}
