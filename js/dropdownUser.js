const dropdownBtn = document.querySelector('.btnUser');
const dropdownContent = document.querySelector('.dropdown-content');

dropdownBtn.addEventListener('click', () => {
  dropdownContent.classList.toggle('show');
});


const dropdownIcon = document.getElementById("dropdown-icon");

dropdownIcon.addEventListener("click", function() {
  dropdownIcon.classList.toggle("rotated");
});
