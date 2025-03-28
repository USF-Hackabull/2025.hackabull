import { Text, Title } from "./typography";

export const About = () => {
  return (
    <div
      className="w-full h-auto max-h-auto flex flex-col md:flex-row items-center justify-center md:justify-evenly"
      style={{
        backgroundImage: `url('/image/backgrounds/aboutbackground.png')`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        aspectRatio: "16/9",
      }}
    >
      <div className="md:w-1/2 text-left mx-4">
        <Title>About Us</Title>
        <Text>
          Hackabull is Tampa’s largest hackathon, bringing students together for
          24 hours of building, learning, and collaboration. Whether you're just
          getting started or have experience, this is a space where your ideas
          can take shape. Join us and bring your idea to life.
        </Text>
      </div>
    </div>
  );
};
