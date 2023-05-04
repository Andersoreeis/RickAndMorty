import {GetAllCharacters} from "./api.js"
const allCharacters  = await GetAllCharacters()


const createTableAllCharacter = (character) =>{
const tableCharacters = document.createElement('div')
tableCharacters.classList.add('table')

const imgAllCharacter = document.createElement('img')
imgAllCharacter.classList.add('img-allcharacter')
imgAllCharacter.src = character.image

const nameAllCharacter = document.createElement('div')
nameAllCharacter.classList.add('name-allcharacter')
nameAllCharacter.textContent = character.name


const statusAllcharacter = document.createElement('div')
statusAllcharacter.classList.add('status-allcharacter')



const statusDadOrLife = document.createElement('div')
statusDadOrLife.classList.add('status-deadOrLife')

const statusText = document.createElement('div')
statusText.classList.add('status-text')
statusText.textContent = character.status

const specieAllcharacter = document.createElement('div')
specieAllcharacter.classList.add('specie-allcharacter')

const iconPerson = document.createElement('i')
iconPerson.classList.add('fa-solid', 'fa-person')

const iconAlien = document.createElement('i')
iconAlien.classList.add('fa-sharp', 'fa-solid', 'fa-user-alien')

const iconMonster = document.createElement('div')
iconMonster.classList.add('fa-sharp', 'fa-solid', 'fa-spaghetti-mosnter-flying')

tableCharacters.append(imgAllCharacter,nameAllCharacter,statusAllcharacter,specieAllcharacter)
statusAllcharacter.append(statusDadOrLife,statusText)
specieAllcharacter.append(iconPerson)

return tableCharacters






}


const loadTable = () => {
    const container = document.getElementById('container-allcharacter-main');
    if (container) {
      const table = allCharacters.results.map(createTableAllCharacter);
      container.replaceChild(...table);
    }
  };

loadTable()