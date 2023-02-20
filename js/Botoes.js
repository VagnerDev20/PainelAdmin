//botao icone dropdow header
function toggleDropdownContent() {
  const dropdownContent = document.querySelector(".dropdown-content");
  dropdownContent.classList.toggle("show");
}

const dropdownBtn = document.querySelector(".btnUser");
dropdownBtn.addEventListener("click", toggleDropdownContent);
//*******************************************



// rotacionar o icone
const dropdownIcon = document.getElementById("dropdown-icon");
function dropdownIconRotated(){
    dropdownIcon.classList.toggle("rotated");
}
dropdownIcon.addEventListener("click", dropdownIconRotated);
//*******************************************


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
//*******************************************

//dropdown submenu
document.getElementById("myBtn").onclick = function () {
  MenuDropdown();
};
function MenuDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}
//*******************************************



/*


<!--botao configuração dropdown-->
        <script>
            const btnAdminConfig = document.querySelector('.btnAdminConfig');
            const modalConfig = document.querySelector('.modalConfig');

            btnAdminConfig.addEventListener('click', () => {
                modalConfig.classList.toggle('show');
            });
        </script>

        <!--botao icone formulario configuração-->
        <script>
            document.querySelector('.imgFechar').onclick = function () { imgFecharForm() };
            function imgFecharForm() {
                document.querySelector('.modalConfig').classList.toggle("show");
            }
        </script>





*/
