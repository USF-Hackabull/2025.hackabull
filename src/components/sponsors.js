import React from 'react';
import { H1 } from './typography';

// Reusable SponsorLogo Component
const SponsorLogo = ({ src, alt, className, url, noPadding=false}) => {
  return (
    <a href={url} className='z-50 block w-full h-full' target="_blank" rel="noopener noreferrer">
      <div className="bg-[#6a717b] bg-opacity-60 w-full h-full aspect-video flex items-center justify-center rounded-sm">
        <img
          src={src}
          alt={alt}
          className={`max-h-[75%] max-w-[75%] object-contain transform transition duration-200 hover:scale-110 ${!noPadding && 'p-2'}`}
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
    { src: "/image/sponsors/RaymondJames.png", url: "https://www.raymondjames.com/", alt: "Raymond James" },
    { src: "/image/sponsors/Slalom.svg", url: "https://www.slalom.com/", alt: "Slalom" },
    { src: "/image/sponsors/Lithionics.png", url: "https://lithionics.com/", alt: "Lithionics" },
    { src: "/image/sponsors/CAE.png", url: "https://www.cae.com/", alt: "CAE" },
    { src: "/image/sponsors/CSE.webp", url: "https://www.usf.edu/ai-cybersecurity-computing/index.aspx", alt: "CSE" }
  ];

  return (
    <section 
      id="sponsors"
      className="relative w-full py-12 pb-16 mb-0"
      style={{
        backgroundImage: `url('/image/backgrounds/sponsorsbackground.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        marginBottom: "-1px" // Ensures seamless connection with footer
      }}
    >
      <div className="container mx-auto px-8 pb-4">
        <H1 className="text-center mb-8">Sponsors</H1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
          {allSponsors.map((sponsor, index) => (
            <div key={index} className="w-full">
              <SponsorLogo 
                src={sponsor.src} 
                url={sponsor.url} 
                alt={sponsor.alt} 
              />
            </div>
          ))}
        </div>
        
        <div className="text-center text-white text-base mt-8 pb-4">
          <p>Interested in sponsoring? <a href="mailto:sponsorship@hackabull.com" className="underline hover:text-gray-200 font-semibold">Contact us</a></p>
        </div>
      </div>
    </section>
  );
};
