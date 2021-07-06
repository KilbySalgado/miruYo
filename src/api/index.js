export const AnimeApis = async (anime) => {
  try {
    const endpoint = `https://api.jikan.moe/v3/search/anime?q=${anime}`;
    const response = await fetch(endpoint);
    const data = await response.json();
    return data.results;
  } catch (error) {
    return console.log(error);
  }
};
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
export const AnimeGender = async (gender) => {
  try {
    const endpoint = `https://api.jikan.moe/v3/search/anime?q=&page=1&genre=${gender}&order_by=start_date&sort=desc`;
    const response = await fetch(endpoint);
    const data = await response.json();
    return data.results;
  } catch (error) {
    return console.log(error);
  }
};
export const searchAnime = async (anime) => {
  try {
    const endpoint = `https://api.jikan.moe/v3/search/anime?q=${anime}`;
    const response = await fetch(endpoint);
    const data = await response.json();
    return data.results;
  } catch (error) {
    return console.log(error);
  }
};