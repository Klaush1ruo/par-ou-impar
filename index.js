function playGame() {
    var player1Choice = parseInt(document.getElementById('player1Choice').value);

    if (isNaN(player1Choice) || player1Choice < 0 || player1Choice > 10) {
        alert('Por favor, jogador 1, insira um número entre 0 e 10.');
        return;
    }

    var robotChoice = Math.floor(Math.random() * 11); // Número aleatório entre 0 e 10 para o robô

    var total = player1Choice + robotChoice;
    var isEven = total % 2 === 0;

    var resultMessage = `<imsrc="avatar1.png" > Jogador 1 escolheu ${player1Choice}.<br>`;
    resultMessage += `<imsrc="avatar2.png" > Jogador 2 (robô) escolheu ${robotChoice}.<br>`;
    
    if (isEven) {
        resultMessage += `Total é ${total}. Par! Jogador 1 ganhou.`;
    } else {
        resultMessage += `Total é ${total}. Ímpar! Jogador 2 (robô) ganhou.`;
    }

    document.getElementById('result').innerHTML = resultMessage;
}
