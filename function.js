function ola(hello) {
  alert(`Hello, eu sou a rocha de estimação.`);
}

function touchRock() {
  var userName = prompt("Qual o seu nome?", "Enter your name here");
    if(userName) {
        alert("Prazem em conhecer você " + userName + ".")
        document.getElementById("rockImg").src = "rock_happy.png";
    }
}
