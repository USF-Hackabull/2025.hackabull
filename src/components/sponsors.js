import React from 'react';
import { H1 } from './typography';

// Reusable SponsorLogo Component
const SponsorLogo = ({ src, alt, className, url, noPadding=false}) => {
  return (
    <a href={url} className='z-50 block w-full h-full' target="_blank" rel="noopener noreferrer">
      <div className="bg-[#6a717b] bg-opacity-60 w-full h-full aspect-video flex items-center justify-center rounded-sm shadow-md">
        <img
          src={src}
          alt={alt}
          className={`max-h-[75%] max-w-[75%] object-contain transform transition duration-300 hover:scale-110 ${!noPadding && 'p-2'}`}
        />
      </div>
    </a>
  );
};

export const Sponsors = () => {
  // Define all sponsors in a single array for consistent handling
  const allSponsors = [
    { src: "/image/sponsors/Pfizer.png", url: "https://www.pfizer.com/about", alt: "Pfizer" },
    { src: "/image/sponsors/Amazon.png", url: "https://www.amazon.com/", alt: "Amazon" },
    { src: "/image/sponsors/MLH_Hacking.png", url: "https://mlh.io/", alt: "MLH" },
    { src: "/image/sponsors/JohnsonAndJohnson.png", url: "https://www.jnj.com/", alt: "Johnson and Johnson" },
    { src: "/image/sponsors/NextEraEnergy.png", url: "https://www.nexteraenergy.com/", alt: "NextEra Energy" },
    { src: "/image/sponsors/StandOutStickers.png", url: "https://www.standoutstickers.com/", alt: "StandOutStickers" },
    { src: "/image/sponsors/Mosaic.svg", url: "https://www.mosaic.com/", alt: "Mosaic" },
    { src: "/image/sponsors/SolusCode.png", url: "https://www.soluscode.com/", alt: "SolusCode" },
    { src: "/image/sponsors/RaymondJames.png", url: "https://www.raymondjames.com/", alt: "Raymond James" },
    { src: "/image/sponsors/Slalom.svg", url: "https://www.slalom.com/", alt: "Slalom" },
    { src: "/image/sponsors/Lithionics.png", url: "https://lithionics.com/", alt: "Lithionics" },
    { src: "/image/sponsors/CAE.png", url: "https://www.cae.com/", alt: "CAE" },
    { src: "/image/sponsors/CSE.webp", url: "https://www.usf.edu/ai-cybersecurity-computing/index.aspx", alt: "CSE" }
  ];

  return (
    <div 
      className="w-full bg-gradient-to-b from-green-800/60 to-gray-900/90 py-16 pb-20"
      style={{
        backgroundImage: `url('/image/backgrounds/sponsorsbackground.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <H1 className="text-center mb-10">Sponsors</H1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {allSponsors.map((sponsor, index) => (
            <div key={index} className="w-full p-2">
              <SponsorLogo 
                src={sponsor.src} 
                url={sponsor.url} 
                alt={sponsor.alt} 
              />
            </div>
          ))}
        </div>
        
        <div className="text-center text-white mt-12 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-3">Interested in sponsoring?</h3>
          <p className="mb-4">Join our roster of sponsors and support the next generation of innovators.</p>
          <a 
            href="mailto:shpe.hackabull@gmail.com" 
            className="inline-block px-6 py-2 bg-green-700/50 hover:bg-green-700/70 transition-colors rounded-md text-white font-semibold"
          >
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
};
