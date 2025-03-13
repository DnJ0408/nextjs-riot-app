import { fetchVersions } from '@/utils/commonApi';
import { fetchChampionList } from '@/utils/serverApi'
import Image from 'next/image';

const champions = async () => {
  const BASE_URL = process.env.BASE_URL;
  const versions = await fetchVersions();
  const {data} = await fetchChampionList();
  
  const champions = Object.values(data);
  console.log(champions[0]);
  return (
    <div>
      {champions.map((champion) => 
        <li key={champion.id}>
          <Image
          src={`${BASE_URL}/cdn/${versions[0]}/img/champion/${champion.image.full}`}
          alt={champion.name}
          width={100}
          height={100}
          className='mb-2'
          />
          <h2>{champion.name}</h2>
          <p>{champion.title}</p>
        </li>
      )}
    </div>
  )
}

export default champions
