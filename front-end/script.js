// Botão "Saber mais"
document.getElementById("btnSaberMais").addEventListener("click", function() {
    const texto = document.getElementById("textoExtra");
    texto.classList.toggle("escondido");
});

// Botão "Expandir Tela"
document.getElementById("btnTela").addEventListener("click", function() {
    alert("Tela expandida! (simulação)");
});

// Botão "Modo Escuro"
document.getElementById("btnDark").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});
