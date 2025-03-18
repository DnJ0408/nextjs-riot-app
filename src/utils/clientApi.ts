export const fetchChampionRotaion = async () => {
  const LOCAL_SERVER = process.env.NEXT_PUBLIC_LOCAL_SERVER;
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || LOCAL_SERVER;
  const response = await fetch(`${API_BASE_URL}/api/rotation`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData?.error || 'Failed to fetch champion rotation');
  }

  const data = await response.json();

  return data;
};
