const eventos = [
  { mes: "Janeiro", data: "13/01", titulo: "Consagração de início de ano", publico: "Toda a igreja" },
  { mes: "Março", data: "09/03", titulo: "Encontro de mulheres", publico: "Mulheres" },
  { mes: "Maio", data: "18/05", titulo: "Congresso de jovens", publico: "Jovens e adolescentes" },
  { mes: "Julho", data: "20/07", titulo: "Escola bíblica de férias", publico: "Crianças" },
  { mes: "Setembro", data: "14/09", titulo: "Café dos homens", publico: "Homens" },
  { mes: "Novembro", data: "23/11", titulo: "Celebração da família", publico: "Toda a igreja" }
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

function montarCalendario() {
  calendario.innerHTML = `
    <div class="calendario-cabecalho">
      <span>Mês</span>
      <span>Evento</span>
      <span>Público</span>
    </div>
    ${eventos.map((evento) => `
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



montarCalendario();
montarGaleria("jovens");
