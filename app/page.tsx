"use client"
import Album from '@/components/album';
import Footer from '@/components/footer';
import Script from 'next/script';
import { useState } from 'react';

export default function Home() {
  const [isAlbum, setIsAlbum] = useState<boolean>(true);

  const singles_features = [
    {
      title: "FE!N",
      release_date: "2023-07-28T00:00:00.000Z",
      image: "singles/utopia.png",
    },
    {
      title: "Popular",
      release_date: "2023-06-02T00:00:00.000Z",
      image: "singles/popular.jpeg",
    },
    {
      title: "Unlock It",
      release_date: "2021-08-19T00:00:00.000Z",
      image: "singles/unlock_it.png",
    },
    {
      title: "Miss the Rage",
      release_date: "2021-05-07T00:00:00.000Z",
      image: "singles/miss_the_rage.png",
    },
    {
      title: "Pain 1993",
      release_date: "2020-05-01T00:00:00.000Z",
      image: "singles/pain1993.jpg",
    },
    {
      title: "@ MEH",
      release_date: "2020-04-16T00:00:00.000Z",
      image: "singles/atmeh.jpg",
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
            <div className="flex flex-col w-full items-center">
              <div className="flex flex-col md:flex-row md:justify-between">
                <Album name="Playboi Carti" image="self_titled.jpg" date="2017-04-17T00:00:00.000Z" />
                <Album name="Die Lit" image="die_lit.jpg" date="2018-05-11T00:00:00.000Z" />
              </div>
              <Album name="Whole Lotta Red" image="whole_lotta_red.jpg" date="2020-12-25T00:00:00.000Z" detailed />
            </div>
            <div className="py-3 text-lg text-center font-bold">
              plaYb0i cArtI's n3xT aLBUm _______ wILL bE dR0PPiNG 1n _____ dAyS 💕💋
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-4 text-center text-lg font-bold">Singles/Features since 2020</div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {singles_features.map((single_feature, index) => {
                return (
                  <div key={index}>
                    <Album name={single_feature.title} image={single_feature.image} date={single_feature.release_date} />
                  </div>
                );
              })}
            </div>
          </div>
        )}
        <Footer />
      </main>
    </div>
  );
}
