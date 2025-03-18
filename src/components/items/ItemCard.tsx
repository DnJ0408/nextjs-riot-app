import { Item } from '@/types/Item';
import Image from 'next/image';

interface ItemCardProps {
  item: Item;
  versions: string[];
}

const ItemCard = ({ item, versions }: ItemCardProps) => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <li className='border rounded-lg shadow-md p-4 flex flex-col items-center text-center w-40 h-60 bg-gray-900'>
      <Image
        src={`${BASE_URL}/cdn/${versions[0]}/img/item/${item.image.full}`}
        alt={item.name}
        width={100}
        height={100}
        className='mb-2'
      />
      <h2 className='text-lg font-semibold'>{item.name}</h2>
      <p className='text-sm text-gray-500 overflow-hidden text-ellipsis line-clamp-3'>
        {item.plaintext}
      </p>
    </li>
  );
};

export default ItemCard;
