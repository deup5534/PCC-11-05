
const iniciar = () => {
    document.getElementById("botao").addEventListener("click", buscar);
};

const buscar = async (event) => {
    const espacoMensagem = document.getElementById("mensagem");
    const espacoFoto = document.getElementById("foto");
    const entradaTexto = document.getElementById("arroba");

    const endpoint = `https://api.github.com/users/${entradaTexto.value}`;
    const resposta = await fetch(endpoint);
    
    if (!resposta.ok) {
        espacoMensagem.innerHTML = "programador não encontrado";
        espacoFoto.src = "https://img1.picmix.com/output/stamp/normal/0/9/0/4/1604090_a14a5.gif";
    return;
    }

    const resultado = await resposta.json();
    espacoMensagem.innerHTML = resultado.bio || resultado.name;
    espacoFoto.src = resultado.avatar_url || "https://img1.picmix.com/output/stamp/normal/0/9/0/4/1604090_a14a5.gif";
};

document.addEventListener('DOMContentLoaded', iniciar);