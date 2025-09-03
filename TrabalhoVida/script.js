// Classe que representa um evento da linha do tempo
class Evento {
  constructor(ano, titulo, descricao, imagem = null) {
    // adicionamos o atributo imagem
    this.ano = ano;
    this.titulo = titulo;
    this.descricao = descricao;
    this.imagem = imagem;
  }

  // Método que retorna o HTML do evento
  gerarHTML(posicao) {
    return `
      <div class="timeline-item ${posicao}">
          <h3>${this.ano} - ${this.titulo}</h3>
          ${
            this.imagem
              ? `<img src="${this.imagem}" alt="${this.titulo}" class="timeline-img">`
              : ""
          }
          <p>${this.descricao}</p>
      </div>
    `;
  }
}

// Classe que gerencia a linha do tempo
class LinhaDoTempo {
  constructor(elementoId) {
    this.elemento = document.getElementById(elementoId);
    this.eventos = [];
  }

  adicionarEvento(evento) {
    this.eventos.push(evento);
  }

  renderizar() {
    this.elemento.innerHTML = this.eventos
      .map((evento, index) =>
        evento.gerarHTML(index % 2 === 0 ? "left" : "right")
      )
      .join("");
  }
}

// Criando a linha do tempo
const linha = new LinhaDoTempo("timeline");

// Adicionando eventos com e sem imagens
linha.adicionarEvento(
  new Evento(1997, " ", "Meus pais se conheceram em 1997.", null)
);
linha.adicionarEvento(
  new Evento(
    "Mãe",
    "Suelen",
    "Professora, mãe de quatro filhos, adora sair, gosta de costurar e, principalmente, está sempre em busca de seus objetivos, por mais difícil que seja o percurso.",
    "mae.jpg"
  )
);
linha.adicionarEvento(
  new Evento(
    "Pai",
    "Milton",
    "Técnico agrícola, trabalha desde pequeno nas lavouras e hoje tem mais de 44 anos de empresa. Homem amigo, companheiro e bondoso, que sempre se preocupa com o bem-estar dos outros. Sempre lutou por tudo o que sonhava conquistar e, hoje, vive uma vida tranquila, desfrutando de tudo o que construiu.",
    "paimilton.jpg"
  )
);
linha.adicionarEvento(
  new Evento(
    "1 a 2 anos",
    "Imagem Primaria",
    "Minha memória mais antiga é do apartamento do meu pai: uma visão da sala de onde eu conseguia ver a cozinha, o corredor e o lugar onde ele guardava as bebidas. Era de dia, e lembro-me do sol entrando através da cortina.",
    "miltinho.jpg"
  )
);
linha.adicionarEvento(
  new Evento(
    "Acontecimentos até os 5 anos de idade",
    " ",
    "Meus pais se separaram quando eu tinha dois anos. Depois, mudei-me para Uruguaiana, onde minha mãe conheceu meu padrasto, com quem está até hoje. Em 2010, tive meu primeiro irmão por parte de mãe e, nessa época, comecei a jogar bola na rua com meus amigos.",
    "paiflavio.jpg"
  )
);
linha.adicionarEvento(
  new Evento(
    "Acontecimentos até os 10 anos de idade",
    " ",
    "Troquei de escola, onde conheci a maioria dos amigos que tenho hoje em Uruguaiana. Também me mudei de casa e dei meu primeiro beijo. Aos 9 anos, minha mãe engravidou e teve uma gestação tranquila, mas no dia do parto houve complicações, e meu irmão Enzo viveu apenas dois dias. Quando eu tinha 10 anos, meu irmão por parte de pai, Renan — meu irmão mais velho — faleceu em um acidente de avião.",
    null
  )
);
linha.adicionarEvento(
  new Evento(
    "Acontecimentos até os 15 anos de idade",
    " ",
    "Minha mãe engravidou e nasceu meu terceiro irmão por parte de mãe. Fui suspenso do colégio pela primeira vez, jogava no time da escola e comecei a sair em festas. Em 2020, com 15 anos, entrei no ensino médio, e duas semanas depois começou a pandemia.",
    null
  )
);
linha.adicionarEvento(
  new Evento(
    "Acontecimentos até os 18 anos de idade",
    " ",
    "Com 16 anos, fiz minha primeira tatuagem e comecei a namorar. Com 17, viajei para Floripa e Bahia com a Amaze. No final do terceiro ano, terminei o namoro e me mudei.",
    null
  )
);
linha.adicionarEvento(
  new Evento(
    "Acontecimentos até os 20 anos de idade",
    " ",
    "Mudei-me para a AMF e comecei a cursar o curso de Sistemas de Informação. Na primeira semana, já estava trabalhando na Imago. Com um ano no Recanto, consegui meu apartamento próprio e comecei a trabalhar no setor comercial da AMF, o que me abriu portas para muitas oportunidades, como o Prêmio FOIL, onde ganhei a categoria de colaborador e tive a oportunidade de fazer minha primeira viagem internacional para Itália e França.",
    null
  )
);
linha.adicionarEvento(
  new Evento(
    "Hoje em dia...",
    " ",
    "Tenho 20 anos, estou no 6º semestre, trabalho na Moinho Sul como suporte de TI e atuo em projetos externos. Além disso, participo do diretório da atlética como presidente.",
    "miltao.jpg"
  )
);

linha.renderizar();
