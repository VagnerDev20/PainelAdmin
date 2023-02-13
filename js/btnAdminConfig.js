//botao configuração admin
const btnAdminConfig = document.querySelector('.btnAdminConfig');
const modalConfig = document.querySelector('.modalConfig');

btnAdminConfig.addEventListener('click', () => {
    modalConfig.classList.toggle('show');
});