const randomQuote = document.querySelector('.random-quote');
const diceIcon = document.querySelector('figure');
const quoteNumber = document.querySelector('.quote-number')

const handleDiceClick = () => {
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(data => {
            randomQuote.innerText = data.slip.advice;
            quoteNumber.innerText = `# ${data.slip.id}`;
        })
}

handleDiceClick();

diceIcon.addEventListener("click", handleDiceClick)

