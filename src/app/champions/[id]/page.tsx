import ChampionDetailCard from '@/components/champions/ChampionDetailCard';
import { ChampionDetail } from '@/types/Champion';
import { fetchVersions } from '@/utils/commonApi';
import { fetchChampionDetails } from '@/utils/serverApi';

interface ChampionDetailsProps {
  params: {id: string};
}

const ChampionDetails = async ({ params }: ChampionDetailsProps) => {
  const { id } = params;
  const versions = await fetchVersions();
  
  const { data } = await fetchChampionDetails(id);

  const champion = Object.values(data) as ChampionDetail[];

  return (
    <div className='w-full min-h-screen p-4 bg-gray-800 text-white'>
      <div className='container mx-auto'>
        <h1 className='text-2xl font-bold mb-6'>Champion Details</h1>
        <div className='flex flex-wrap justify-center gap-6'>
          {champion.map((champion) => (
            <ChampionDetailCard key={champion.id} champion={champion} versions={versions} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChampionDetails;