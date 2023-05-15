import { loadAllCharacter } from './allcharacters.js';
import { loadCharacterDetails } from './detailsCharacter.js';

const routes = {
  '/about': './pages/about.html',
  '/character': './pages/character.html',
  '/details': 'pages/detailsCharacter.html'
};

const route = async () => {
  event.preventDefault();

  const href = event.target.getAttribute('href');
  window.history.pushState({}, '', href);
  const path = window.location.pathname;

  const response = await fetch(routes[path]);
  const html = await response.text();
  document.getElementById('root').innerHTML = html;

  if (path === '/character') {
    await loadAllCharacter();
  }

  if (path === '/details') {
    await loadCharacterDetails();
  }
};

document.addEventListener('click', (event) => {
  const href = event.target.getAttribute('href');
  if (event.target.matches('a') && href !== './index.html') {
    route();
  }
});
