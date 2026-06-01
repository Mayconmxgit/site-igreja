const eventos = [
  { mes: "Janeiro", data: "01", titulo: "Confraternização no salão Doces Lembranças.", publico: "Todos" },
  { mes: "Janeiro", data: "03 a 15", titulo: "Férias Pastoral.", publico: "Todos" },
  { mes: "Janeiro", data: "07", titulo: "Ministério de Louvor - Reunião com o Instrumental.", publico: "Ministério de Louvor" },
  { mes: "Janeiro", data: "08", titulo: "Início das Quintas com Propósito (Janeiro).", publico: "Todos" },
  { mes: "Janeiro", data: "12", titulo: "Ministério de Louvor - Reunião com todos do Ministério.", publico: "Ministério de Louvor" },
  { mes: "Janeiro", data: "15", titulo: "Quinta com Propósito (Fevereiro).", publico: "Todos" },
  { mes: "Janeiro", data: "22", titulo: "Quinta com Propósito (Março).", publico: "Todos" },
  { mes: "Janeiro", data: "28", titulo: "Departamento Kids – Reunião com os Professores.", publico: "Departamento Kids" },
  { mes: "Janeiro", data: "29", titulo: "Quinta com Propósito (Abril).", publico: "Todos" },
  { mes: "Janeiro", data: "30", titulo: "Retiro do Ministério de Louvor.", publico: "Ministério de Louvor" },
  { mes: "Fevereiro", data: "01", titulo: "Ceia do Senhor. “Apresentação da Ana e Lia”.", publico: "Todos" },
  { mes: "Fevereiro", data: "03", titulo: "Mulheres de fé - “Projeto Mulheres de Palavra”. 19:30h.", publico: "Mulheres" },
  { mes: "Fevereiro", data: "05", titulo: "Quinta com Propósito (Maio).", publico: "Todos" },
  { mes: "Fevereiro", data: "07", titulo: "Mulheres de Palavra - “Açaí delivery”.", publico: "Mulheres" },
  { mes: "Fevereiro", data: "08", titulo: "Departamento kids - aula sobre porque não celebramos o Carnaval.", publico: "Departamento Kids" },
  { mes: "Fevereiro", data: "10", titulo: "Mulheres de fé – Culto no Lar (Lorraine).", publico: "Mulheres" },
  { mes: "Fevereiro", data: "12", titulo: "Quinta com propósito (Junho).", publico: "Todos" },
  { mes: "Fevereiro", data: "15", titulo: "Evangelismo e Missões (minuto missionário).", publico: "Evangelismo" },
  { mes: "Fevereiro", data: "19", titulo: "Quinta com Propósito (Julho).", publico: "Todos" },
  { mes: "Fevereiro", data: "21", titulo: "Evangelismo e Missões – Evangelismo.", publico: "Evangelismo" },
  { mes: "Fevereiro", data: "22", titulo: "Departamento de Evangelismo e Missões – Culto de Missões - Mis. André Guiné-Bissau.", publico: "Evangelismo" },
  { mes: "Fevereiro", data: "24", titulo: "Mulheres de Palavra - ensaio.", publico: "Mulheres" },
  { mes: "Fevereiro", data: "25", titulo: "Igreja - Culto de louvor a Deus pelo início do ano letivo – às 19:30h.", publico: "Todos" },
  { mes: "Fevereiro", data: "26", titulo: "Quinta com Propósito (agosto).", publico: "Todos" },
  { mes: "Fevereiro", data: "28", titulo: "Igreja – escola de música - ensaio aberto no templo – às 16h.", publico: "Todos" },
  { mes: "Março", data: "01", titulo: "Ceia do Senhor.", publico: "Todos" },
  { mes: "Março", data: "05", titulo: "Quinta com Propósito – Setembro).", publico: "Todos" },
  { mes: "Março", data: "08", titulo: "Dia Internacional da Mulher – (Manhã sala) - Mis. Ediva. (Noite) - Resp. “Homens em Ação”. Departamento kids – cantina.", publico: "Todos" },
  { mes: "Março", data: "08", titulo: "Evangelismo e Missões – (Noite - minuto Missionário).", publico: "Evangelismo" },
  { mes: "Março", data: "10", titulo: "Igreja - Culto de Gratidão (Aniversário Juliana). 19:30h.", publico: "Todos" },
  { mes: "Março", data: "11", titulo: "Ministério de Louvor - WORSHOP.", publico: "Ministério de Louvor" },
  { mes: "Março", data: "12", titulo: "Quinta com propósito - (outubro).", publico: "Todos" },
  { mes: "Março", data: "15", titulo: "Departamento Kids – culto infantil.", publico: "Departamento Kids" },
  { mes: "Março", data: "17", titulo: "Mulheres de Fé - projeto mulheres de Palavra. 19:30h.", publico: "Mulheres" },
  { mes: "Março", data: "19", titulo: "Quinta com propósito - (novembro).", publico: "Todos" },
  { mes: "Março", data: "21", titulo: "Ministério de Louvor - Culto de intercâmbio.", publico: "Ministério de Louvor" },
  { mes: "Março", data: "22", titulo: "Evangelismo e Missões - Evangelismo após a EBD.", publico: "Evangelismo" },
  { mes: "Março", data: "24", titulo: "Culto no Lar (Homens e Mulheres).", publico: "Todos" },
  { mes: "Março", data: "26", titulo: "Quinta com propósito - (dezembro).", publico: "Todos" },
  { mes: "Março", data: "28", titulo: "JUBACI – Fire (igreja- sábado) 19h.", publico: "JUBACI" },
  { mes: "Março", data: "29", titulo: "Departamento Kids – projeto musical.", publico: "Departamento Kids" },
  { mes: "Março", data: "29", titulo: "Igreja – culto na resp. dos alunos do STEV.", publico: "Todos" },
  { mes: "Março", data: "31", titulo: "Mulheres de Fé – Projeto Mulheres de Palavra.", publico: "Mulheres" },
  { mes: "Abril", data: "05", titulo: "Igreja – Ceia do Senhor.", publico: "Todos" },
  { mes: "Abril", data: "05", titulo: "Ministério de Louvor – Louvor Especial de Páscoa.", publico: "Ministério de Louvor" },
  { mes: "Abril", data: "05", titulo: "Departamento kids - aula de Páscoa.", publico: "Departamento Kids" },
  { mes: "Abril", data: "07", titulo: "Culto no lar (Homens e Mulheres).", publico: "Todos" },
  { mes: "Abril", data: "12", titulo: "Departamento Kids - projeto musical.", publico: "Departamento Kids" },
  { mes: "Abril", data: "12", titulo: "Evangelismo e Missões – (minuto missionário).", publico: "Evangelismo" },
  { mes: "Abril", data: "14", titulo: "Mulheres de Fé - Projeto mulheres de Palavra.", publico: "Mulheres" },
  { mes: "Abril", data: "14", titulo: "JUBACI – Comemoração dos aniversariantes do quadrimestre.", publico: "JUBACI" },
  { mes: "Abril", data: "18", titulo: "JUBACI - Culto Sábado – 19h.", publico: "JUBACI" },
  { mes: "Abril", data: "19", titulo: "Evangelismo e Missões - Culto de Missões.", publico: "Evangelismo" },
  { mes: "Abril", data: "21", titulo: "JUBACI - Atos culto Igreja - 20h.", publico: "JUBACI" },
  { mes: "Abril", data: "25", titulo: "Departamento Kids – Sábado – Gincana.", publico: "Departamento Kids" },
  { mes: "Abril", data: "25", titulo: "Ministério de Louvor - Sábado de Adoração.", publico: "Ministério de Louvor" },
  { mes: "Abril", data: "26", titulo: "Departamento Kids - culto infantil.", publico: "Departamento Kids" },
  { mes: "Abril", data: "28", titulo: "JUBACI - Atos Igreja – 20h.", publico: "JUBACI" },
  { mes: "Maio", data: "01 a 03", titulo: "Igreja - Retiro (a definir).", publico: "Todos" },
  { mes: "Maio", data: "01", titulo: "Ministério de Louvor - Vigília.", publico: "Ministério de Louvor" },
  { mes: "Maio", data: "03", titulo: "Igreja - Ceia do Senhor.", publico: "Todos" },
  { mes: "Maio", data: "05", titulo: "Mulheres de Fé – Projeto Mulheres de Palavra – 19:30h.", publico: "Mulheres" },
  { mes: "Maio", data: "10", titulo: "Igreja - Departamento Kids – Dia das Mães - projeto musical.", publico: "Departamento Kids" },
  { mes: "Maio", data: "16", titulo: "Ministério de Louvor - Evangelismo.", publico: "Ministério de Louvor" },
  { mes: "Maio", data: "17", titulo: "Mulheres Fé - Cantina Feijão Mexicano (delivery).", publico: "Mulheres" },
  { mes: "Maio", data: "17", titulo: "Igreja – Culto da Família.", publico: "Todos" },
  { mes: "Maio", data: "19", titulo: "Igreja - Culto de Casais.", publico: "Casais" },
  { mes: "Maio", data: "23", titulo: "JUBACI – Atos culto (igreja - sábado 19h).", publico: "JUBACI" },
  { mes: "Maio", data: "24", titulo: "Igreja - Culto da família.", publico: "Todos" },
  { mes: "Maio", data: "26", titulo: "JUBACI – Atos Igreja - 20h.", publico: "JUBACI" },
  { mes: "Maio", data: "31", titulo: "Departamento Kids - Culto infantil.", publico: "Departamento Kids" },
  { mes: "Junho", data: "06", titulo: "JUBACI – Fire - Igreja Sábado 19h.", publico: "JUBACI" },
  { mes: "Junho", data: "07", titulo: "Igreja - Ceia do Senhor.", publico: "Todos" },
  { mes: "Junho", data: "07", titulo: "Departamento Kids – Aula especial sobre festa junina.", publico: "Departamento Kids" },
  { mes: "Junho", data: "11", titulo: "Igreja – Culto de gratidão (aniversário do pastor Enéas).", publico: "Todos" },
  { mes: "Junho", data: "14", titulo: "Departamento Kids - Projeto musical.", publico: "Departamento Kids" },
  { mes: "Junho", data: "14", titulo: "Ministério de Louvor - Culto da Saudade.", publico: "Ministério de Louvor" },
  { mes: "Junho", data: "16", titulo: "Mulheres de Fé - Projeto Mulheres de Palavra - 19:30h.", publico: "Mulheres" },
  { mes: "Junho", data: "20", titulo: "Ministério de Louvor- Intercâmbio.", publico: "Ministério de Louvor" },
  { mes: "Junho", data: "21", titulo: "Evangelismo e Missões - Culto de Missões.", publico: "Evangelismo" },
  { mes: "Junho", data: "23", titulo: "Mulheres de Fé - Festa das aniversariantes (churrasco).", publico: "Mulheres" },
  { mes: "Junho", data: "28", titulo: "Departamento Kids - Culto infantil.", publico: "Departamento Kids" },
  { mes: "Junho", data: "30", titulo: "Mulheres de Fé - Projeto Mulheres de Palavra – 19:30h.", publico: "Mulheres" },
  { mes: "Julho", data: "04", titulo: "Ministério de Louvor - Sábado da Adoração.", publico: "Ministério de Louvor" },
  { mes: "Julho", data: "05", titulo: "Igreja – Ceia do Senhor.", publico: "Todos" },
  { mes: "Julho", data: "11", titulo: "JUBACI - Atos Culto Igreja Sábado - 19h.", publico: "JUBACI" },
  { mes: "Julho", data: "11", titulo: "Mulheres de Fé – Projeto Tamar - 16h. (Prel. Thamires Barros).", publico: "Mulheres" },
  { mes: "Julho", data: "11", titulo: "Homens em Ação – Convite - Igreja Batista Ágape.", publico: "Homens" },
  { mes: "Julho", data: "14", titulo: "Mulheres de Fé - Projeto Mulheres de Palavra – 19:30h.", publico: "Mulheres" },
  { mes: "Julho", data: "18", titulo: "Casamento – Marcos e Lorena - 18h.", publico: "Todos" },
  { mes: "Julho", data: "18", titulo: "JUBACI – Oração no Monte/ Igreja - 19:40h.", publico: "JUBACI" },
  { mes: "Julho", data: "19", titulo: "Ministério de Louvor - Culto Instrumental.", publico: "Ministério de Louvor" },
  { mes: "Julho", data: "20", titulo: "Aniversário da Helena (Filha do Pastor).", publico: "Todos" },
  { mes: "Julho", data: "21", titulo: "Mulheres de Fé - Culto no Lar.", publico: "Mulheres" },
  { mes: "Julho", data: "21", titulo: "JUBACI - Oração Monte/Igreja - 19:40h.", publico: "JUBACI" },
  { mes: "Julho", data: "24 a 26", titulo: "Departamento Kids – EBF 2026.", publico: "Departamento Kids" },
  { mes: "Julho", data: "26", titulo: "Homens em ação – Culto na Resp. dos homens.", publico: "Homens" },
  { mes: "Julho", data: "28", titulo: "Mulheres de Fé - Projeto Mulheres de Palavra - 19:30h.", publico: "Mulheres" },
  { mes: "Julho", data: "28", titulo: "JUBACI – Oração Monte/Igreja - 19:40h.", publico: "JUBACI" },
  { mes: "Agosto", data: "02", titulo: "Igreja - Ceia do Senhor.", publico: "Todos" },
  { mes: "Agosto", data: "04", titulo: "Culto no lar (Homens e Mulheres).", publico: "Todos" },
  { mes: "Agosto", data: "04", titulo: "JUBACI - Oração - Monte/Igreja - 19:40h.", publico: "JUBACI" },
  { mes: "Agosto", data: "07", titulo: "Mulheres de fé - Cantina (Delivery).", publico: "Mulheres" },
  { mes: "Agosto", data: "09", titulo: "Igreja – Departamento Kids – Dia dos pais (Projeto Musical).", publico: "Departamento Kids" },
  { mes: "Agosto", data: "09", titulo: "Evangelismo e Missões - Após EBD Evangelismo – (Noite - Minuto Missionário).", publico: "Evangelismo" },
  { mes: "Agosto", data: "11", titulo: "Mulheres de fé - Projeto Mulheres de Palavra - 19:30h.", publico: "Mulheres" },
  { mes: "Agosto", data: "11", titulo: "JUBACI - Oração - Monte/Igreja - 19:40h.", publico: "JUBACI" },
  { mes: "Agosto", data: "12", titulo: "Ministério de Louvor - WORSHOP.", publico: "Ministério de Louvor" },
  { mes: "Agosto", data: "15", titulo: "Mulheres de fé - Intercâmbio - Igreja Batista do Consolo.", publico: "Mulheres" },
  { mes: "Agosto", data: "18", titulo: "Aniversário da Débora – (Filha do Pastor).", publico: "Todos" },
  { mes: "Agosto", data: "18", titulo: "JUBACI - Oração- Monte/Igreja - 19:40h.", publico: "JUBACI" },
  { mes: "Agosto", data: "22 a 23", titulo: "Evangelismo e Missões - Seminário.", publico: "Evangelismo" },
  { mes: "Agosto", data: "25", titulo: "Homens e Mulheres – Culto de Casais.", publico: "Casais" },
  { mes: "Agosto", data: "28 a 30", titulo: "JUBACI – Retiro – Chácara L.A. Prel. : Thamires Barros, Carlos Júnior e Pr. Gustavo Rodrigues. Cantora : Gleice e Banda.", publico: "JUBACI" },
  { mes: "Agosto", data: "29", titulo: "Projeto “Ana gerando Samuel” – às 16h.", publico: "Todos" },
  { mes: "Agosto", data: "30", titulo: "Departamento Kids - Culto Infantil.", publico: "Departamento Kids" },
  { mes: "Setembro", data: "01", titulo: "Mulheres de Fé - Projeto Mulheres de Palavra – 19:30h.", publico: "Mulheres" },
  { mes: "Setembro", data: "01", titulo: "JUBACI - Ensaio 20h.", publico: "JUBACI" },
  { mes: "Setembro", data: "06", titulo: "Igreja – Ceia do Senhor.", publico: "Todos" },
  { mes: "Setembro", data: "08", titulo: "JUBACI - Ensaio 20h.", publico: "JUBACI" },
  { mes: "Setembro", data: "12", titulo: "Mulheres de Fé - Intercâmbio – Igreja Batista Canaã.", publico: "Mulheres" },
  { mes: "Setembro", data: "13", titulo: "Departamento Kids - Cantata.", publico: "Departamento Kids" },
  { mes: "Setembro", data: "13", titulo: "Evangelismo e Missões - (2° Domingo dia de Missões Nacionais e Mundiais).", publico: "Evangelismo" },
  { mes: "Setembro", data: "15", titulo: "Homens e Mulheres – Culto Família com Propósito.", publico: "Todos" },
  { mes: "Setembro", data: "15", titulo: "JUBACI - Ensaio 20h.", publico: "JUBACI" },
  { mes: "Setembro", data: "20", titulo: "JUBACI - Conferência Propósito – Prel. Thiago Salles.", publico: "JUBACI" },
  { mes: "Setembro", data: "26", titulo: "Mulheres de Fé - Conferência Propósito Preletora – Mis. Niete (Presença da Igreja Batista Canaã).", publico: "Mulheres" },
  { mes: "Setembro", data: "27", titulo: "Homens em Ação - Conferência Propósito.", publico: "Homens" },
  { mes: "Setembro", data: "28", titulo: "Mulheres de Fé - Propósito no Monte.", publico: "Mulheres" },
  { mes: "Setembro", data: "29", titulo: "Homens e Mulheres - visitas.", publico: "Todos" },
  { mes: "Setembro", data: "30", titulo: "JUBACI – Atos 29 – Igreja 20h.", publico: "JUBACI" },
  { mes: "Outubro", data: "03", titulo: "Departamento Kids - Festa dos Talentos + Dia da Crianças.", publico: "Departamento Kids" },
  { mes: "Outubro", data: "04", titulo: "Igreja – Ceia do Senhor.", publico: "Todos" },
  { mes: "Outubro", data: "05", titulo: "Mulheres de fé - Propósito no Monte.", publico: "Mulheres" },
  { mes: "Outubro", data: "06", titulo: "Mulheres de fé Palavra.", publico: "Mulheres" },
  { mes: "Outubro", data: "10", titulo: "JUBACI – Fire – Igreja Sábado 19h.", publico: "JUBACI" },
  { mes: "Outubro", data: "11", titulo: "Evangelismo e Missões – Evangelismo. (Noite – Minuto Missionário).", publico: "Evangelismo" },
  { mes: "Outubro", data: "12", titulo: "Mulheres de Fé - Propósito no Monte. – Homens e Mulheres - Culto.", publico: "Todos" },
  { mes: "Outubro", data: "18", titulo: "Departamento Kids - Culto infantil.", publico: "Departamento Kids" },
  { mes: "Outubro", data: "19", titulo: "Mulheres de Fé - Propósito no Monte.", publico: "Mulheres" },
  { mes: "Outubro", data: "20", titulo: "Mulheres de Fé - Projeto Mulheres de Palavra – 19:30h.", publico: "Mulheres" }
];

