export const fetchVersions = async () => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const response = await fetch(`${BASE_URL}/api/versions.json`);
  const data = await response.json();

  return data;
};

export const fetchChampionIdsForRotation = async () => {
  const response = await fetch(
    'https://kr.api.riotgames.com/lol/platform/v3/champion-rotations',
    {
      headers: {
        'Content-Type': 'application/json',
        'X-Riot-Token': `${process.env.RIOT_API_KEY}`,
      },
    }
  );
  const data = await response.json();

  return { data, response };
};