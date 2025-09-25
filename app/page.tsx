"use client"
import Album from '@/components/album';
import CountUpTimer from '@/components/countuptimer';
import Footer from '@/components/footer';
import Script from 'next/script';
import { useState } from 'react';

export default function Home() {
  const [isAlbum, setIsAlbum] = useState<boolean>(true);

  const albums = [
    {
      title: "Playboi Carti",
      release_date: "2017-04-17T00:00:00.000Z",
      image: "self_titled.jpg",
    },
    {
      title: "Die Lit",
      release_date: "2018-05-11T00:00:00.000Z",
      image: "die_lit.jpg",
    },
    {
      title: "Whole Lotta Red",
      release_date: "2020-12-25T00:00:00.000Z",
      image: "whole_lotta_red.jpg",
    },
    {
      title: "MUSIC",
      release_date: "2025-03-14T00:00:00.000Z",
      image: "music.jpg",
    },
  ];

  const singles_features = [
  {
    "title": "Fire Your Manager",
    "release_date": "2025-07-25T00:00:00.000Z",
    "image": "https://i1.sndcdn.com/artworks-RJAzqbUriFbB-0-t500x500.jpg"
  },
  {
    "title": "UNLIMITED",
    "release_date": "2025-03-28T00:00:00.000Z",
    "image": "https://i1.sndcdn.com/artworks-2uCnDCGqKL4x-0-t500x500.jpg"
  },
  {
    "title": "Blick Sum",
    "release_date": "2025-01-28T00:00:00.000Z",
    "image": "https://i1.sndcdn.com/artworks-H3TeXTi1nBPa2yCK-uUYwUA-t500x500.png"
  },
  {
    "title": "All Red",
    "release_date": "2024-09-13T00:00:00.000Z",
    "image": "https://i.scdn.co/image/ab67616d0000b273ca15942c726ec9c39796435e"
  },
  {
    "title": "Field Trip",
    "release_date": "2024-08-02T00:00:00.000Z",
    "image": "https://i.scdn.co/image/ab67616d0000b273445e7de7cb6abdaafd6ffb76"
  },
  {
    "title": "I Luv It",
    "release_date": "2024-03-15T00:00:00.000Z",
    "image": "https://cdn-images.dzcdn.net/images/cover/a9237e8ba6402e4373522f72f4c57ea5/1900x1900-000000-80-0-0.jpg"
  },
  {
    "title": "Type Shit",
    "release_date": "2024-03-08T00:00:00.000Z",
    "image": "https://i.scdn.co/image/ab67616d0000b2731729574fe2a8e391a2ce1ece"
  },
  {
    "title": "Carnival",
    "release_date": "2024-02-10T00:00:00.000Z",
    "image": "https://i1.sndcdn.com/artworks-rVQTluKMt3jCODfH-rgLrFA-t1080x1080.jpg"
  },
  {
    "title": "Timeless",
    "release_date": "2023-09-08T00:00:00.000Z",
    "image": "https://i.scdn.co/image/ab67616d0000b27358cd6595ed970f6862906ab8"
  },
  {
    "title": "FE!N",
    "release_date": "2023-07-28T00:00:00.000Z",
    "image": "singles/utopia.png"
  },
  {
    "title": "Popular",
    "release_date": "2023-06-02T00:00:00.000Z",
    "image": "singles/popular.jpeg"
  },
  {
    "title": "Junya Pt 2",
    "release_date": "2021-08-29T00:00:00.000Z",
    "image": "https://i.scdn.co/image/ab67616d0000b273cad190f1a73c024e5a40dddd"
  },
  {
    "title": "Junya",
    "release_date": "2021-08-29T00:00:00.000Z",
    "image": "https://i.scdn.co/image/ab67616d0000b273cad190f1a73c024e5a40dddd"
  },
  {
    "title": "Off the Grid",
    "release_date": "2021-08-29T00:00:00.000Z",
    "image": "https://cdn.mp3poolonline.com/uploads/images/track/216211/file_cover/216211_origin.png"
  },
  {
    "title": "Unlock It",
    "release_date": "2021-08-19T00:00:00.000Z",
    "image": "singles/unlock_it.png"
  },
  {
    "title": "Switching Lanes",
    "release_date": "2021-06-11T00:00:00.000Z",
    "image": "https://i1.sndcdn.com/artworks-Lcp07rRh6SiL-0-t500x500.jpg"
  },
  {
    "title": "Miss the Rage",
    "release_date": "2021-05-07T00:00:00.000Z",
    "image": "singles/miss_the_rage.png"
  },
  {
    "title": "Flex Up",
    "release_date": "2020-11-27T00:00:00.000Z",
    "image": "https://i1.sndcdn.com/artworks-GNZwkwA6VN1T-0-t500x500.jpg"
  },
  {
    "title": "Pain 1993",
    "release_date": "2020-05-01T00:00:00.000Z",
    "image": "singles/pain1993.jpg"
  },
  {
    "title": "@ MEH",
    "release_date": "2020-04-16T00:00:00.000Z",
    "image": "singles/atmeh.jpg"
  }
];

  return (
    <div>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-CR93WR1B7Z" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-CR93WR1B7Z');
        `}
      </Script>
      <main className="flex min-h-screen flex-col items-center justify-between p-10 text-white">
        <h1 className="text-center text-xl font-bold">
          daYS sINce carTI dr0PP3D !
        </h1>

        {/* Album or Single/Feature Selection */}
        <div className="text-lg font-bold">
          <button className="py-2 px-4 m-2 bg-black rounded-lg hover:bg-gray-700" onClick={() => setIsAlbum(true)}>Album</button>
          <button className="py-2 px-4 m-2 bg-black rounded-lg hover:bg-gray-700" onClick={() => setIsAlbum(false)}>Single/Feature</button>
        </div>

        {isAlbum ? (
          <div>
            <div className="mb-4 text-center text-lg font-bold">Albums</div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {albums.map((album, index) => (
                <div key={index}>
                  <Album name={album.title} image={album.image} date={album.release_date} />
                </div>
              ))}
            </div>
            <div className="py-3 text-lg text-center font-bold">
              plaYb0i cArtI's n3xT aLBUm BABY BOI wILL bE dR0PPiNG 1n <CountUpTimer startDate={"2025-12-25T19:00:00.000-05:00"} /> 💕💋
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-4 text-center text-lg font-bold">Singles/Features since 2020</div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {singles_features.map((single_feature, index) => (
                <div key={index}>
                  <Album name={single_feature.title} image={single_feature.image} date={single_feature.release_date} />
                </div>
              ))}
            </div>
          </div>
        )}
        <Footer />
      </main>
    </div>
  );
}
