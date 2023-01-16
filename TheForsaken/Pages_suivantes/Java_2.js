function verification() {
    let destination = document.getElementById("destination").value;

    if (destination === "Aradale Mental Hospital") {
        alert("Vous aviez les coordonnées, c'était pas très compliqué mais bravo quand même ;-)")
        document.getElementById("suite").style.display = "block";
    } else {
        alert(" \"Qui est donc le malotru qui ose venir me perturber dans mon humble demeure ? \" marmonne la gentille mamie qui habite là..." +
            " Cessez de l'embêter et retournez donc chercher avant de vous faire chasser à grands coups de pieds au cul.");
    }
}