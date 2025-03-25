export const About = () => {
  return (
    <div
      className="w-full h-screen max-h-auto flex flex-col md:flex-row items-center justify-center md:justify-evenly"
      style={{
        backgroundImage: `url('/image/backgrounds/aboutbackground.png')`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">About Us</h1>
        <p className="text-lg text-gray-700">
          Welcome to Hackabull! We are a community of passionate developers,
          designers, and innovators coming together to create impactful
          projects. Our mission is to foster creativity, collaboration, and
          learning through technology.
        </p>
      </div>
    </div>
  );
};
