import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='container mx-auto p-4'>
      <h1 className='flex justify-center mt-6 text-xl md:text-2xl lg:text-3xl font-bold'>
        League of Legends with the Riot API
      </h1>

      <div className='flex flex-col justify-center items-center gap-6 mt-8'>
        
        <Link href={'/champions'}>
          <div className='group relative w-[300px] h-[200px] overflow-hidden rounded-lg shadow-md'>
            <Image
              className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
              src='/images/championListImage.webp'
              width={300}
              height={200}
              alt='picture of the Champion List'
            />
            <p className='absolute inset-0 flex items-center justify-center bg-black/60 text-white text-lg font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
              Champion List
            </p>
          </div>
        </Link>

        <Link href={'/rotation'}>
          <div className='group relative w-[300px] h-[200px] overflow-hidden rounded-lg shadow-md'>
            <Image
              className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
              src='/images/weeklyRotationImage.webp'
              width={300}
              height={200}
              alt='picture of the Free Champion List'
            />
            <p className='absolute inset-0 flex items-center justify-center bg-black/60 text-white text-lg font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
              Weekly Free Champions
            </p>
          </div>
        </Link>

        <Link href={'/items'}>
          <div className='group relative w-[300px] h-[200px] overflow-hidden rounded-lg shadow-md'>
            <Image
              className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
              src='/images/itemListImage.webp'
              width={300}
              height={200}
              alt='picture of the Item List'
            />
            <p className='absolute inset-0 flex items-center justify-center bg-black/60 text-white text-lg font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
              Item List
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
