import { Button } from './ui/button';
// import heroBannerImg from 'figma:asset/3b18af72beb1d361403d456a15c314b6ac1fa9a9-CsluWBe2.webp';
import heroBannerImg from 'figma:asset/3b18af72beb1d361403d456a15c314b6ac1fa9a9.webp';
import newheroBannerImg from 'figma:asset/new-3b18af72beb1d361403d456a15c314b6ac1fa9a9.jpg';
// import siddhamLogo from 'figma:asset/46f7468268dc4910cc1671a5d6957250ae4f881b.png';

import isiLogo from '../assets/isi_logo.png';
import bisLogo from '../assets/bis_logo.png';


export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    // <section id="home" className="relative pt-20 bg-gradient-to-b from-slate-900 to-slate-800">
    //   <div className="relative h-[600px] lg:h-[700px] overflow-hidden">
    //     <img
    //       src={heroBannerImg}
    //       alt="Siddham Premium Stainless Steel Products"
    //       className="absolute inset-0 w-full h-full object-cover"
    //     />

    //     <div className="absolute inset-0" style={{
    //       background: "linear-gradient(90deg, rgb(0 0 0 / 20%), transparent)"
    //     }}></div>


    //     <div className="relative container mx-auto px-4 lg:px-8 h-full flex items-center">
    //       <div className="max-w-2xl text-white">

    //         <p className="text-sm lg:text-base tracking-wider mb-4 text-slate-300">
    //           A BRAND OF DEEP METAL INDUSTRIES
    //         </p>


    //         <h1 className="text-4xl lg:text-5xl xl:text-6xl mb-6 leading-tight">
    //           Engineered Stainless Steel Homeware. Trusted Quality.
    //         </h1>


    //         <p className="text-lg lg:text-xl text-slate-200 mb-10 max-w-xl">
    //           Exclusive quality home products with professional stainless steel construction.
    //         </p>


    //         <div className="flex flex-col sm:flex-row gap-4">
    //           <Button
    //             size="lg"
    //             onClick={() => scrollToSection('products')}
    //             className="bg-primary hover:bg-primary/90 px-8 py-6 text-lg"
    //           >
    //             View Products
    //           </Button>
    //           <Button
    //             size="lg"
    //             onClick={() => scrollToSection('distributor')}
    //             className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-6 text-lg"
    //           >
    //             Become a Distributor
    //           </Button>
    //         </div>
    //       </div>

    //       <div
    //         className="absolute top-0 right-8 flex items-center gap-6 mt-8 opacity-80 bg-white/75 w-fit px-5 py-[5px] rounded-md"
    //         style={{
    //           background: '#ffffffbf',
    //           width: 'fit-content',
    //           padding: '5px 20px',
    //           borderRadius: '5px'
    //         }}
    //       >
    //         <img src={isiLogo} alt="ISI Certification" className="h-12 w-auto object-contain" />
    //         <img src={bisLogo} alt="BIS Certification" className="h-12 w-auto object-contain" />
    //       </div>

    //     </div>
    //   </div>

    //   <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    // </section>



    <section
      id="home">
      <div className="pt-[95px]">
        <img
          src={newheroBannerImg}
          alt="Siddham Premium Stainless Steel Products"
          className="w-full h-auto"
        />
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </section>


  );
}