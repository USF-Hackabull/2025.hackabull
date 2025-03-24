import "./App.css";
import { Navbar } from "./components/navbar";
import { Home } from "./components/home";
import { About } from "./components/about";
import { Tracks } from "./components/tracks";
import { Schedule } from "./components/schedule";
import { FAQ } from "./components/faq";
import { Sponsors } from "./components/sponsors";
import { Speaker } from "./components/speaker";
import { Backdrop } from "./components/backdrop";
import { Billboard } from "./components/test";

function App() {
  return (
    <>
      <a
        id="mlh-trust-badge"
        style={{
          display: "block",
          maxWidth: "100px",
          minWidth: "60px",
          position: "absolute",
          left: "10px",
          top: "0",
          width: "10%",
          zIndex: 10000,
        }}
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=white"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-white.svg"
          alt="Major League Hacking 2025 Hackathon Season"
          style={{ width: "100%" }}
        />
      </a>

      <Navbar />

      <Home />

      <section id="about">
        <About />
      </section>

      <section id="tracks">
        <Tracks />
      </section>

      <section id="speaker">
        <Speaker />
      </section>

      <section id="schedule">
        <Schedule />
      </section>

      <section id="faq">
        <FAQ />
      </section>

      <section id="sponsors">
        <Sponsors />
      </section>

      <div className="h-[20vw] flex justify-center">
        <h1 className="absolute bottom-10 text-white text-[2vw] z-50">
          Special thanks to HackDuke for providing the template! ❤️{" "}
        </h1>
      </div>
    </>
  );
}

export default App;
