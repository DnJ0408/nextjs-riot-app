import { fetchVersions } from "@/utils/commonApi";
import { fetchItemList } from "@/utils/serverApi";
import Image from "next/image";

const BASE_URL = process.env.BASE_URL;

const items = async () => {
  const versions = await fetchVersions();
  const { data } = await fetchItemList();
  const items = Object.entries(data).map(([id, value]) => ({
    id,
    ...value,
  }));

  return (
    <div className="w-full min-h-screen p-4 bg-gray-800 text-white">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4">Item List</h1>
        <div className="flex flex-wrap justify-center gap-4">
          {items.map((item) => (
            <li
              key={item.id}
              className="border rounded-lg shadow-md p-4 flex flex-col items-center text-center w-40 h-60 bg-gray-900"
            >
              <Image
                src={`${BASE_URL}/cdn/${versions[0]}/img/item/${item.image.full}`}
                alt={item.name}
                width={100}
                height={100}
                className="mb-2"
              />
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-sm text-gray-500 overflow-hidden text-ellipsis line-clamp-3">{item.plaintext}</p>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default items;
