function goodAnswer() {
    let erreur1 = document.getElementById("erreur1").value;
    let erreur2 = document.getElementById("erreur2").value;
    let erreur3 = document.getElementById("erreur3").value;

    let answer1 = (erreur1 === "poteau");
    let answer2 = (erreur2 === "rien");
    let answer3 = (erreur3 === "bulle" || erreur3 === "boule" || erreur3 === "cercle");

    if (answer1 && answer2 && answer3) {
        alert("Vous avez vu juste pour les trois réponses, GG ! Regardez tout en bas pour continuer");
        document.getElementById("suite").style.display = "block";
    } else {
        alert("Au moins une des réponses est fausse, mais c'est peut-être deux, voire les trois ...");
    }
}

function help1() {
    alert("Vous êtes un bon et valeureux citoyen australien et votre comparse vous a envoyé des photos" +
        " prises dans la capitale australienne, capitale qui se trouve être ...");
}

function help2() {
    alert("Les 3 bâtiments présents sur les photos sont \"The Old Parliament House\", \"The National Library" +
        " of Australia\" et \"The National Gallery of Australia\"");
}

function help3() {
    alert("Il faut faire attention à la symétrie sachant que l'élément à trouver n'est pas sur le bâtiment pour" +
        " une erreur tandis qu'il faut se concentrer sur le ciel excessivement bleu pour l'autre erreur...");
}