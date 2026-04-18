// 1. "Contratando" o botão pelo ID que você criou
const botaoShinigami = document.querySelector('#shinigami-eyes-btn');

// 2. Criando a função que faz a mágica
function ativarOlhos() {
    // O 'toggle' funciona como um interruptor: se não tem a classe, ele coloca. Se tem, ele tira.
    document.body.classList.toggle('shinigami-mode');
    
    // Um pequeno feedback no console para você ver funcionando
    console.log("Contrato realizado!");
}

// 3. O 'Ouvinte': Quando o botão sentir um 'click', ele chama a função
botaoShinigami.addEventListener('click', ativarOlhos);