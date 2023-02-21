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

// *********MENU PRINCIPAL***************
// botao menu principal
const btnMobile = document.getElementById("btn-mobile"); // pega o elemento pelo id

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault(); // execulta o touch do android não executa o evento click
  const nav = document.getElementById("nav");
  nav.classList.toggle("active"); // toggle remove a classe 'active' se tiver adicina se não tiver
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);
//*****************************************************************************


//dropdown submenu menu principal
document.getElementById("myBtn").onclick = function () {
  MenuDropdown();
};
function MenuDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}
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






