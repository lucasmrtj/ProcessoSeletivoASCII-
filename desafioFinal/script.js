

function mudartexto(tx){
   const botaoEdu = document.querySelector("#texto");  
   if (tx=="edu"){
    botaoEdu.innerHTML = "> Ciência da Computação (cursando) - Universidade Federal de Uberlândia <br><br> > Ensino Médio Técnico em Programação - IFTM (Instituto Federal do Triângulo Mineiro) <br><br> > Administrador de rede - Virtual Cursos e Treinamentos <br>";
   }
   else if (tx=="hab"){
      botaoEdu.innerHTML = "> Administrador Server <br>> Linux <br>> Manutenção de hardware<br>> Rede ethernet <br>> C++<br>> C#<br>> Banco de Dados (MySQL)> Modelagem 3D/ 2D<br>> Animação 3D/2D ";
   }
   else if (tx=="sof"){
      botaoEdu.innerHTML = "> Como profissional, valorizo o trabalho em equipe, pois reconheço que a cooperação e o diálogo são essenciais para o êxito de qualquer empreendimento. Possuo habilidades de comunicação eficaz e respeitosa com os meus pares, clientes e superiores, procurando sempre compreender as suas demandas e expectativas. Também sou flexível e adaptável às mudanças, pois sei que elas são inerentes ao cenário dinâmico e competitivo em que atuamos. Além disso, tenho iniciativa e criatividade para propor soluções inovadoras e eficientes para os desafios que se apresentam no cotidiano. Por fim, sou comprometido com os meus propósitos e responsável com as minhas entregas, buscando sempre aprimorar o meu desempenho e aprender com os meus erros e acertos";
   }
}
  