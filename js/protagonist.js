import {GetSomeCharacter} from "./api.js" // importa api que retorna os protagonista



const protagonist  =  await GetSomeCharacter(1,2,3,4)


const createCardCharacter = (character) => { // criação dos elementos



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
    const maxNameLength = 16;
    localStorage.setItem('name-allcharacter', character.name)

    characterName.textContent = character.name.length > maxNameLength ? character.name.substring(0, maxNameLength) + '...' : character.name;

    const details = document.createElement('div')
    details.classList.add('details')
    const linkDetails = document.createElement('a')
    linkDetails.setAttribute('href', '/details')
    linkDetails.classList.add('linkDetails')
    linkDetails.textContent = 'Details'
    linkDetails.addEventListener('click', function (event) {
        event.preventDefault();
    })



    characterCard.append(characterImg, characterData, details)
    characterImg.append(img)
    characterData.append(characterName, details)
    details.append(linkDetails)

    return characterCard



}

const loadCard = () => { // manda os novos elementos
    const container = document.getElementById('carrosel')
    const cards  =  protagonist.map(createCardCharacter)
    container.replaceChildren(...cards)
}


 
    loadCard()
 

