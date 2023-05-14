const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  
  export const GetAllCharacters = async (numberPage) => {
    const url = `https://rickandmortyapi.com/api/character?page=${numberPage}`;
    return fetchData(url);
  };
  
  export const GetCharacterFilter = async (id) => {
    const url = 'https://rickandmortyapi.com/api/character/' + id;
    return fetchData(url);
  };
  
  export const GetSomeCharacter = async (c1, c2, c3, c4) => {
    const url = `https://rickandmortyapi.com/api/character/${c1},${c2},${c3},${c4}`;
    return fetchData(url);
  };
  
  export const GetCharacterForName = async (name) => {
    const url = `https://rickandmortyapi.com/api/character/?name=${name}`;
    return fetchData(url);
  };

  
  
  export const GetAllLocation = async () => {
    const url = `https://rickandmortyapi.com/api/location`;
    return fetchData(url);
  };
  
  export const GetLocationFilter = async (idLocation) => {
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`;
    return fetchData(url);
  };
  
  export const GetSomeLocation = async (l1, l2, l3, l4) => {
    const url = `https://rickandmortyapi.com/api/location/${l1},${l2},${l3},${l4}`;
    return fetchData(url);
  };
  
  export const GetAllEpisode = async () => {
    const url = `https://rickandmortyapi.com/api/episode`;
    return fetchData(url);
  };
  
  export const GetEpisodeFilter = async (idEpisode) => {
    const url = `https://rickandmortyapi.com/api/episode/${idEpisode}`;
    return fetchData(url);
  };
  
  export const GetSomeEpisode = async (e1, e2, e3, e4) => {
    const url = `https://rickandmortyapi.com/api/episode/${e1},${e2},${e3},${e4}`;
    return fetchData(url);
  };
  