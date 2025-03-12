export const fetchChampionRotation = async () => {
  const BASE_URL = process.env.BASE_URL;
  const response = await fetch(`${BASE_URL}/api/rotation`);
  const ChampionRotation = await response.json();

  return ChampionRotation;
};