import ChampionCard from '@/components/champions/ChampionCard';
import { Champion } from '@/types/Champion';
import { fetchVersions } from '@/utils/commonApi';
import { fetchChampionList } from '@/utils/serverApi';

const Champions = async () => {
  const versions = await fetchVersions();
  const { data }: {data: Record<string, Champion>} = await fetchChampionList();

  const champions = Object.values(data);

  return (
    <div className='w-full min-h-screen p-4 bg-gray-800 text-white'>
      <div className='container mx-auto'>
        <h1 className='text-2xl font-bold mb-4'>Champion List</h1>
        <div className='flex flex-wrap justify-center gap-4'>
          {champions.map((champion) => (
            <ChampionCard key={champion.id} champion={champion} versions={versions} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Champions;
