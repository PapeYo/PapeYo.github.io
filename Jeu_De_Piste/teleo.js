document.addEventListener('contextmenu', event => event.preventDefault());

mdpRangueil = "B5.A4B3/C1./E3.A1B4/D2B3.C2C4/D4./.A3/E2E3.E5/A1D1C2.B5"
mdpVille = "B2D2.A4B3/D2B3.C2C4/D4./C3.D5/D3E4.C5B2/B5D1.D4E4/C3C4.D2E3/E2E3.E5/.A3"

function checkTeam() {
    let mdp = document.getElementById("mdp").value;

    let mdp1 = (mdp.lower() === "frosties")
    let mdp2 = (mdp.lower() === "chocapic")

    if (mdp1) {
        document.getElementById("toDecode").innerHTML = mdpRangueil
    } else if (mdp2) {
        document.getElementById("toDecode").innerHTML = mdpVille
    }
}