import { GetCharacterForName } from "./api.js";
const name =  localStorage.getItem('name-allcharacter')
const getName = await GetCharacterForName(name)

let characterName = localStorage.getItem("name-allcharacter");
let searchForName = GetCharacterForName(characterName)

const createCaracteristCharacter = function(){

}

const loadCaracteristCharacter = function(){
    const container = document.getElementById('details-container')
    const cards = getName.results.map(createCaracteristCharacter)
}