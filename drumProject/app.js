// Seleção DOM
const buttonDrum = document.querySelectorAll('.drum')

// Adicionar eventos em todos os Buttons
for (let i = 0; i < buttonDrum.length; i++) {
    buttonDrum[i].addEventListener('click', () => {
        alert('Clicou')
    })
}