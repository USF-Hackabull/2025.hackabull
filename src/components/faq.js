import { GENERAL_QUESTIONS, LOGISTICS_QUESTIONS } from "../consts";
import Accordion from "./accordion";
import { Title } from "./typography";

export const FAQ = () => {
  return (
    <div
      className="relative w-full py-16 bg-cover md:bg-[length:100%_100%]"
      style={{
        backgroundImage: `url('/image/backgrounds/faqbackground.png')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 relative">
        <Title className="text-center">FAQ</Title>

        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 max-w-6xl mx-auto mb-12 relative z-20 mt-[17dvh] md:mt-12">
          <div className="w-full md:w-1/2 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-6">
            <h2 className="text-center mb-6 text-[#254017] text-2xl md:text-3xl font-quicksand font-bold tracking-wide">
              General
            </h2>
            <Accordion
              items={GENERAL_QUESTIONS.map((question) => ({
                title: question.title,
                content: question.content,
              }))}
            />
          </div>

          <div className="w-full md:w-1/2 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-6">
            <h2 className="text-center mb-6 text-[#254017] text-2xl md:text-3xl font-quicksand font-bold tracking-wide">
              Logistics
            </h2>
            <Accordion
              items={LOGISTICS_QUESTIONS.map((question) => ({
                title: question.title,
                content: question.content,
              }))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const MusicNotes = () => (
  <div className="pointer-events-none absolute top-0 left-0 opacity-25">
    <img
      src="/images/MusicNote.svg"
      alt="Music Note"
      className="w-6 absolute left-[5%] top-[5%]"
    />
    <img
      src="/images/MusicNote.svg"
      alt="Music Note"
      className="w-4 absolute right-[5%] top-[10%]"
    />
    <img
      src="/images/MusicNote.svg"
      alt="Music Note"
      className="w-8 absolute left-[10%] bottom-[10%]"
    />
  </div>
);
