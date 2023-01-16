function Valider() {
    let code = document.getElementById("code").value;
    if (code == "vous gardez calme ou vous deviene fous" || code == "Vous gardez calme ou vous deviene fous") {
        alert("Le décodage n'a aucun secret pour vous. Mais quel est donc ce bruit qui se fait entendre ?");
        document.getElementById("suite").style.display = "block";
    } else {
        alert("Aïe aïe aïe, ce n'est pas ça. Rattrapez-vous vite avant que quelqu'un ne vous demande de déguerpir...");
    }
}

function VerifKanji() {
    let kanji = document.getElementById("kanji").value;
    let sol_kanji = ["ténèbres", "tenebres", "obscurité", "obscurite"];
    if (sol_kanji.includes(kanji)) {
        alert("Effectivement, ce kanji évoque la notion d'obscurité et de ténèbres. Maintenant, faîtes le bon choix ...");
        document.getElementById("hide").style.display = "block";
        document.getElementById("fleche").style.display = "inline";
    } else {
        alert("Ah non, ça ne veut pas dire ça, continuez vos recherches ...");
    }
}

function vraie() {
    alert("Vous avez choisi le bon objet, mais que va-t-il se passer avec maintenant ? Découvrez-le en bas de la page ...");
    document.getElementById("hide2").style.display = "block";
}

function faux() {
    alert("Mauvais objet, faîtes vite un autre choix avant d'échouer définitivement !");
}