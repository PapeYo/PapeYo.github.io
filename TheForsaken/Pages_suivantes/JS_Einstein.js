function verifVet() {
    let bool1, bool2, bool3, bool4, bool5;
    let vetement1 = document.getElementById("choix_vetement1").value;
    if (vetement1 == "Santiags") {
        bool1 = "true";
        document.getElementById("choix_vetement1").style.backgroundColor = "green";
    }
    let vetement2 = document.getElementById("choix_vetement2").value;
    if (vetement2 == "Cape") {
        bool2 = "true";
        document.getElementById("choix_vetement2").style.backgroundColor = "green";
    }
    let vetement3 = document.getElementById("choix_vetement3").value;
    if (vetement3 == "Bonnet bleu") {
        bool3 = "true";
        document.getElementById("choix_vetement3").style.backgroundColor = "green";
    }
    let vetement4 = document.getElementById("choix_vetement4").value;
    if (vetement4 == "Manteau") {
        bool4 = "true";
        document.getElementById("choix_vetement4").style.backgroundColor = "green";
    }
    let vetement5 = document.getElementById("choix_vetement5").value;
    if (vetement5 == "T-shirt") {
        bool5 = "true";
        document.getElementById("choix_vetement5").style.backgroundColor = "green";
    }
    if (bool1 && bool2 && bool3 && bool4 && bool5) {
        return true;
    } else {
        return false;
    }
}

function verifElem() {
    let bool1, bool2, bool3, bool4, bool5;
    let element1 = document.getElementById("choix_element1").value;
    if (element1 == "Terre") {
        bool1 = "true";
        document.getElementById("choix_element1").style.backgroundColor = "green";
    }
    let element2 = document.getElementById("choix_element2").value;
    if (element2 == "Air") {
        bool2 = "true";
        document.getElementById("choix_element2").style.backgroundColor = "green";
    }
    let element3 = document.getElementById("choix_element3").value;
    if (element3 == "Eau") {
        bool3 = "true";
        document.getElementById("choix_element3").style.backgroundColor = "green";
    }
    let element4 = document.getElementById("choix_element4").value;
    if (element4 == "Feu") {
        bool4 = "true";
        document.getElementById("choix_element4").style.backgroundColor = "green";
    }
    let element5 = document.getElementById("choix_element5").value;
    if (element5 == "Electricité") {
        bool5 = "true";
        document.getElementById("choix_element5").style.backgroundColor = "green";
    }
    if (bool1 && bool2 && bool3 && bool4 && bool5) {
        return true;
    } else {
        return false;
    }
}

function verifSigne() {
    let bool1, bool2, bool3, bool4, bool5;
    let signe1 = document.getElementById("choix_signe1").value;
    if (signe1 == "Très grand") {
        bool1 = "true";
        document.getElementById("choix_signe1").style.backgroundColor = "green";
    }
    let signe2 = document.getElementById("choix_signe2").value;
    if (signe2 == "Doigt manquant") {
        bool2 = "true";
        document.getElementById("choix_signe2").style.backgroundColor = "green";
    }
    let signe3 = document.getElementById("choix_signe3").value;
    if (signe3 == "Gros nez") {
        bool3 = "true";
        document.getElementById("choix_signe3").style.backgroundColor = "green";
    }
    let signe4 = document.getElementById("choix_signe4").value;
    if (signe4 == "Chevalière en or") {
        bool4 = "true";
        document.getElementById("choix_signe4").style.backgroundColor = "green";
    }
    let signe5 = document.getElementById("choix_signe5").value;
    if (signe5 == "Barbe blanche") {
        bool5 = "true";
        document.getElementById("choix_signe5").style.backgroundColor = "green";
    }
    if (bool1 && bool2 && bool3 && bool4 && bool5) {
        return true;
    } else {
        return false;
    }
}

function verifLivre() {
    let bool1, bool2, bool3, bool4, bool5;
    let livre1 = document.getElementById("choix_livre1").value;
    if (livre1 == "Argenteus") {
        bool1 = "true";
        document.getElementById("choix_livre1").style.backgroundColor = "green";
    }
    let livre2 = document.getElementById("choix_livre2").value;
    if (livre2 == "Atlanticus") {
        bool2 = "true";
        document.getElementById("choix_livre2").style.backgroundColor = "green";
    }
    let livre3 = document.getElementById("choix_livre3").value;
    if (livre3 == "Sinaiticus") {
        bool3 = "true";
        document.getElementById("choix_livre3").style.backgroundColor = "green";
    }
    let livre4 = document.getElementById("choix_livre4").value;
    if (livre4 == "Gigas") {
        bool4 = "true";
        document.getElementById("choix_livre4").style.backgroundColor = "green";
    }
    let livre5 = document.getElementById("choix_livre5").value;
    if (livre5 == "Aureus") {
        bool5 = "true";
        document.getElementById("choix_livre5").style.backgroundColor = "green";
    }
    if (bool1 && bool2 && bool3 && bool4 && bool5) {
        return true;
    } else {
        return false;
    }
}

function verifMage() {
    let bool1, bool2, bool3, bool4, bool5;
    let mage1 = document.getElementById("choix_mage1").value;
    if (mage1 == "Koleas") {
        bool1 = "true";
        document.getElementById("choix_mage1").style.backgroundColor = "green";
    }
    let mage2 = document.getElementById("choix_mage2").value;
    if (mage2 == "Aethal") {
        bool2 = "true";
        document.getElementById("choix_mage2").style.backgroundColor = "green";
    }
    let mage3 = document.getElementById("choix_mage3").value;
    if (mage3 == "Esorin") {
        bool3 = "true";
        document.getElementById("choix_mage3").style.backgroundColor = "green";
    }
    let mage4 = document.getElementById("choix_mage4").value;
    if (mage4 == "Cacius") {
        bool4 = "true";
        document.getElementById("choix_mage4").style.backgroundColor = "green";
    }
    let mage5 = document.getElementById("choix_mage5").value;
    if (mage5 == "Taphior") {
        bool5 = "true";
        document.getElementById("choix_mage5").style.backgroundColor = "green";
    }
    if (bool1 && bool2 && bool3 && bool4 && bool5) {
        return true;
    } else {
        return false;
    }
}

function verif() {
    verifVet();
    verifElem();
    verifSigne();
    verifLivre();
    verifMage();
    if (verifVet() && verifElem() && verifSigne() && verifLivre() && verifMage()) {
        document.getElementById("suite").style.display = "block";
    }
}

function barrer() {
    for (i=1; i<16; i++) {
        if (document.getElementById(`check${i}`).checked) {
            document.getElementById(`ind${i}`).style = "display:inline;text-decoration:line-through";
        } else {
            document.getElementById(`ind${i}`).style = "display:inline";
        }
    }
}