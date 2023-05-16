 import { GetCharacterForName } from "./api.js";

export class ResultsContainer extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.render();
      this.applyStyles();
  
      // Aguardar a próxima atualização do ciclo de eventos para garantir que os elementos estejam disponíveis
      setTimeout(() => {
        this.setupElements();
      });
    }
  
    applyStyles() {
      const styleLink = document.createElement('link');
      styleLink.setAttribute('rel', 'stylesheet');
      styleLink.setAttribute('href', './css/style.css');
      this.shadowRoot.appendChild(styleLink);
  
      const styleSearchLink = document.createElement('link');
      styleSearchLink.setAttribute('rel', 'stylesheet');
      styleSearchLink.setAttribute('href', './css/search.css');
  
      this.shadowRoot.appendChild(styleSearchLink);
  
      const styleProtagonistLink = document.createElement('link');
      styleProtagonistLink.setAttribute('rel', 'stylesheet');
      styleProtagonistLink.setAttribute('href', './css/protagonist.css');
  
      this.shadowRoot.appendChild(styleProtagonistLink);
    }
  
    render() {
      this.shadowRoot.innerHTML = `
      <div class="container-main">
        <div class="search-container">
          <div class="search-button">
            <input type="text" id="search-input" placeholder="Search characters..." class="search-character">
            <button class="btn-search" id="btn-search">
              <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </div>
      <h1 id="text-search" class="remove"></h1>
      <div id="results-container">
        <div class="container">
          <div class="content-home">
            <p class="text-resume">"Rick and Morty" is an animated comedy and science fiction series that follows the
              interdimensional adventures of a brilliant and selfish grandfather, Rick, and his insecure grandson,
              Morty. Together, they face family issues and dangerous situations in different parallel universes.</p>
            <div class="button-personagens"><a href="/character">See Character</a></div>
          </div>
          <div class="container-img"></div>
        </div>
        <div class="carrosel" id="carrosel"></div>
        <div class="trailer-rick">
          <iframe width="760" height="415" src="https://www.youtube.com/embed/6Zt15L7Gy3U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    `;
  
    }
  
    setupElements() {
      const searchInput = this.shadowRoot.querySelector('#search-input');
      const searchButton = this.shadowRoot.querySelector('#btn-search');
      const resultsContainer = this.shadowRoot.querySelector('#results-container');
      const textSearchValue = this.shadowRoot.querySelector('#text-search');

      
      // Use os elementos normalmente a partir daqui
      console.log(searchInput);
      console.log(searchButton);
      console.log(resultsContainer);
      console.log(textSearchValue);
  
      // Adicione os ouvintes de eventos, etc.
      
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
    
        // const textSearchValue = document.getElementById('text-search');
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
            window.location.href = '/details'; // Redirecionar para a página de detalhes
          });
          
      
        characterCard.append(characterImg, characterData, details);
        characterImg.append(img);
        characterData.append(characterName, details);
        details.append(linkDetails);
      
        return characterCard;
      };
    }
  }
  
  customElements.define('results-container', ResultsContainer);
  