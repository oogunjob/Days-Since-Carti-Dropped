"use client";
import Album from '@/components/album'
import Footer from '@/components/footer'
import Script from 'next/script';

export default function Home() {
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
        <div className="flex flex-col w-full items-center">
          <div className="flex flex-col md:flex-row md:justify-between">
            <Album name="Playboi Carti" image="self_titled" date="2017-04-17T00:00:00.000Z" />
            <Album name="Die Lit" image="die_lit" date="2018-05-11T00:00:00.000Z" />
          </div>
          <Album name="Whole Lotta Red" image="whole_lotta_red" date="2020-12-25T00:00:00.000Z" detailed />
        </div>
        <div className="py-3 text-lg text-center font-bold">
          plaYb0i cArtI's next aLBUm _______ wILL be dR0PPiNG 1n _____ dAyS 💕💋
        </div>
        <Footer />
      </main>
    </div>
  )
}
