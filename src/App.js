import "./App.css";
import { Navbar } from "./components/navbar";
import { Home } from "./components/home";
import { About } from "./components/about";
import { Tracks } from "./components/tracks";
import { FAQ } from "./components/faq";
import { Sponsors } from "./components/sponsors";
import { Speaker } from "./components/speaker";
import { Footer } from "./components/footer";

function App() {
  return (
    <>
      <a
        id="mlh-trust-badge"
        className="block max-w-[100px] min-w-[60px] absolute left-2 top-0 w-[10%] z-[10000]"
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=white"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-white.svg"
          alt="Major League Hacking 2025 Hackathon Season"
          className="w-full"
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

      <section id="faq">
        <FAQ />
      </section>

      <section id="sponsors">
        <Sponsors />
      </section>

      <Footer />
    </>
  );
}

export default App;
