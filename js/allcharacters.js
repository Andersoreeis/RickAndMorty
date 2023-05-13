import { GetAllCharacters } from "./api.js";

const itemsPerPage = 5; // Número de itens por página
let currentPage = 1; // Página atual
let allCharacters; // Variável para armazenar os personagens

const loadTable = async () => {
  allCharacters = await GetAllCharacters(currentPage);

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
    } else if ( character.species == 'Humanoide'){
      specieAllcharacter.append(iconAlien);
      
    }else{
      specieAllcharacter.append(iconAlien);
    }
    
    return tableCharacters
  };

  const table = allCharacters.results.map(createTableAllCharacter);
  const container = await getContainer();

  container.innerHTML = ''; // Limpa o conteúdo existente do contêiner

  table.forEach((tableElement) => {
    container.appendChild(tableElement);
  });

  // Mover para a posição da tabela
  container.scrollIntoView({ behavior: "smooth" });
};

function renderPagination() {
  const totalPages = Math.ceil(allCharacters.info.count / itemsPerPage);

  const pagination = document.getElementById('pagination');
  pagination.innerHTML = ''; // Limpa o conteúdo anterior

  const prevButton = document.createElement('a');
  prevButton.href = '#';
  prevButton.textContent = 'Prev';
  prevButton.addEventListener('click', function(event) {
    event.preventDefault(); // Impede a ação padrão de seguir o link
    if (currentPage > 1) {
      currentPage--;
      loadTable(); // Carrega a página anterior
      renderPagination();
    }
  });
  pagination.appendChild(prevButton);

  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(startPage + 4, totalPages);

  if (endPage - startPage < 4) {
    startPage = Math.max(1, endPage - 4);
  }

  for (let i = startPage; i <= endPage; i++) {
    const pageButton = document.createElement('a');
    pageButton.href = '#';
    pageButton.textContent = i;
    if (i === currentPage) {
      pageButton.classList.add('active');
    }
    pageButton.addEventListener('click', function(event) {
      event.preventDefault(); // Impede a ação padrão de seguir o link
      currentPage = parseInt(this.textContent);
      loadTable(); // Carrega a nova página
      renderPagination();
    });
    pagination.appendChild(pageButton);
  }

  const nextButton = document.createElement('a');
  nextButton.href = '#';
  nextButton.textContent = 'Next';
  nextButton.addEventListener('click', function(event) {
    event.preventDefault(); // Impede a ação padrão de seguir o link
    if (currentPage < totalPages) {
      currentPage++;
      loadTable(); // Carrega a próxima página
      renderPagination();
    }
  });
  pagination.appendChild(nextButton);
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

// Função para carregar a página inicial
const loadInitialPage = async () => {
  await loadTable();
  renderPagination();
};

export { loadInitialPage };
