'use client';

import ChampionCard from '@/components/champions/ChampionCard';
import { Champion } from '@/types/Champion';
import { fetchChampionRotaion } from '@/utils/clientApi';
import { fetchVersions } from '@/utils/commonApi';
import { useEffect, useState } from 'react';

const ChampionRotation = () => {
  const [champions, setChampions] = useState<Champion[]>([]);
  const [versions, setVersions] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [championsData, versionsData]: [Champion[], string[]] = await Promise.all([
          fetchChampionRotaion(),
          fetchVersions(),
        ]);
        setChampions(championsData);
        setVersions(versionsData);
      } catch (e) {
        console.error('failed to fetch champion rotation', e);
      }
    };

    fetchData();
  }, []);

  console.log(champions);

  return (
    <div className='w-full min-h-screen p-4 bg-gray-800 text-white'>
      <div className='container mx-auto'>
        <h1 className='text-2xl font-bold mb-4'>Free Champion List</h1>
        <div className='flex flex-wrap justify-center gap-4'>
          {champions.map((champion) => (
            <ChampionCard key={champion.id} champion={champion} versions={versions} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChampionRotation;
