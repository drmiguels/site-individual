
let notes = document.querySelectorAll('.note');
let noteSpeed = 5; // Controle da velocidade das notas

function moveNotes() {
    notes.forEach(note => {
        let currentTop = parseInt(window.getComputedStyle(note).top);
        if (currentTop >= 500) {
            note.style.top = '-120px'; // Resetando a posição
        } else {
            note.style.top = (currentTop + noteSpeed) + 'px';
        }
    });
}

setInterval(moveNotes, 20); // Mover as notas a cada 20ms

// Detecção das teclas pressionadas (simulando notas)
document.addEventListener('keydown', (event) => {
    if (event.key === 'a') {
        console.log('Nota A tocada!');
    }
    if (event.key === 's') {
        console.log('Nota S tocada!');
    }
    // Adicionar mais teclas conforme necessário
});

