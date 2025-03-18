import { ChampionDetail } from '@/types/Champion';
import { fetchChampionIdsForRotation } from '@/utils/commonApi';

import { fetchChampionList } from '@/utils/serverApi';
import { NextResponse } from 'next/server';

export async function GET() {
  const { data: rotationData, response } = await fetchChampionIdsForRotation();
  const { freeChampionIds } = rotationData;

  const { data } = await fetchChampionList();
  const champions = Object.values(data) as ChampionDetail[];

  const freeChampions = champions.filter((champion) =>
    freeChampionIds.includes(Number(champion.key))
  );

  if (!response.ok) {
    return NextResponse.json(
      { error: 'fail to fetch champion rotation' },
      { status: response.status }
    );
  }

  return NextResponse.json(freeChampions, { status: 200 });
}
