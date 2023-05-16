import { GetCharacterForName } from "./api.js";

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('btn-search');
  const resultsContainer = document.getElementById('results-container');

  searchInput.addEventListener('click', function () {
    resultsContainer.innerHTML = '';
  });

  searchButton.addEventListener('click', performSearch);
  searchInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      performSearch();
    }
  });

  async function performSearch() {
    const searchQuery = searchInput.value.trim();

    const textSearchValue = document.getElementById('text-search');
    textSearchValue.classList.add('addItem', 'text-search');
    textSearchValue.textContent = 'Search Character: ' + searchQuery;

    if (searchQuery !== '') {
      try {
        const character = await GetCharacterForName(searchQuery);
        resultsContainer.innerHTML = '';

        if (character) {
          const cards = character.results.map(createCardCharacter);
          resultsContainer.classList.add('container-search');
          resultsContainer.replaceChildren(...cards);
        } else {
          const messageElement = document.createElement('p');
          messageElement.textContent = 'Personagem não encontrado.';
          resultsContainer.appendChild(messageElement);
        }
      } catch (error) {
        const messageElement = document.createElement('p');
        messageElement.textContent = 'Character Not Found';
        messageElement.classList.add('error-message');
        resultsContainer.appendChild(messageElement);
      }
    }
  }
});

const createCardCharacter = (character) => {
  const characterCard = document.createElement('div');
  characterCard.classList.add('characters-card');

  const characterImg = document.createElement('div');
  characterImg.classList.add('character-img');

  const img = document.createElement('img');
  img.src = character.image;

  const characterData = document.createElement('div');
  characterData.classList.add('character-data');

  const characterName = document.createElement('div');
  characterName.classList.add('character-name', 'text-name');
  const maxNameLength = 16;
  characterName.textContent =
    character.name.length > maxNameLength
      ? character.name.substring(0, maxNameLength) + '...'
      : character.name;

  const details = document.createElement('div');
  details.classList.add('details');
  const linkDetails = document.createElement('a');
  linkDetails.classList.add('linkDetails');
  linkDetails.textContent = 'Details';
  linkDetails.setAttribute('href', '/details');
  
  // Usando uma função de callback para capturar o ID do personagem
  linkDetails.addEventListener('click', function (event) {
    event.preventDefault();
    const clickedCharacterId = character.id;
    localStorage.setItem('id-character', clickedCharacterId);
    console.log(clickedCharacterId);
    // Aqui você pode redirecionar para a página de detalhes ou executar outras ações necessárias.
  });

  characterCard.append(characterImg, characterData, details);
  characterImg.append(img);
  characterData.append(characterName, details);
  details.append(linkDetails);

  return characterCard;
};
