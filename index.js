function playGame() {
    var playerChoice = parseInt(document.getElementById('playerChoice').value);

    if (isNaN(playerChoice) || playerChoice < 0 || playerChoice > 10) {
        alert('Por favor, insira um número entre 0 e 10.');
        return;
    }

    var robotChoice = Math.floor(Math.random() * 11); // Número aleatório entre 0 e 10 para o robô

    var total = playerChoice + robotChoice;
    var isEven = total % 2 === 0;

    var resultMessage = `Você escolheu ${playerChoice}. O robô escolheu ${robotChoice}.<br>`;
    
    if (isEven) {
        resultMessage += `Total é ${total}. Par! Você ganhou.`;
    } else {
        resultMessage += `Total é ${total}. Ímpar! O robô ganhou.`;
    }

    document.getElementById('result').innerHTML = resultMessage;
}
