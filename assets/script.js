document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("heroForm");
    const nome = document.getElementById("nome");
    const xp = document.getElementById("xp");
    const result = document.getElementById("result");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // impede o recarregamento da página

        const nomeValor = nome.value.trim();
        const xpValor = Number(xp.value);

        let nivel = "";

        if (xpValor < 1000) {
            nivel = "Ferro";
        } else if (xpValor >= 1001 && xpValor <= 2000) {
            nivel = "Bronze";
        } else if (xpValor >= 2001 && xpValor <= 5000) {
            nivel = "Prata";
        } else if (xpValor >= 5001 && xpValor <= 7000) {
            nivel = "Ouro";
        } else if (xpValor >= 7001 && xpValor <= 8000) {
            nivel = "Platina";
        } else if (xpValor >= 8001 && xpValor <= 9000) {
            nivel = "Ascendente";
        } else if (xpValor >= 9001 && xpValor <= 10000) {
            nivel = "Imortal";
        } else {
            nivel = "Radiante";
        }

        result.textContent = `O Herói de nome ${nomeValor} está no nível de ${nivel}`;
    });
});