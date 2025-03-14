import { fetchVersions } from '@/utils/commonApi';
import { fetchChampionDetails } from '@/utils/serverApi';
import Image from 'next/image';

const ChampionDetails = async ({ params }) => {
  const { id } = params;
  const BASE_URL = process.env.BASE_URL;
  const versions = await fetchVersions();
  const { data } = await fetchChampionDetails(id);

  const champion = Object.values(data);
  console.log(champion);

  return (
    <div>
      <ul>
        {champion.map((champion) => (
          <li key={champion.id}>
            <h2>{champion.name}</h2>
            <p>{champion.title}</p>
            <Image
              src={`${BASE_URL}/cdn/${versions[0]}/img/champion/${champion.image.full}`}
              alt={champion.name}
              width={120}
              height={120}
              className='mb-3 rounded-full'
            />
            <h3>{champion.lore}</h3>
            <h3>Stats</h3>
            <ul>
              <li>
                <strong>Attack:</strong> {champion.info.attack}
              </li>
              <li>
                <strong>Defense:</strong> {champion.info.defense}
              </li>
              <li>
                <strong>Magic:</strong> {champion.info.magic}
              </li>
              <li>
                <strong>Difficulty:</strong> {champion.info.difficulty}
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChampionDetails;
