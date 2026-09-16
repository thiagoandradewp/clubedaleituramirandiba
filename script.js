// Lista dos 12 livros sugeridos para o ano letivo
const livros = [
    {
        mes: "Janeiro",
        titulo: "O Pequeno Príncipe",
        autor: "Antoine de Saint-Exupéry",
        descricao: "Uma história poética e filosófica sobre a amizade, o amor e a essência da vida."
    },
    {
        mes: "Fevereiro",
        titulo: "Meu Pé de Laranja Lima",
        autor: "José Mauro de Vasconcelos",
        descricao: "A emocionante história do menino Zezé e sua imaginação no interior do Brasil."
    },
    {
        mes: "Março",
        titulo: "Capitães da Areia",
        autor: "Jorge Amado",
        descricao: "A vida de um grupo de crianças abandonadas nas ruas de Salvador."
    },
    {
        mes: "Abril",
        titulo: "A Hora da Estrela",
        autor: "Clarice Lispector",
        descricao: "A trajetória marcante da nordestina Macabéa em busca de sua identidade na grande cidade."
    },
    {
        mes: "Maio",
        titulo: "O Cortiço",
        autor: "Aluísio Azevedo",
        descricao: "Um clássico do Naturalismo brasileiro que retrata a vida num cortiço do Rio de Janeiro."
    },
    {
        mes: "Junho",
        titulo: "Vidas Secas",
        autor: "Graciliano Ramos",
        descricao: "A luta diária de uma família retirante enfrentando a seca no sertão nordestino."
    },
    {
        mes: "Julho",
        titulo: "Olhai os Lírios do Campo",
        autor: "Érico Veríssimo",
        descricao: "Uma reflexão profunda sobre os valores humanos, ambição e o verdadeiro sentido da vida."
    },
    {
        mes: "Agosto",
        titulo: "Dom Casmurro",
        autor: "Machado de Assis",
        descricao: "O célebre mistério da literatura brasileira sobre ciúme, dúvida e o amor de Bentinho e Capitu."
    },
    {
        mes: "Setembro",
        titulo: "O Quinze",
        autor: "Rachel de Queiroz",
        descricao: "Obra marcante sobre a devastadora seca de 1915 no Ceará e seu impacto social."
    },
    {
        mes: "Outubro",
        titulo: "Fahrenheit 451",
        autor: "Ray Bradbury",
        descricao: "Uma distopia clássica sobre um futuro onde os livros são proibidos e queimados."
    },
    {
        mes: "Novembro",
        titulo: "Quarto de Despejo",
        autor: "Carolina Maria de Jesus",
        descricao: "O diário real e impactante de uma mulher favelada na São Paulo dos anos 1950."
    },
    {
        mes: "Dezembro",
        titulo: "O Alquimista",
        autor: "Paulo Coelho",
        descricao: "Uma jornada inspiradora sobre seguir seus sonhos e escutar o próprio coração."
    }
];

// Função para renderizar os cards de livros na tela
function carregarLivros() {
    const container = document.getElementById("livros-container");

    livros.forEach(livro => {
        const card = document.createElement("div");
        card.classList.add("card-livro");

        card.innerHTML = `
            <div class="badge-mes">${livro.mes}</div>
            <div class="card-conteudo">
                <h4>${livro.titulo}</h4>
                <p class="autor">Por: ${livro.autor}</p>
                <p class="descricao">${livro.descricao}</p>
            </div>
        `;

        container.appendChild(card);
    });
}

// Executa a função quando o documento estiver totalmente carregado
document.addEventListener("DOMContentLoaded", carregarLivros);
