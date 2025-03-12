export const fetchChampionRotation = async () => {
  const BASE_URL = process.env.BASE_URL;
  const response = await fetch(`${BASE_URL}/api/rotation`);
  const data = await response.json();

  return data;
};