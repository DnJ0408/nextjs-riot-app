import { fetchVersions } from "@/utils/commonApi";
import { fetchItemList } from "@/utils/serverApi";
import Image from "next/image";

const BASE_URL = process.env.BASE_URL;

const items = async () => {

  const versions = await fetchVersions();
  const {data} = await fetchItemList();
  const items = Object.entries(data).map(([id, value]) => ({
    id,
    ...value,
  }));

  return (
    <div>
      <h1>Item List</h1>
      <ul>
      {items.map((item)=> 
        <li key={item.id}>
          <Image
          src={`${BASE_URL}/cdn/${versions[0]}/img/item/${item.image.full}`}
          alt={item.name}
          width={100}
          height={100}
          />
          {item.name}
          {item.plaintext}
        </li>
      )}
      </ul>
    </div>
  );
};

export default items;
