
function displayPlayers() {
    document.getElementById("get-players").style.display = "none";

    generatePlayerArray();

    playerArray.forEach(playerInArray => {
        document.getElementById("player-display-list").innerHTML += "<li>" + playerInArray.name + "</li>";
    });

    // let player = document.getElementById("playerName")["value"];
}
