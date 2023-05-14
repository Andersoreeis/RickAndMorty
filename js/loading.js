 // Função para ocultar o spinner e exibir o conteúdo principal após 2 segundos
  async  function showContent() {
    setTimeout(function() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("root").style.display = "block";
    }, 900); // 1.2 segundos
}

// Chama a função showContent quando o evento load for disparado
window.addEventListener("load", showContent);

 // Função para ocultar o spinner e exibir o conteúdo principal após 2 segundos
