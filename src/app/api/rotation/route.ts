import { fetchChampionRotation } from '@/utils/clientApi';
import { fetchChampionList } from '@/utils/serverApi';
import { NextResponse } from 'next/server';

export async function GET() {
  const { data: rotationData, response } = await fetchChampionRotation();
  const { freeChampionIds } = rotationData;

  const { data } = await fetchChampionList();
  const champions = Object.values(data);

  const freeChampions = champions.filter((champion) =>
    freeChampionIds.includes(Number(champion.key))
  );

  console.log(freeChampions);

  if (!response.ok) {
    return NextResponse.json(
      { error: 'fail to fetch champion rotation' },
      { status: response.status }
    );
  }

  return NextResponse.json(freeChampions, { status: 200 });
}
