
const card = document.querySelectorAll('.memory-card')

let hasFlippedCard = false
let firstCard, secondCard

function flipCard() {
    this.classList.add('flip')
    if (!hasFlippedCard) {
        hasFlippedCard = true
        firstCard = this
    } else {
        hasFlippedCard = false
        secondCard = this
        checkForMatch()
    }
}

function checkForMatch() {

    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        firstCard.removeEventListener('click', flipCard)
        secondCard.removeEventListener('click', flipCard)
    } else {
        setTimeout(() => {
            firstCard.classList.remove('flip')
            secondCard.classList.remove('flip')
        }, 500)
    }
}
card.forEach(card => card.addEventListener('click', flipCard))