function togglePesquisa() {
    document.querySelector(".lupa").classList.toggle("active");
}

function verificarAdmin() {
    let senha = prompt("Digite a senha do administrador:");
    if (senha === "123") { 
        document.getElementById("status-opcoes").style.display = "block";
    } else {
        alert("Acesso negado!");
    }
}

function atualizarStatus() {
    let status = document.getElementById("status-select").value;
    let statusText = document.getElementById("status-text");

    if (status === "adotado") {
        statusText.textContent = "Adotado";
        statusText.className = "status-adotado";
    } else {
        statusText.textContent = "Disponível";
        statusText.className = "status-disponivel";
    }
}

function alternarSubmenu(botao) {
  const submenu = botao.closest('li').querySelector('ul.submenu');
  if (submenu) {
    submenu.classList.toggle('ativo');
  }
}
