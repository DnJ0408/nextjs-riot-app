import { fetchVersions } from "@/utils/commonApi";
import { fetchChampionList } from "@/utils/serverApi";
import Image from "next/image";

const champions = async () => {
  const BASE_URL = process.env.BASE_URL;
  const versions = await fetchVersions();
  const { data } = await fetchChampionList();

  const champions = Object.values(data);

  return (
    <div className="w-full min-h-screen p-4 bg-gray-800 text-white">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4">Champion List</h1>
        <div className="flex flex-wrap justify-center gap-4">
          {champions.map((champion) => (
            <li
              key={champion.id}
              className="border rounded-lg shadow-md p-4 flex flex-col items-center text-center w-56 h-72 bg-gray-900 transition-all transform hover:scale-105 hover:text-red-600"
            >
              <Image
                src={`${BASE_URL}/cdn/${versions[0]}/img/champion/${champion.image.full}`}
                alt={champion.name}
                width={120}
                height={120}
                className="mb-3 rounded-full"
              />
              <h2 className="text-2xl font-bold mt-4 mb-1">{champion.name}</h2>
              <p className="text-lg text-gray-500 overflow-hidden text-ellipsis line-clamp-2">
                {champion.title}
              </p>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default champions;
