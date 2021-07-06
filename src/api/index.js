//Se trae 15 animes ordenados por el id en orden Ascendente
export const AnimeApis = async () => {
  try {
    const endpoint = `https://api.jikan.moe/v3/search/anime?q=&order_by=id&sort=asc&limit=15`;
    const response = await fetch(endpoint);
    const data = await response.json();
    return data.results;
  } catch (error) {
    return console.log(error);
  }
};

//Se trae el anime segun presione el usuario
export const GetAnime = async (id) => {
  try {
    const endpoint = `https://api.jikan.moe/v3/anime/${id}`;
    const response = await fetch(endpoint);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

//Se busca el anime en tiempo real
export const SearchAnime = async (animeName) => {
  try {
    const endpoint = `https://api.jikan.moe/v3/search/anime?q=${animeName}`;
    const response = await fetch(endpoint);
    const data = await response.json();

    return data.results;
  } catch (error) {
    console.log(error);
  }
};

// Se busca el anime por top
export const AnimeTop = async () => {
  try {
    const endpoint = `https://api.jikan.moe/v3/search/anime?q=&order_by=members&sort=desc&page=1&limit=10`;
    const response = await fetch(endpoint);
    const data = await response.json();
    return data.results;
  } catch (error) {
    return console.log(error);
  }
};
