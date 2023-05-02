

/**API DO RICK AND MORTY */

// Pega todos os personagens
  export const GetAllCharacters = async () => {
    const url = `https://rickandmortyapi.com/api/character`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

// Pega um personagem filtrado pelo id
export const GetCharacterFilter = async (id) => {
    const url = `https://rickandmortyapi.com/api/character/${id}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

// Pega 4 personagens 
export const GetSomeCharacter = async (c1,c2,c3,c4) => {
    const url = `https://rickandmortyapi.com/api/character/${c1},${c2},${c3},${c4}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}
// Pega o personagem pelo nome
export const GetCharacterForName = async (name) => {
    const url = `https://rickandmortyapi.com/api/character/?name=${name}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}



// Pega todas as localizações de Rick And morty
export const GetAllLocation = async () => {
    const url = `https://rickandmortyapi.com/api/location`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

// Pega um local filtrado pelo id
export const GetLocationFilter = async (idLocation) => {
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

// Pega quatro locais
export const GetSomeLocation = async (l1,l2,l3,l4) => {
    const url = `https://rickandmortyapi.com/api/location/${l1},${l2},${l3},${l4}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

 // Pega todos os episodios
export const GetAllEpisode = async () => {
    const url = `https://rickandmortyapi.com/api/episode`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

// Pega um episodio filtrado pelo id
export const GetEpisodeFilter = async (idEpisode) => {
    const url = `https://rickandmortyapi.com/api/episode/${idEpisode}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

// Pega quatro episodios
export const GetSomeEpisode= async (e1,e2,e3,e4) => {
    const url = `https://rickandmortyapi.com/api/episode/${e1},${e2},${e3},${e4}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}




