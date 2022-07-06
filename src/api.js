export const getPokemon = async (url) => {
  try {
    let pok = await fetch(url).then((res) => res.json());
    return pok;
  } catch (error) {}
};
