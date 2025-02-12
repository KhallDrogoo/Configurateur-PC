function updateConfiguration() {
    // Récupérer les valeurs sélectionnées
    const cpu = document.getElementById("cpu").value.split("|");
    const gpu = document.getElementById("gpu").value.split("|");
    const ram = document.getElementById("ram").value.split("|");

    // Calculer les performances et le prix total
    const performance = parseInt(cpu[0]) + parseInt(gpu[0]) + parseInt(ram[0]);
    const price = parseInt(cpu[1]) + parseInt(gpu[1]) + parseInt(ram[1]);

    // Déterminer l'usage recommandé
    let usage = "bureautique";
    if (performance > 150) usage = "gaming avancé";
    else if (performance > 100) usage = "gaming standard";
    else if (performance > 70) usage = "multimédia et gaming léger";

    // Mettre à jour l'affichage
    document.getElementById("performance-output").innerHTML = `
        Performances estimées :
        <strong>${performance} points</strong>.
        Idéal pour ${usage}.
        Prix total :
        <strong>€${price}</strong>.
    `;
}

function placeOrder() {
    alert("Votre commande a été passée avec succès !");
}
