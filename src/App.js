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

// Bottom bar component that appears at the very bottom of the page
const BottomBar = () => (
  <div className="bg-black text-white text-center py-1 text-xs border-t border-gray-800">
    <p>© 2025 Hackabull</p>
  </div>
);

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

      <footer className="bg-gray-900 text-white text-center py-3 border-t border-green-700">
        <p className="text-sm md:text-base">
          Special thanks to HackDuke for providing the template! ❤️
        </p>
      </footer>
      
      <BottomBar />
    </>
  );
}

export default App;
