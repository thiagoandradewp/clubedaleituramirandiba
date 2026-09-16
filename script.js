// Dados dos 12 Livros com indicação de tema de cor para a capa em CSS
const livros = [
    {
        mes: "Janeiro",
        titulo: "O Pequeno Príncipe",
        autor: "Antoine de Saint-Exupéry",
        descricao: "Uma fábula poética sobre amizade, amor, perda e a busca pelo essencial na vida que a maioria dos adultos esquece.",
        tema: "cover-theme-1",
        destaque: false
    },
    {
        mes: "Fevereiro",
        titulo: "Meu Pé de Laranja Lima",
        autor: "José Mauro de Vasconcelos",
        descricao: "A tocante história do menino Zezé, que usa sua imaginação vibrante para escapar de uma infância marcada pela pobreza.",
        tema: "cover-theme-2",
        destaque: false
    },
    {
        mes: "Março",
        titulo: "Capitães da Areia",
        autor: "Jorge Amado",
        descricao: "Um retrato cru e apaixonante sobre um grupo de garotos abandonados nas ruas de Salvador e suas lutas pela sobrevivência.",
        tema: "cover-theme-3",
        destaque: false
    },
    {
        mes: "Abril",
        titulo: "A Hora da Estrela",
        autor: "Clarice Lispector",
        descricao: "A marcante trajetória de Macabéa, uma datilógrafa alagoana perdida na imensidão do Rio de Janeiro em busca de si mesma.",
        tema: "cover-theme-4",
        destaque: false
    },
    {
        mes: "Maio",
        titulo: "O Cortiço",
        autor: "Aluísio Azevedo",
        descricao: "Um clássico naturalista vibrante que analisa as transformações humanas sob influência da ambição e do meio social.",
        tema: "cover-theme-5",
        destaque: false
    },
    {
        mes: "Junho",
        titulo: "Vidas Secas",
        autor: "Graciliano Ramos",
        descricao: "A travessia dura e poética de Fabiano, Sinhá Vitória e seus filhos lutando contra a seca no sertão nordestino.",
        tema: "cover-theme-6",
        destaque: false
    },
    {
        mes: "Julho",
        titulo: "Olhai os Lírios do Campo",
        autor: "Érico Veríssimo",
        descricao: "Uma profunda reflexão sobre ambição, valores humanos e o que realmente importa antes que seja tarde demais.",
        tema: "cover-theme-1",
        destaque: false
    },
    {
        mes: "Agosto",
        titulo: "Dom Casmurro",
        autor: "Machado de Assis",
        descricao: "O mais famoso enigma da nossa literatura: ciúme, desconfiança e a atemporal narrativa de Bentinho sobre Capitu.",
        tema: "cover-theme-2",
        destaque: false
    },
    {
        mes: "Setembro",
        titulo: "O Quinze",
        autor: "Rachel de Queiroz",
        descricao: "A impactante seca de 1915 no Ceará retratada pela força jovem de Rachel de Queiroz em sua estreia literária.",
        tema: "cover-theme-3",
        destaque: true // Selecionado como destaque do mês atual!
    },
    {
        mes: "Outubro",
        titulo: "Fahrenheit 451",
        autor: "Ray Bradbury",
        descricao: "Uma distopia assustadoramente atual sobre um futuro onde livros são banidos e a informação é sufocada.",
        tema: "cover-theme-4",
        destaque: false
    },
    {
        mes: "Novembro",
        titulo: "Quarto de Despejo",
        autor: "Carolina Maria de Jesus",
        descricao: "O diário real e visceral de uma mulher negra e favelada que encontrou na escrita sua voz e sua força.",
        tema: "cover-theme-5",
        destaque: false
    },
    {
        mes: "Dezembro",
        titulo: "O Alquimista",
        autor: "Paulo Coelho",
        descricao: "Uma inspiradora fábula sobre seguir seus sonhos, reconhecer sinais e escutar a sabedoria do próprio coração.",
        tema: "cover-theme-6",
        destaque: false
    }
];

// Inicialização da Página
document.addEventListener("DOMContentLoaded", () => {
    renderizarDestaque();
    renderizarCronograma();
});

// Renderiza o card do livro em destaque
function renderizarDestaque() {
    const container = document.getElementById("livro-destaque");
    const livroDestaque = livros.find(l => l.destaque) || livros[0];

    container.innerHTML = `
        <div class="destaque-capa">
            <span class="capa-mes">${livroDestaque.mes}</span>
            <div class="capa-titulo">${livroDestaque.titulo}</div>
        </div>
        <div class="destaque-info">
            <span class="status-badge"><i class="fa-solid fa-fire"></i> Leitura Atual do Clube</span>
            <h3>${livroDestaque.titulo}</h3>
            <p class="autor">Por ${livroDestaque.autor}</p>
            <p class="sinopse">${livroDestaque.descricao}</p>
            <a href="https://chat.whatsapp.com/SEU_LINK_DO_GRUPO" target="_blank" class="btn-whatsapp">
                <i class="fa-brands fa-whatsapp"></i> Debater Este Livro No Grupo
            </a>
        </div>
    `;
}

// Renderiza a grade com todos os 12 livros
function renderizarCronograma() {
    const container = document.getElementById("livros-container");

    livros.forEach(livro => {
        const card = document.createElement("div");
        card.classList.add("card-livro");

        card.innerHTML = `
            <div class="book-cover ${livro.tema}">
                <span class="month-tag">${livro.mes}</span>
                <div class="cover-title">${livro.titulo}</div>
            </div>
            <div class="card-body">
                <p class="autor"><i class="fa-solid fa-pen-nib"></i> ${livro.autor}</p>
                <p class="descricao">${livro.descricao}</p>
            </div>
        `;

        container.appendChild(card);
    });
}
