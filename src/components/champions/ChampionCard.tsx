import { Champion } from '@/types/Champion';
import Image from 'next/image';
import Link from 'next/link';

interface ChampionCardProps {
  champion: Champion;
  versions: string[];
}

const ChampionCard = ({ champion, versions }: ChampionCardProps) => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  return (
    <Link href={`/champions/${champion.id}`}>
      <li className='border rounded-lg shadow-md p-4 flex flex-col items-center text-center w-56 h-72 bg-gray-900 transition-all transform hover:scale-105 hover:text-red-600 cursor-pointer'>
        <Image
          src={`${BASE_URL}/cdn/${versions[0]}/img/champion/${champion.image.full}`}
          alt={champion.name}
          width={120}
          height={120}
          className='mb-3 rounded-full'
        />
        <h2 className='text-2xl font-bold mt-4 mb-1'>{champion.name}</h2>
        <p className='text-lg text-gray-500 overflow-hidden text-ellipsis line-clamp-2'>
          {champion.title}
        </p>
      </li>
    </Link>
  );
};

export default ChampionCard;
