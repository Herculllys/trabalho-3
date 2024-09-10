function changeState(id) {
    const div = document.getElementById(id);

    const currentState = div.querySelector('p').textContent.trim();

    let newState;
    switch (currentState) {
        case 'ocupado':
            newState = 'manutenção';
            div.classList.remove('ocupado');
            div.classList.add('manutencao');
            div.querySelector('p').textContent = 'manutenção';
            break;
        case 'manutenção':
            newState = 'vazio';
            div.classList.remove('manutencao');
            div.classList.add('vazio');
            div.querySelector('p').textContent = 'vazio';
            break;
        case 'vazio':
            newState = 'ocupado';
            div.classList.remove('vazio');
            div.classList.add('ocupado');
            div.querySelector('p').textContent = 'ocupado';
            break;
        default:
            newState = 'ocupado';
            div.classList.remove('manutencao', 'vazio');
            div.classList.add('ocupado');
            div.querySelector('p').textContent = 'ocupado';
            break;
    }
}
