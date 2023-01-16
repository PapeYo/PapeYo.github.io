function verif() {
    if (document.getElementById("livre").value == "Codex Gigas") {
        alert("Good Answer !");
        document.getElementById("suite").style.display = "block";
    } else {
        alert("Mauvais livre !");
    }
}