import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Link from 'next/link';
import './globals.css';

const Beaufort = localFont({
  src: '../styles/fonts/BeaufortforLOL-Bold.woff2',
});

export const metadata: Metadata = {
  title: 'League of Legends Data',
  description:
    'A personal project to explore Next.js rendering patterns and routing using League of Legends data',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const NAV_LINK = 'hover:text-red-500';

  return (
    <html lang='en'>
      <body className={`${Beaufort.className} antialiased`}>
        <div className='flex flex-wrap text-sm md:text-md lg:text-lg justify-evenly items-center bg-black text-white h-14'>
          <Link className={NAV_LINK} href={'/'}>
            Home
          </Link>
          <Link className={NAV_LINK} href={'/champions'}>
            Champions
          </Link>
          <Link className={NAV_LINK} href={'/items'}>
            Item List
          </Link>
          <Link className={NAV_LINK} href={'/rotation'}>
            Champion Rotation
          </Link>
        </div>
        {children}
      </body>
    </html>
  );
}
