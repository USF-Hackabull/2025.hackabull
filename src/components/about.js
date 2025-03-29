import { Text, Title } from "./typography";

export const About = () => {
  return (
    <div
      className="w-full flex items-center justify-center bg-cover md:bg-[length:100%_100%]"
      style={{
        backgroundImage: `url('/image/backgrounds/aboutbackground.png')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        aspectRatio: "16/9",
      }}
    >
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center md:justify-center gap-8 md:gap-16">
          {/* Left side - About Us text */}
          <div className="w-full md:w-1/2 text-center md:text-left md:my-10">
            <div className="flex items-center justify-center md:justify-start">
              <img
                src="/hackabull-favicon.png"
                alt="Hackabull Logo"
                className="w-16 h-16 mr-4"
              />
              <Title>About Us</Title>
            </div>

            <Text>
              Hackabull is Tampa's largest hackathon, bringing students together
              for 24 hours of building, learning, and collaboration. Whether
              you're just getting started or have experience, this is a space
              where your ideas can take shape. Join us and bring your idea to
              life.
            </Text>

            <a
              href="#faq"
              className="md:mt-[20%] my-4 inline-block text-white font-bold py-4 px-10 rounded-lg text-lg transition-all duration-300 ease-in-out shadow-2xl border-white border-2 
             hover:bg-white hover:text-[#254017] hover:shadow-2xl hover:scale-105"
            >
              FAQ
            </a>
          </div>

          {/* Right side - Hackathon image */}
          <div className="w-full md:w-[30%] mt-10 md:mt-0">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/image/backgrounds/participants.png"
                alt="Students at Hackabull"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
