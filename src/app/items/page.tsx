import ItemCard from '@/components/items/ItemCard';
import { Item } from '@/types/Item';
import { fetchVersions } from '@/utils/commonApi';
import { fetchItemList } from '@/utils/serverApi';

const Items = async () => {
  const versions = await fetchVersions();
  const { data }: { data: Record<string, Item> } = await fetchItemList();

  const items = Object.entries(data).map(([id, value]: [string, Item]) => ({
    id,
    ...value,
  }));

  return (
    <div className='w-full min-h-screen p-4 bg-gray-800 text-white'>
      <div className='container mx-auto'>
        <h1 className='text-2xl font-bold mb-4'>Item List</h1>
        <div className='flex flex-wrap justify-center gap-4'>
          {items.map((item) => (
            <ItemCard key={item.id} item={item} versions={versions} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Items;