const galerias = {
  jovens: [
    { titulo: "Culto de jovens", imagem: "imagens/jovens.svg" },
    { titulo: "Louvor jovem", imagem: "imagens/jovens.svg" },
    { titulo: "Comunhão", imagem: "imagens/jovens.svg" }
  ],
  homens: [
    { titulo: "Café dos homens", imagem: "imagens/homens.svg" },
    { titulo: "Estudo bíblico", imagem: "imagens/homens.svg" },
    { titulo: "Serviço e comunhão", imagem: "imagens/homens.svg" }
  ],
  mulheres: [
    { titulo: "Encontro de mulheres", imagem: "imagens/mulheres.svg" },
    { titulo: "Tarde de oração", imagem: "imagens/mulheres.svg" },
    { titulo: "Ministério de cuidado", imagem: "imagens/mulheres.svg" }
  ],
  criancas: [
    { titulo: "Escola bíblica infantil", imagem: "imagens/criancas.svg" },
    { titulo: "Dia das crianças", imagem: "imagens/criancas.svg" },
    { titulo: "Louvor infantil", imagem: "imagens/criancas.svg" }
  ],
  adolescentes: [
    { titulo: "Encontro teen", imagem: "imagens/adolescentes.svg" },
    { titulo: "Dinâmicas em grupo", imagem: "imagens/adolescentes.svg" },
    { titulo: "Noite de adoração", imagem: "imagens/adolescentes.svg" }
  ]
};


