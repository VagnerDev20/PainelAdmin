// *********HEADER***************
//botao icone dropdow header
function toggleDropdownContent() {
  const dropdownContent = document.querySelector(".dropdown-content");
  dropdownContent.classList.toggle("show");
}

const dropdownBtn = document.querySelector(".btnUser");
dropdownBtn.addEventListener("click", toggleDropdownContent);
//*****************************************************************************


// rotacionar o icone header
const dropdownIcon = document.getElementById("dropdown-icon");
function dropdownIconRotated() {
  dropdownIcon.classList.toggle("rotated");
}
dropdownIcon.addEventListener("click", dropdownIconRotated);
//*****************************************************************************



// Seleciona o botão de menu mobile pelo ID
const btnMobile = document.getElementById("btn-mobile");

// Define a função de alternância de menu
function toggleMenu(event) {
  // Evita que o toque no menu dispare o evento click
  if (event.type === "touchstart") {
    event.preventDefault();
  }
  
  // Seleciona o elemento HTML do menu pelo ID
  const nav = document.getElementById("nav");
  
  // Adiciona ou remove a classe "active" no menu
  nav.classList.toggle("active");
  cadastroMenu.classList.remove('show');
  financeiromenu.classList.remove('show');
  relatoriomenu.classList.remove('show');
  
  // Verifica se a classe "active" está presente no menu
  const active = nav.classList.contains("active");
  
  // Altera o atributo "aria-expanded" do botão do menu
  event.currentTarget.setAttribute("aria-expanded", active);
  
  // Altera o texto alternativo do botão do menu com base na classe "active"
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

// Adiciona um listener de evento de clique no botão de menu móvel
btnMobile.addEventListener("click", toggleMenu);

// Adiciona um listener de evento de toque no botão de menu móvel para dispositivos móveis
btnMobile.addEventListener("touchstart", toggleMenu);


//*****************************************************************************


//dropdown menu cadastro
const btnCadastro = document.getElementById("btnCadastro");
const cadastroMenu = document.getElementById("CadastroMenu");

function menuDropdown() {
  cadastroMenu.classList.toggle("show");
}

btnCadastro.addEventListener("click", menuDropdown);
//*****************************************************************************

//dropdown menu financeiro
const btnfinanceiro = document.getElementById("btnFinanceiro");
const financeiromenu = document.getElementById("FinanceiroMenu");

function menuFinanceiro() {
  financeiromenu.classList.toggle("show");
}

btnfinanceiro.addEventListener("click", menuFinanceiro);
//*****************************************************************************

//dropdown menu relatorio
const btnrelatorio = document.getElementById("btnRelatorio");
const relatoriomenu = document.getElementById("RelatorioMenu");

function menuRelatorio() {
  relatoriomenu.classList.toggle("show");
}

btnrelatorio.addEventListener("click", menuRelatorio);
//*****************************************************************************

// *********FORMULARIOS ADMIN***************
//script overlay formulario configuração
const openFormBtn = document.querySelector('.btnAdminConfig');
const myForm = document.querySelector('.modalConfig');
const overlay = document.getElementById('overlay');

function openModal() {
  myForm.classList.add('open');
  overlay.classList.add('visible');
  toggleDropdownContent();
  dropdownIconRotated();
}

function closeModal() {
  myForm.classList.remove('open');
  overlay.classList.remove('visible');
}

openFormBtn.addEventListener('click', openModal);
overlay.addEventListener('click', closeModal);

//*****************************************************************************



//escript para fechar o formulario ao clicar no esc-->
// seleciona o formulário que você deseja controlar
const meuElemento = document.querySelector('.modalConfig');// seleciona a classe do form
const overlayClose = document.getElementById('overlay');

function verificarClasseShow(meuElemento) {
  if (meuElemento.classList.contains('open')) {
    document.querySelector('.modalConfig').classList.toggle("open");
    overlayClose.classList.remove('visible');
  } else {

  }
}

// adiciona um evento de escuta de teclado ao documento
document.addEventListener('keydown', (event) => {
  // verifica se a tecla "Esc" foi pressionada
  if (event.key === 'Escape') {

    verificarClasseShow(meuElemento); // chamada da função

  }
});
//*****************************************************************************


//script overlay formulario perfil
const openFormBtnPerfil = document.querySelector('.btnAdminPerfil');
const myFormPerfil = document.querySelector('.modalPerfil');
const overlayPerfil = document.getElementById('overlayPerfil');

function openModalPerfil() {
  myFormPerfil.classList.add('open');
  overlayPerfil.classList.add('visible');
  toggleDropdownContent();
  dropdownIconRotated();
}

function closeModalPerfil() {
  myFormPerfil.classList.remove('open');
  overlayPerfil.classList.remove('visible');
}

openFormBtnPerfil.addEventListener('click', openModalPerfil);
overlayPerfil.addEventListener('click', closeModalPerfil);
//*****************************************************************************

// esc form perfil
const meuElementoPerfil = document.querySelector('.modalPerfil');// seleciona a classe do form
const overlayClosePerfil = document.getElementById('overlayPerfil');

function verificarClasseShowPerfil(meuElementoPerfil) {
  if (meuElementoPerfil.classList.contains('open')) {
    document.querySelector('.modalPerfil').classList.toggle("open");
    overlayClosePerfil.classList.remove('visible');
  } else {

  }
}

// adiciona um evento de escuta de teclado ao documento
document.addEventListener('keydown', (event) => {
  // verifica se a tecla "Esc" foi pressionada
  if (event.key === 'Escape') {

    verificarClasseShowPerfil(meuElementoPerfil); // chamada da função

  }
});
//*****************************************************************************


// botao close configuração
const btnCloseConfig = document.querySelector('.imgFechar');
function CloseConfigModal(){
  closeModal();
}
btnCloseConfig.addEventListener('click', CloseConfigModal);

// botao close perfil
const btnClosePerfil = document.querySelector('.imgFecharPerfil');
function FecharFrmPerfil(){
  closeModalPerfil();
}
btnClosePerfil.addEventListener('click', FecharFrmPerfil);


