import { GetCharacterFilter, GetCharacterForName } from "./api.js";


const createCharacterDetails = function (character) {
    // Criação dos elementos

    const container = document.createElement('div');
    container.classList.add('details-container');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('container-img-details');
    const img = document.createElement('img');
    img.src = character.image;
    img.alt = '';

    const contentContainer = document.createElement('div');
    contentContainer.classList.add('container-details-content');

    const nameParagraph = document.createElement('p');
    nameParagraph.classList.add('name-character');
    nameParagraph.textContent = character.name;

    const statusParagraph = document.createElement('p');
    statusParagraph.classList.add('status-details');
    const statusSpan1 = document.createElement('span');
    statusSpan1.classList.add('statuslife2');
    const statusSpan2 = document.createElement('span');
    statusSpan2.classList.add('content-text-status');
    statusSpan2.textContent = character.status

    if(character.status == 'Dead'){
        statusSpan1.classList.add('statuslife2', 'color-status-dead');
    statusParagraph.appendChild(document.createTextNode('Status: '));
    statusParagraph.appendChild(statusSpan1);
    statusParagraph.appendChild(statusSpan2);
    }else if (character.status == 'unknown'){
        statusSpan1.classList.add('statuslife2', 'color-status-unknown');
        statusParagraph.appendChild(document.createTextNode('Status: '));
        statusParagraph.appendChild(statusSpan1);
        statusParagraph.appendChild(statusSpan2);
    }
    else{
        statusSpan1.classList.add('statuslife2', 'color-status-life');
        statusParagraph.appendChild(document.createTextNode('Status: '));
        statusParagraph.appendChild(statusSpan1);
        statusParagraph.appendChild(statusSpan2);
    }
    

    const genderParagraph = document.createElement('p');
    genderParagraph.classList.add('genderParagraph')
    const genderI1 = document.createElement('i');
    genderI1.classList.add('fa-solid', 'fa-mars');
    const genderI2 = document.createElement('i');
    genderI2.classList.add('fa-solid', 'fa-venus');
    const genderSpan = document.createElement('span');
    genderSpan.classList.add('content-text-gender');
    genderSpan.textContent = character.gender;

    if (character.gender === 'Male') {
        genderI1.classList.add('fa-solid', 'fa-mars', 'color-male');
        genderParagraph.appendChild(document.createTextNode('Gender:'));
        genderParagraph.appendChild(genderI1);
        genderParagraph.appendChild(genderSpan)
    } else if (character.gender === 'Female') {
        genderI2.classList.add('fa-solid', 'fa-venus', 'color-female');

        genderParagraph.appendChild(document.createTextNode('Gender:'));
        genderParagraph.appendChild(genderI2);
        genderParagraph.appendChild(genderSpan)
    }

    

    const speciesParagraph = document.createElement('p');
    const speciesI = document.createElement('i');
    speciesI.classList.add('fa-solid', 'fa-user');
    const speciesSpan = document.createElement('span');
    speciesSpan.classList.add('content-text-species');
    speciesSpan.textContent = character.species;
    speciesParagraph.appendChild(document.createTextNode('Species: '));
    speciesParagraph.appendChild(speciesI);
    speciesParagraph.appendChild(speciesSpan);

    const typeParagraph = document.createElement('p');
    const typeI = document.createElement('i');
    typeI.classList.add('fa-solid', 'fa-user-plus');
    const typeSpan = document.createElement('span');
    typeSpan.classList.add('content-text-type');
    typeSpan.textContent = 'null'
    typeParagraph.appendChild(document.createTextNode('Type: '));
    typeParagraph.appendChild(typeI);
    typeParagraph.appendChild(typeSpan);

    const originParagraph = document.createElement('p');
    const originI = document.createElement('i');
    originI.classList.add('fa-solid', 'fa-earth-americas');
    const originSpan = document.createElement('span');
    originSpan.classList.add('content-text-origen');
    originSpan.textContent = character.origin.name;
    originParagraph.appendChild(document.createTextNode('Origin '));
    originParagraph.appendChild(originI);
    originParagraph.appendChild(originSpan);

    const locationParagraph = document.createElement('p');
    const locationI = document.createElement('i');
    locationI.classList.add('fa-sharp', 'fa-solid', 'fa-location-dot');
    const locationSpan = document.createElement('span');
    locationSpan.classList.add('content-text-location');
    locationSpan.textContent = character.location.name;
    locationParagraph.appendChild(document.createTextNode('Location '));
    locationParagraph.appendChild(locationI);
    locationParagraph.appendChild(locationSpan);

    // Aninhamento dos elementos
    imgContainer.appendChild(img);

    contentContainer.appendChild(nameParagraph);
    contentContainer.appendChild(statusParagraph);
    contentContainer.appendChild(genderParagraph);
    contentContainer.appendChild(speciesParagraph);
    contentContainer.appendChild(typeParagraph);
    contentContainer.appendChild(originParagraph);
    contentContainer.appendChild(locationParagraph);

    container.appendChild(imgContainer);
    container.appendChild(contentContainer);

    // Inserção do elemento no documento
    return container;
};




const loadCharacterDetails = async () => {
    const characterId = localStorage.getItem("id-character");

    console.log(characterId);
    try {
        const character = await GetCharacterFilter(Number(characterId));

        if (character && character.id === Number(characterId)) {
            const detailsContainer = createCharacterDetails(character);
            renderCharacterDetails([detailsContainer]);
        } else {
            console.log("Personagem não encontrado.");
        }
    } catch (error) {
        console.log("Erro ao obter detalhes do personagem:", error);
    }
};

const renderCharacterDetails = (detailsContainers) => {
    const rootElement = document.getElementById("details-container");
    rootElement.innerHTML = "";

    detailsContainers.forEach((detailsContainer) => {
        rootElement.appendChild(detailsContainer);
    });
};

export { loadCharacterDetails };





