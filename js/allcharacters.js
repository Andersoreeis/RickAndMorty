import { GetAllCharacters } from "./api.js";

const allCharacters = await GetAllCharacters(1);

for(let i = 0; i < allCharacters.length; i++){
  console.log(allCharacters);
  
}


const createTableAllCharacter = (character) => {
  const tableCharacters = document.createElement('div')
  tableCharacters.classList.add('table')
  
  const imgAllCharacter = document.createElement('img')
  imgAllCharacter.classList.add('img-allcharacter')
  imgAllCharacter.src = character.image
  
  const nameAllCharacter = document.createElement('div')
  nameAllCharacter.classList.add('name-allcharacter')
  nameAllCharacter.textContent = character.name
  localStorage.setItem('name-allcharacter', character.name)
  localStorage.setItem('photo-allcharacter', character.image)
 
  
  
  const statusAllcharacter = document.createElement('div')
  statusAllcharacter.classList.add('status-allcharacter')
  
  
  
  const statusDadOrLife = document.createElement('div')
  statusDadOrLife.classList.add('status-deadOrLife')
  
  
  const statusText = document.createElement('div')
  statusText.classList.add('status-text')
  statusText.textContent = character.status
  
  if(statusText.textContent == 'Alive'){
    statusDadOrLife.classList.add('status-deadOrLife', 'color-status-life')
  }else if(statusText.textContent  == 'unknown'){
    statusDadOrLife.classList.add('status-deadOrLife', 'color-status-unknown')
  
  }else if (statusText.textContent == 'Dead'){
    statusDadOrLife.classList.add('status-deadOrLife', 'color-status-dead')
  }else{
    console.log('erro-status');
    
  }
  
  
  const specieAllcharacter = document.createElement('div')
  specieAllcharacter.classList.add('specie-allcharacter')
  
  const iconPerson = document.createElement('i')
  iconPerson.classList.add('fa-solid', 'fa-person')
  
  const iconAlien = document.createElement('i')
  iconAlien.classList.add('fa-brands', 'fa-optin-monster')
  
  
  tableCharacters.append(imgAllCharacter,nameAllCharacter,statusAllcharacter,specieAllcharacter)
  statusAllcharacter.append(statusDadOrLife,statusText)
  
  if (character.species == 'Human') {
    specieAllcharacter.append(iconPerson);
  }else  if (character.species == 'Alien') {
    specieAllcharacter.append(iconAlien);
  } else{
    console.log('erro');
    
  }
  
  return tableCharacters
};

export const loadTable = async () => {
  

  
    const table = allCharacters.results.map(createTableAllCharacter);
    const container = await getContainer();

    container.innerHTML = ''; // Limpa o conteúdo existente do contêiner

    table.forEach((tableElement) => {
      container.appendChild(tableElement);
    });

    // renderPagination();
 
};

// function renderPagination() {
//   const totalPages = Math.ceil(allCharacters.results.length / itemsPerPage);

//   const pagination = document.getElementById('pagination');
//   pagination.innerHTML = ''; // Limpa o conteúdo anterior

//   for (let i = 1; i <= totalPages; i++) {
//     const pageButton = document.createElement('div')
//     pageButton.classList.add('page');
//     pageButton.textContent = i;
//     pageButton.addEventListener('click', function() {
//       currentPage = parseInt(this.textContent);
//       loadTable(); // Carrega a nova página
//     });

//     pagination.appendChild(pageButton);
//   }
// }



// Função auxiliar para obter o contêiner quando estiver disponível


function loadButton(){
  const pagination = document.getElementById('pagination');
  pagination.innerHTML = ''
}

function getContainer() {
  return new Promise((resolve) => {
    const checkContainer = () => {
      const container = document.getElementById('container-allcharacter-main');
      if (container) {
        resolve(container);
      } else {
        setTimeout(checkContainer, 100);
      }
    };
    checkContainer();
  });
}


