function VerifDest() {
    let dest = document.getElementById("destination").value;
    if (dest == "The Venetian Macao Casino") {
        alert("Bon voyage direction Macao, autrement appelé le \"Las Vegas Asiatique\" !");
        document.getElementById("suite").style.display = "block";
    } else {
        alert("Bah vous allez où comme ça ? Ce n'est pas vraiment le bon endroit...");
    }
}