import { loadAllCharacter } from './allcharacters.js';

const routes = {
  '/about': './pages/about.html',
  '/character': './pages/character.html',
};

const route = async () => {
  window.event.preventDefault();
 
  window.history.pushState({}, '', window.event.target.href);
  const path = window.location.pathname;
  const response = await fetch(routes[path]);
  console.log(path);
  const html = await response.text();
  document.getElementById('root').innerHTML = html;

  if (path === '/character') {
    await loadAllCharacter();
  }
  
 
};

window.route = route;
