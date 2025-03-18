export const fetchChampionRotaion = async () => {
  const LOCAL_SERVER = process.env.NEXT_PUBLIC_LOCAL_SERVER
  const response = await fetch(`${LOCAL_SERVER}/api/rotation`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData?.error || 'Failed to fetch champion rotation');
  }

  const data = await response.json();

  return data;
};
