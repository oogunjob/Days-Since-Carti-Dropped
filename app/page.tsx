"use client";
import Album from '@/components/album'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 text-white">
      <h1 className="text-center text-xl font-bold">
        daYS sINce carTI dr0PP3D !
      </h1>
      <div className="flex flex-col w-full items-center">
        <div className="flex flex-col md:flex-row md:justify-between">
          <Album name="Playboi Carti" image="self_titled" date="04-17-2017" />
          <Album name="Die Lit" image="die_lit" date="05-11-2018" />
        </div>
        <Album name="Whole Lotta Red" image="whole_lotta_red" date="12-25-2020" detailed />
      </div>

      <div className="py-3 text-lg text-center font-bold">
        plaYb0i cArtI's next aLBUm _______ wILL be dR0PPiNG 1n _______ dAyS 💕💋
      </div>
      <Footer />
    </main>
  )
}
