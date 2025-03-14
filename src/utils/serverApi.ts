import { fetchVersions } from './commonApi';

const BASE_URL = process.env.BASE_URL;

export const fetchItemList = async () => {
  const versions = await fetchVersions();
  const response = await fetch(
    `${BASE_URL}/cdn/${versions[0]}/data/en_US/item.json`
  );

  const data = await response.json();

  if (!response.ok) throw new Error(`HTTP request error:${response.status}`);

  return data;
};

export const fetchChampionList = async () => {
  const versions = await fetchVersions();
  const response = await fetch(
    `${BASE_URL}/cdn/${versions[0]}/data/en_US/champion.json`,
    {
      next: { revalidate: 86400 },
    }
  );

  const data = await response.json();

  if (!response.ok) throw new Error(`HTTP request error:${response.status}`);

  return data;
};

export const fetchChampionDetails = async (id) => {
  const versions = await fetchVersions();
  const response = await fetch(
    `${BASE_URL}/cdn/${versions[0]}/data/en_US/champion/${id}.json`,
    {
      cache: 'no-store',
    }
  );
  const data = await response.json();

  if (!response.ok) throw new Error(`HTTP request error:${response.status}`);

  return data;
};
