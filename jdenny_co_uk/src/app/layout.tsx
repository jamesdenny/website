import type { Metadata } from "next";
import { Montserrat, Lekton } from "next/font/google";
import "@/app/globals.css";
import "@/app/custom.scss";
import Image from "next/image";

import PixelRainInit from "@/components/ui/PixelRain";

const lekton = Lekton({
  weight: ["400", "700"],
  preload: true,
  subsets: ["latin"],
  variable: "--font-lekton",
  display: "swap",
});
const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800"],
  preload: true,
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "James Denny - Web Developer",
  description: "Web Developer with 18+ years commercial experience in front-end development, building large web apps and small websites in global and local teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${lekton.variable} h-full antialiased ZZZjs-active`}
      suppressHydrationWarning
    >
      <body className="
        min-h-full 
        w-full
        grid grid-cols-bleed-24 gap-x-4 md:gap-x-8 
        " suppressHydrationWarning>
          <PixelRainInit />
          <header className="
          col-full grid grid-cols-bleed-24 gap-x-4
          h-(--header-height)
          bg-primary 
          font-sans
          text-white
          selection:bg-white
          selection:text-primary
          py-3
          shadow-lg/20 shadow-black
          fixed inset-[0_0_auto_0] z-1000
          after:content-[''] 
          after:absolute 
          after:inset-[auto_0_2px_0] 
          after:border-t 
          after:border-white 
          after:h-0
          ">
          <div className="col-content">
          {/*after:content-[''] 
          after:absolute 
          after:inset-0 
          after:pointer-events-none
          after:[background:var(--overlay-bands)]
          after:inset-x-[50%_0]
          after:mix-blend-overlay
          */}
              <h1 className="text-center text-balance text-xs uppercase tracking-[0.3em]">
                  <Image className="mx-auto mb-2" src="/JamesDenny-sig.png" alt="James Denny" 
                  width={150} height={46} quality={100} />
                  Professional Web Developer
              </h1>
            {/* <nav className="hidden md:flex space-x-8 text-white text-sm font-bold uppercase tracking-widest">
              <a href="#" className="hover:text-black transition-colors">About</a>
              <a href="#" className="hover:text-black transition-colors">Projects</a>
              <a href="#" className="hover:text-black transition-colors">Skills</a>
              <a href="#" className="hover:text-black transition-colors">Contact</a>
            </nav> */}
          </div>
        </header>

        <main className="col-full subgrid bg-white my-8 selection:bg-primary selection:text-white" style={{ marginTop: 'var(--header-height)' }}>
          <div className="hidden col-content subgrid">
            <div className="col-content subgrid">
              <div className="bg-orange-300 span-1of4 inline-block text-center leading-12">1of4</div>
              <div className="bg-green-300 span-1of4 inline-block text-center leading-12">2of4</div>
              <div className="bg-blue-300 span-1of4 inline-block text-center leading-12">3of4</div>
              <div className="bg-red-300 span-1of4 inline-block text-center leading-12">4of4</div>
            </div>
            <div className="col-content subgrid">
              <div className="bg-green-600 span-1of3  inline-block text-center leading-12">1of3</div>
              <div className="bg-blue-600 span-1of3 inline-block text-center leading-12">2of3</div>
              <div className="bg-red-600 span-1of3 inline-block text-center leading-12">3of3</div>
            </div>
            <div className="col-content subgrid">
              <div className="bg-orange-900 span-1of2 text-white half1 inline-block text-center leading-12">1of2</div>
              <div className="bg-purple-900 span-1of2 text-white half2 inline-block text-center leading-12">2of2</div>
            </div>
            <div className="col-content subgrid">
              <div className="bg-green-600 span-1of3 inline-block text-center leading-12">1of3</div>
              <div className="bg-red-600 span-2of3 inline-block text-center leading-12">2-3of3</div>
            </div>
            <div className="col-content subgrid ">
              <div className="bg-red-600 span-2of3 inline-block text-center leading-12">1-2of3</div>
              <div className="bg-green-600 span-1of3 inline-block text-center leading-12">3of3</div>
            </div>
            <div className="col-content subgrid">
              <div className="bg-orange-300 span-3of4 inline-block text-center leading-12">1-3of4</div>
              <div className="bg-red-300 col-4of4 inline-block text-center leading-12">4of4</div>
            </div>
            <div className="col-content subgrid">
              <div className="bg-red-300 col-1of4 inline-block text-center leading-12">1of4</div>
              <div className="bg-orange-300 col-4of4 inline-block text-center leading-12">2-4of4</div>
            </div>
            <div className="col-content subgrid">
              <div className="bg-purple-900 from-2of4 to-3of4 text-white  inline-block text-center leading-12">2-3of4</div>
            </div>
          </div>
            {children}
        </main>

        <footer className="
          col-full subgrid 
          bg-primary 
          font-sans 
          py-6 
          shadow-lg/20 shadow-black shadow-up
          relative
          after:content-[''] 
          after:absolute 
          after:inset-[2px_0_auto_0] 
          after:border-t 
          after:border-white 
          after:h-0
          ">
          <div className="col-content text-center">
            <Image className="mx-auto" src="/JD.png" alt="James Denny" width={48} height={48} quality={100} />
            {/* <p className="text-cyan-100 text-xs uppercase tracking-[0.3em] mt-1">James Denny</p> */}
          </div>
        </footer>
        
      </body>
    </html>
  );
}
