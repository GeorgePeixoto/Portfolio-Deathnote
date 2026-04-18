// 1. "Contratando" o botão pelo ID que você criou
const botaoShinigami = document.querySelector('#shinigami-eyes-btn');

// 2. Criando a função que faz a mágica
function ativarOlhos() {
    // Flicker antes de ativar (como o mundo do Shinigami se revelando)
    document.body.classList.add('flickering');

    setTimeout(() => {
        document.body.classList.remove('flickering');
        // O 'toggle' funciona como um interruptor: se não tem a classe, ele coloca. Se tem, ele tira.
        document.body.classList.toggle('shinigami-mode');

        // Um pequeno feedback no console para você ver funcionando
        console.log("Contrato realizado!");
    }, 600);
}

// 3. O 'Ouvinte': Quando o botão sentir um 'click', ele chama a função
botaoShinigami.addEventListener('click', ativarOlhos);

// 4. Scroll reveal - elementos aparecem como nomes escritos no caderno
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            // Se for o contact-card, revela os itens da lista em sequência
            if (entry.target.classList.contains('contact-card')) {
                const items = entry.target.querySelectorAll('.contact-list li');
                items.forEach(item => item.classList.add('visible'));
            }
        }
    });
}, {
    threshold: 0.2
});

// Observa todos os elementos com classe reveal ou reveal-card
document.querySelectorAll('.reveal, .reveal-card').forEach(el => {
    observer.observe(el);
});
