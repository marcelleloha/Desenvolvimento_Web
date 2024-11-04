const container = document.getElementById("container");

const pega_json = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
};

const montaCard = (atleta) => {
    const cartao = document.createElement("article");
    const nome = document.createElement("h1");
    const imagem = document.createElement("img");
    const descri = document.createElement("p");
    // const link = document.createElement("a");

    nome.innerHTML = atleta.nome;
    cartao.appendChild(nome);

    imagem.src = atleta.imagem;
    cartao.appendChild(imagem);

    descri.innerHTML = atleta.detalhes;
    cartao.appendChild(descri);

    /*link.innerHTML = "Saiba mais...";
    link.href = `detalhes.html?id=${atleta.id}`;
    cartao.appendChild(link);*/

    /*span_id.innerText = atleta.id;
    cartao.appendChild(span_id);*/

    cartao.dataset.id = atleta.id;
    cartao.dataset.nome = atleta.nome;
    cartao.dataset.nascimento = atleta.nascimento;

    cartao.onclick = manipulaClick;

    container.appendChild(cartao);
};

pega_json("https://botafogo-atletas.mange.li/2024-1/all").then(
    (variavel) => {
        variavel.forEach((atleta) => montaCard(atleta));
    } 
);


