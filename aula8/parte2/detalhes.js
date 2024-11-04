const params = new URLSearchParams(window.location.search);

const id = params.get("id");

const pega_json = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
};
const acha_cookie = (chave) => {
    const lista_de_cookies = document.cookie.split("; ");
    const procurado = lista_de_cookies.find(
        (e) => (e).startsWith(`${chave}=`));
    
    return procurado.split('=')[1];
}

const manipulaClick = (e) => {
    const id =e.currentTarget.dataset.id;
    const nome = e.currentTarget.dat.nome;

    //cookie
    document.cookie = `id=${id}`;
    document.cookie = `nome=${nome}`;
    
    //session
    sessionStorage.setItem('id', id);
    sessionStorage.setItem('atleta', JSON.stringify(e.currentTarget.dataset))

    //localstorage 
    localStorage.setItem('id', id);
    localStorage.setItem('atleta', JSON.stringify(e.currentTarget.dataset))

    window.location = `detalhes.html?id=${id}`
}

pega_json(`https://botafogo-atletas.mange.li/2024-1/${id}`).then(
    (obj) => {
        const nome = document.createElement("h1")
        nome.innerHTML = obj.nome;

        document.body.appendChild(nome);

        const imagem = document.createElement("img");
        imagem.src = obj.imagem;
        imagem.alt = `foto de ${obj.nome}`

        document.body.appendChild(imagem);

        const descri = document.createElement("p")
        descri.innerHTML = obj.detalhes;

        document.body.appendChild(descri);

    } 
);

console.log(acha_cookie("id"));

console.log(localStorage.getItem('id'));

console.log(localStorage.getItem('atleta'));