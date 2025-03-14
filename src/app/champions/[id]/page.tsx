import { fetchVersions } from '@/utils/commonApi';
import { fetchChampionDetails } from '@/utils/serverApi';
import Image from 'next/image';

const ChampionDetails = async ({ params }) => {
  const { id } = params;
  const BASE_URL = process.env.BASE_URL;
  const versions = await fetchVersions();
  const { data } = await fetchChampionDetails(id);

  const champion = Object.values(data);
  
  return (
    <div className='w-full min-h-screen p-4 bg-gray-800 text-white'>
      <div className='container mx-auto'>
        <h1 className='text-2xl font-bold mb-6'>Champion Details</h1>
        <div className='flex flex-wrap justify-center gap-6'>
          {champion.map((champion) => (
            <div
              key={champion.id}
              className='w-full max-w-xs bg-gray-900 p-6 rounded-lg shadow-lg'
            >
              <h2 className='text-3xl font-semibold mb-2 text-red-600'>
                {champion.name}
              </h2>
              <p className='text-gray-400 mb-4'>{champion.title}</p>
              <div className='flex justify-center mb-4'>
                <Image
                  src={`${BASE_URL}/cdn/${versions[0]}/img/champion/${champion.image.full}`}
                  alt={champion.name}
                  width={120}
                  height={120}
                  className='rounded-full'
                />
              </div>
              <p className='text-sm text-gray-400 mb-4'>{champion.lore}</p>
              <h3 className='text-xl text-center font-semibold mb-2 text-gray-300'>Stats</h3>
              <ul className='space-y-2 text-sm text-gray-400'>
                <li>
                  <strong className='font-semibold text-gray-200'>
                    Attack:
                  </strong>{' '}
                  {champion.info.attack}
                </li>
                <li>
                  <strong className='font-semibold text-gray-200'>
                    Defense:
                  </strong>{' '}
                  {champion.info.defense}
                </li>
                <li>
                  <strong className='font-semibold text-gray-200'>
                    Magic:
                  </strong>{' '}
                  {champion.info.magic}
                </li>
                <li>
                  <strong className='font-semibold text-gray-200'>
                    Difficulty:
                  </strong>{' '}
                  {champion.info.difficulty}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChampionDetails;