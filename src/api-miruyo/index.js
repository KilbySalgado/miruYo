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
