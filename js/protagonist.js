import { GetSomeCharacter } from "./api.js";
import { ResultsContainer } from './componentIndex.js';

document.addEventListener("DOMContentLoaded", async function () {
  const protagonist = await GetSomeCharacter(1, 2, 3, 4);

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
    localStorage.setItem('name-allcharacter', character.name);
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
      window.location.href = '/details'; // Redirecionar para a página de detalhes
    });


    characterCard.append(characterImg, characterData, details);
    characterImg.append(img);
    characterData.append(characterName, details);
    details.append(linkDetails);

    return characterCard;
  };

  class CustomResultsContainer extends ResultsContainer {
    connectedCallback() {
      super.connectedCallback();
      this.loadCard();
    }

    loadCard() {
      const container = this.shadowRoot.querySelector('.carrosel');
      const cards = protagonist.map(createCardCharacter);
      container.replaceChildren(...cards);
    }
  }

  customElements.define('custom-results-container', CustomResultsContainer);

  const resultsContainer = new CustomResultsContainer();
});
