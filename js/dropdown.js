// Obtenha o botão e, quando o usuário clicar nele, execute myFunction
document.getElementById("myBtn").onclick = function() {myFunction()};

// myFunction alterna entre adicionar e remover a classe show, 
//que é usada para ocultar e mostrar o conteúdo suspenso
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
