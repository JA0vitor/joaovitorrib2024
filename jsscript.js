const headerText = document.querySelector('.headerescrita');
const icons = document.querySelector('.icons');

// Função para criar a transição de slide down
function slideDown(element) {
    element.style.display = 'flex';
    element.style.height = '0'; // Começa com altura 0
    element.style.overflow = 'hidden'; // Previne o conteúdo de transbordar
    let height = element.scrollHeight + 'px'; // Obtém a altura total do elemento
    element.style.transition = 'height 0.5s ease-in-out';
    setTimeout(() => {
        element.style.height = height; // Ajusta a altura para a altura total
    }, 10); // Pequeno atraso para garantir a transição
}

// Função para criar a transição de slide up
function slideUp(element) {
    element.style.height = element.scrollHeight + 'px'; // Define a altura atual
    setTimeout(() => {
        element.style.transition = 'height 0.5s ease-in-out';
        element.style.height = '0';
    }, 10);
    
    setTimeout(() => {
        element.style.display = 'none'; // Esconde o elemento após a transição
    }, 500); // Tempo igual ao da duração da transição
}

// Adiciona o evento de clique no ícone
icons.addEventListener('click', () => {
    if (headerText.style.display === 'none' || headerText.style.display === '') {
        slideDown(headerText); // Mostra o menu com transição de slide down
    } else {
        slideUp(headerText); // Esconde o menu com transição de slide up
    }
});
