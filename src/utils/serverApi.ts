import { fetchVersions } from "./commonApi";

const BASE_URL = process.env.BASE_URL;

// Static Site Generation
export const fetchItemList = async () => {
  const versions = await fetchVersions();
  const response = await fetch(
    `${BASE_URL}/cdn/${versions[0]}/data/en_US/item.json`
  );
  const itemList = await response.json();

  if (!response.ok) throw new Error(`HTTP request error:${response.status}`);

  return itemList;
};

// Incremental Static Regeneration
export const fetchChampionList = async () => {
  const versions = await fetchVersions();
  const response = await fetch(
    `${BASE_URL}/cdn/${versions[0]}/data/en_US/champion.json`,
    {
      next: { revalidate: 86400 },
    }
  );
  const championList= await response.json();

  if (!response.ok) throw new Error(`HTTP request error:${response.status}`);

  return championList;
};

export const fetchChampionDetails = async () => {
  const versions = await fetchVersions();
  const response = await fetch(
    `${BASE_URL}/cdn/${versions[0]}/data/en_US/champion.json`,
    {
      cache: "no-store",
    }
  );
  const championDetails= await response.json();

  if (!response.ok) throw new Error(`HTTP request error:${response.status}`);
  
  return championDetails;
};