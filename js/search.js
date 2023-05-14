import { GetCharacterForName } from "./api.js";

document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('btn-search');
  const resultsContainer = document.getElementById('results-container');

  searchInput.addEventListener('click', function(){
    
    resultsContainer.innerHTML = ''
  })

  searchButton.addEventListener('click', async function() {
    const searchQuery = searchInput.value.trim(); // Obtém o valor do campo de pesquisa

    const textSearchValue = document.getElementById('text-search')
    textSearchValue.classList.add('addItem', 'text-search')
    textSearchValue.textContent = 'Search Character: ' + searchInput.value.trim()

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
            messageElement.classList.add('error-message')
            resultsContainer.appendChild(messageElement);
        }
      }
  });
});





const createCardCharacter = (character)=>{ // criação dos elementos

   

    const characterCard = document.createElement('div')
    characterCard.classList.add('characters-card')

    const characterImg = document.createElement('div')
    characterImg.classList.add('character-img')

    const img = document.createElement('img')
    img.src = character.image

    const characterData = document.createElement('div')
    characterData.classList.add('character-data')

    const characterName = document.createElement('div')
    characterName.classList.add('character-name', 'text-name')
    characterName.textContent = character.name
    const characterStatus = document.createElement('div')
    characterStatus.classList.add('character-status', 'text-character')

    const statusLife = document.createElement('div')
    const lifeOrDeadText = document.createElement('div')
    lifeOrDeadText.classList.add('text-character')
   
    if(character.status != 'Alive'){
        statusLife.classList.add('status-life','color-status-dead' )
        lifeOrDeadText.textContent = "Morto"
    }else{
        statusLife.classList.add('status-life','color-status-life' )
        lifeOrDeadText.textContent = "Vivo"
    }

   
    

    const characterFirstLocation = document.createElement('div')
    characterFirstLocation.classList.add('character-first-location', 'text-character')

    const firstViewText = document.createElement('p')
    firstViewText.classList.add('p-text-character')
    firstViewText.textContent = 'Visto pela primeira vez em:'

    const firstlocationText = document.createElement('div')
    firstlocationText.classList.add('text-character')
    firstlocationText.textContent = character.origin.name


    const characterLastLocation = document.createElement('div')
    characterLastLocation.classList.add('character-last-location', 'text-character')

    const lastViewText = document.createElement('p')
    lastViewText.classList.add('p-text-character')
    lastViewText.textContent =  'Última localização conhecida:'

    const lastlocationText = document.createElement('div')
    lastlocationText.classList.add('text-character')
    lastlocationText.textContent = character.location.name


    characterCard.append(characterImg, characterData)
    characterImg.append(img)

    characterData.append(characterName,characterStatus, characterFirstLocation, )


    
  

return characterCard


  
}