const menuBotao = document.querySelector(".menu-botao");
const menuLinks = document.querySelector(".menu-links");
const calendario = document.querySelector("#calendarioEventos");
const filtroMes = document.querySelector("#filtroMes");
const galeria = document.querySelector("#galeriaEventos");
const topicos = document.querySelectorAll(".topico");
const formOracao = document.querySelector("#formOracao");
const mensagemForm = document.querySelector("#mensagemForm");

menuBotao.addEventListener("click", () => {
  const aberto = menuLinks.classList.toggle("aberto");
  menuBotao.setAttribute("aria-expanded", String(aberto));
});

menuLinks.addEventListener("click", (evento) => {
  if (evento.target.tagName === "A") {
    menuLinks.classList.remove("aberto");
    menuBotao.setAttribute("aria-expanded", "false");
  }
});

function montarCalendario(mesSelecionado = "todos") {
  const eventosFiltrados = mesSelecionado === "todos"
    ? eventos
    : eventos.filter((evento) => evento.mes === mesSelecionado);

  if (eventosFiltrados.length === 0) {
    calendario.innerHTML = `
      <div class="calendario-cabecalho">
        <span>Mês</span>
        <span>Evento</span>
        <span>Público</span>
      </div>
      <div class="calendario-linha">
        <span>Nenhum evento encontrado para ${mesSelecionado}.</span>
      </div>
    `;
    return;
  }

  calendario.innerHTML = `
    <div class="calendario-cabecalho">
      <span>Mês</span>
      <span>Evento</span>
      <span>Público</span>
    </div>
    ${eventosFiltrados.map((evento) => `
      <div class="calendario-linha">
        <span>${evento.mes} - ${evento.data}</span>
        <span>${evento.titulo}</span>
        <span>${evento.publico}</span>
      </div>
    `).join("")}
  `;
}

