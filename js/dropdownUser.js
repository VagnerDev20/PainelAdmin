const dropdownBtn = document.querySelector('.btnUser');
const dropdownContent = document.querySelector('.dropdown-content');

dropdownBtn.addEventListener('click', () => {
  dropdownContent.classList.toggle('show');
});


const dropdownIcon = document.getElementById("dropdown-icon");

dropdownIcon.addEventListener("click", function() {
  dropdownIcon.classList.toggle("rotated");
});







const dropdownBtnClose = document.querySelector('.btnAdminConfig');
const dropdownContentClose = document.querySelector('.dropdown-content');

dropdownBtnClose.addEventListener('click', () => {
  dropdownContentClose.classList.toggle('show');
});






const dropdownClose = document.querySelector('.btnAdminConfig');
const dropdownIconClose = document.getElementById("dropdown-icon");

dropdownClose.addEventListener("click", function() {
  dropdownIconClose.classList.toggle("rotated");
});


