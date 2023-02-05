const btnMobile = document.getElementById('btn-mobile'); // pega o elemento pelo id

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault(); // execulta o touch do android não executa o evento click
  const nav = document.getElementById('nav');
  nav.classList.toggle('active'); // toggle remove a classe 'active' se tiver adicina se não tiver
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);