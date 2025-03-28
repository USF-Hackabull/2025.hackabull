import { Text, Title } from "./typography";

export const About = () => {
  return (
    <div
      className="w-full min-h-auto flex items-center justify-center"
      style={{
        backgroundImage: `url('/image/backgrounds/aboutbackground.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        aspectRatio: "16/9",
      }}
    >
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Left side - About Us text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="flex items-center mb-8 justify-center md:justify-start">
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
              className="my-4 inline-block bg-green-600 text-white font-bold py-4 px-10 rounded-lg text-lg transition-all duration-300 ease-in-out shadow-md 
             hover:bg-white hover:text-[#254017] hover:shadow-lg hover:scale-105"
            >
              FAQ
            </a>
          </div>

          {/* Right side - Hackathon image */}
          <div className="w-full md:w-1/2 mt-10 md:mt-0">
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
