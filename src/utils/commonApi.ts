export const fetchVersions = async () => {
  const BASE_URL = process.env.BASE_URL;
  const response = await fetch(`${BASE_URL}/api/versions.json`);
  const data = await response.json();

  return data;
};
