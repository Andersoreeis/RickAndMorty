import {GetSomeCharacter} from "./api.js" // importa api que retorna os protagonista



const protagonist  =  await GetSomeCharacter(1,2,3,4)

const createCardCharacter = (protagonist)=>{ // criação dos elementos
    const characterCard = document.createElement('div')
    characterCard.classList.add('characters-card')

    const characterImg = document.createElement('div')
    characterImg.classList.add('character-img')

    const img = document.createElement('img')
    img.src = protagonist.image

    const characterData = document.createElement('div')
    characterData.classList.add('character-data')

    const characterName = document.createElement('div')
    characterName.classList.add('character-name', 'text-name')
    characterName.textContent = protagonist.name
    const characterStatus = document.createElement('div')
    characterStatus.classList.add('character-status', 'text-character')

    const statusLife = document.createElement('div')
    const lifeOrDeadText = document.createElement('div')
    lifeOrDeadText.classList.add('text-character')
   
    if(protagonist.status != 'Alive'){
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
    firstlocationText.textContent = protagonist.origin.name


    const characterLastLocation = document.createElement('div')
    characterLastLocation.classList.add('character-last-location', 'text-character')

    const lastViewText = document.createElement('p')
    lastViewText.classList.add('p-text-character')
    lastViewText.textContent =  'Última localização conhecida:'

    const lastlocationText = document.createElement('div')
    lastlocationText.classList.add('text-character')
    lastlocationText.textContent = protagonist.location.name



    characterCard.append(characterImg, characterData)
    characterImg.append(img)

    characterData.append(characterName,characterStatus, characterFirstLocation, )


    
  

return characterCard


  
}

const loadCard = () => { // manda os novos elementos
    const container = document.getElementById('carrosel')
    const cards  =  protagonist.map(createCardCharacter)
    container.replaceChildren(...cards)
}


 
    loadCard()
 

