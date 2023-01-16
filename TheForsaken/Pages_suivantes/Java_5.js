function verif() {
    if (document.getElementById("PhraseFin").value == "Lortus Meng Icha") {
        alert("Well done !");
        document.getElementById("suite").style.display = "block";
    } else {
        alert("Ce n'est pas ce qui est attendu");
    }
}