function montarGaleria(topico) {
  galeria.innerHTML = galerias[topico].map((foto) => `
    <article class="foto-card">
      <img src="${foto.imagem}" alt="${foto.titulo}">
      <h3>${foto.titulo}</h3>
    </article>
  `).join("");
}
const numeroWhats = "5533999445802"; // Número no formato internacional sem '+' nem espaços

formOracao.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const dados = new FormData(formOracao);
  const nome = dados.get("nome").trim();
  const email = dados.get("email").trim();
  const telefone = dados.get("telefone").trim();
  const pedido = dados.get("pedido").trim();

  const mensagemWhats = `Pedido de oração\n\nNome: ${nome}\nE-mail: ${email || "Não informado"}\nTelefone: ${telefone || "Não informado"}\n\nPedido:\n${pedido}`;

  abrirWhatsApp(numeroWhats, mensagemWhats);
  mensagemForm.textContent = "WhatsApp foi aberto com a mensagem pronta.";
  formOracao.reset();
});

function abrirWhatsApp(numero, texto) {
  const mensagem = encodeURIComponent(texto);
  const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
  const appUrl = `whatsapp://send?phone=${numero}&text=${mensagem}`;
  const webUrl = isMobile
    ? `https://api.whatsapp.com/send?phone=${numero}&text=${mensagem}`
    : `https://web.whatsapp.com/send?phone=${numero}&text=${mensagem}`;

  if (isMobile) {
    const start = Date.now();
    window.location.href = appUrl;
    setTimeout(() => {
      if (Date.now() - start < 2000) {
        window.open(webUrl, "_blank");
      }
    }, 1500);
  } else {
    window.open(webUrl, "_blank");
  }
}

topicos.forEach((botao) => {
  botao.addEventListener("click", () => {
    topicos.forEach((item) => item.classList.remove("ativo"));
    botao.classList.add("ativo");
    montarGaleria(botao.dataset.topico);
  });
});

if (filtroMes) {
  filtroMes.addEventListener("change", () => montarCalendario(filtroMes.value));
}

montarCalendario();
montarGaleria("jovens");
